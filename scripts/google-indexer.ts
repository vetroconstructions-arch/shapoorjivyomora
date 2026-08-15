import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import { SEOLocations, SEONRILocations, SEOConfigurations, SEOTopics } from '../src/lib/programmaticSEO';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const BASE_URL = 'https://www.shapoorji-vyomora.com';
const QUOTA_LIMIT = 200; // Google Indexing API daily limit

// Path to store state so we don't submit the same URLs over and over
const STATE_FILE = path.join(process.cwd(), '.seo-indexer-state.json');

async function getAuthClient() {
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  
  if (!credentialsJson) {
    console.warn("⚠️ GOOGLE_SERVICE_ACCOUNT_JSON not found. Skipping Google Indexing API.");
    return null;
  }

  try {
    const credentials = JSON.parse(credentialsJson);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    return auth.getClient();
  } catch (error) {
    console.error("❌ Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON", error);
    return null;
  }
}

async function pingSitemaps() {
  console.log("🌐 Pinging search engines with latest sitemap...");
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;
  
  try {
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    console.log("✅ Google sitemap ping successful.");
  } catch (e) {
    console.error("❌ Google sitemap ping failed:", e);
  }

  try {
    await fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);
    console.log("✅ Bing sitemap ping successful.");
  } catch (e) {
    console.error("❌ Bing sitemap ping failed:", e);
  }
}

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
  }
  return { lastIndexSubmitted: 0 };
}

function saveState(state: any) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function main() {
  console.log("🚀 Starting SEO Indexing Engine...");
  
  // 1. Ping Sitemaps First
  await pingSitemaps();

  // 2. Setup Google Indexing API
  const authClient = await getAuthClient();
  if (!authClient) {
    console.log("🛑 Exiting Indexing API workflow due to missing credentials.");
    return;
  }

  const indexing = google.indexing({ version: 'v3', auth: authClient as any });
  const state = loadState();

  // 3. Generate all possible URLs
  const allLocations = [...SEOLocations, ...SEONRILocations];
  const allProgrammaticUrls: string[] = [];
  
  // Hubs & Priority Pages
  const priorityRoutes = [
    '/', '/locations', '/investment-calculator', '/vision', '/contact'
  ].map(r => `${BASE_URL}${r}`);

  for (const location of allLocations) {
    for (const config of SEOConfigurations) {
      for (const topic of SEOTopics) {
        allProgrammaticUrls.push(`${BASE_URL}/market/${location}/${config}/${topic}`);
      }
    }
  }

  // Combine Priority + Next Chunk of Programmatic
  // We want to submit the priority routes every time they change, but for daily cron, 
  // we just iterate through the programmatic list.
  let startIndex = state.lastIndexSubmitted;
  let endIndex = startIndex + QUOTA_LIMIT;
  
  if (endIndex > allProgrammaticUrls.length) {
    // Loop back to start if we finished all
    endIndex = QUOTA_LIMIT;
    startIndex = 0;
  }

  const urlsToSubmit = allProgrammaticUrls.slice(startIndex, endIndex);

  console.log(`📦 Preparing to submit ${urlsToSubmit.length} URLs to Google...`);

  let successCount = 0;
  for (const url of urlsToSubmit) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      successCount++;
      // Sleep to prevent rate limit spikes (e.g. 500ms)
      await new Promise(r => setTimeout(r, 500));
    } catch (error: any) {
      console.error(`❌ Failed to submit ${url}:`, error.message || error);
    }
  }

  console.log(`✅ Successfully submitted ${successCount} URLs.`);
  
  // Update state
  state.lastIndexSubmitted = endIndex;
  saveState(state);
}

main().catch(console.error);
