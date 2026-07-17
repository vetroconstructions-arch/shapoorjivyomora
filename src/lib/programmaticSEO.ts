export const SEOLocations = [
  "hinjewadi", "mahalunge", "baner", "wakad", "balewadi",
  "pimpri-chinchwad", "aundh", "pashan", "bavdhan", "sus",
  "punawale", "tathawade", "ravet", "kothrud", "shivaji-nagar",
  "viman-nagar", "kalyani-nagar", "koregaon-park", "kharadi", "magarpatta",
  "hadapsar", "wagholi", "pune-west", "pune-mumbai-highway", "hinjewadi-phase-1"
];

export const SEOConfigurations = [
  "2bhk-flats", "3bhk-apartments", "4bhk-luxury-homes", "duplex-penthouses",
  "2-bhk-premium-flats", "3-bhk-luxury-flats", "4-bhk-premium-apartments",
  "luxury-sky-villas", "premium-residential-projects", "new-launch-projects",
  "under-construction-projects", "ready-to-move-flats", "luxury-townships",
  "premium-gated-communities", "2bhk-3bhk-flats", "3bhk-4bhk-apartments",
  "luxury-real-estate", "spacious-balcony-flats", "smart-home-apartments", "vastu-compliant-homes"
];

export const SEOTopics = [
  "price-trends", "floor-plans", "masterplan", "amenities", "connectivity",
  "investment-roi", "real-estate-reviews", "location-benefits", "brochure-download",
  "site-visit", "nri-investment", "stamp-duty-registration", "home-loan-offers",
  "possession-date", "construction-update", "sample-flat-video", "project-specifications",
  "rera-details", "builder-reputation", "resale-value", "capital-appreciation",
  "rental-yield", "top-schools-nearby", "it-parks-distance", "future-infrastructure"
];

// Deterministic Pseudo-Random Number Generator based on string seed
function pseudoRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export function generateSEOContent(location: string, configuration: string, topic: string) {
  const cleanLocation = location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanConfig = configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanTopic = topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  
  const seed = `${location}-${configuration}-${topic}`;
  const hash = pseudoRandom(seed);

  // Spintax Arrays for Extreme SEO Variance & Ultra Advanced Keyword Injection
  const intros = [
    `The Pune Real Estate Market in ${cleanLocation} is witnessing unprecedented growth, making it the absolute perfect time to explore ${cleanConfig}.`,
    `If you are searching for premium real estate in West Pune, the demand for ${cleanConfig} in ${cleanLocation} is currently at an all-time high.`,
    `Shapoorji Pallonji Joyville Homes Vyomora represents the pinnacle of luxury living, especially when evaluating ${cleanConfig} within the highly sought-after ${cleanLocation} micro-market.`,
    `Investors and homebuyers alike are turning their attention to the Hinjewadi Real Estate Market and ${cleanLocation} for securing high-yield ${cleanConfig}, driven by robust infrastructure growth.`,
    `Discover the ultimate luxury lifestyle in ${cleanLocation}. The latest Pune Real Estate trends indicate a massive surge in interest for meticulously designed ${cleanConfig}.`
  ];

  const midsections = [
    `At Shapoorji Pallonji Vyomora Hinjewadi, we redefine architectural brilliance. When considering the ${cleanTopic} associated with your investment, our transparent approach provides unmatched peace of mind.`,
    `Understanding the precise ${cleanTopic} is crucial for securing a high-ROI asset in the competitive West Pune Real Estate Market. Joyville Homes Vyomora is strategically positioned to exceed all expectations.`,
    `The Pune Real Estate Market is evolving rapidly. By deeply analyzing the ${cleanTopic} for ${cleanConfig}, buyers can unlock immense capital appreciation at Shapoorji Pallonji Vyomora.`,
    `Vyomora Hinjewadi offers over 32,000 sq.ft of clubhouse luxury. Couple this with our industry-leading insights on ${cleanTopic}, and the decision to invest becomes crystal clear.`,
    `Whether you are a first-time homebuyer or a seasoned NRI investor, navigating the ${cleanTopic} of ${cleanLocation} real estate is streamlined flawlessly by the Shapoorji Pallonji legacy.`
  ];

  const ctas = [
    `Schedule an exclusive VIP site visit today to experience Joyville Homes Vyomora Hinjewadi firsthand.`,
    `Download the official Shapoorji Pallonji Vyomora brochure to explore the detailed ${cleanTopic} and floor plans.`,
    `Contact our West Pune Real Estate experts immediately to secure the best pre-launch pricing and inventory.`,
    `Don't miss out on the fastest appreciating asset in the Hinjewadi Real Estate Market. Request a personalized consultation regarding ${cleanTopic} now.`,
    `Unlock exclusive home loan offers and NRI investment guidance for your new home in ${cleanLocation}.`
  ];

  const p1 = intros[hash % intros.length] + ' ' + midsections[(hash + 1) % midsections.length];
  const p2 = midsections[(hash + 2) % midsections.length] + ' ' + ctas[(hash + 3) % ctas.length];

  const title = `${cleanConfig} in ${cleanLocation} | ${cleanTopic} | Shapoorji Pallonji Vyomora`;
  const description = `Explore the best ${cleanConfig} in ${cleanLocation}. Discover in-depth insights on ${cleanTopic} at Shapoorji Pallonji Joyville Vyomora, West Pune's ultimate luxury township.`;
  
  const h1 = `Discover ${cleanConfig} in ${cleanLocation}: A Deep Dive into ${cleanTopic}`;

  const faq1 = {
    question: `Why is the ${cleanLocation} Real Estate Market ideal for ${cleanConfig}?`,
    answer: `The ${cleanLocation} real estate corridor, heavily anchored by Hinjewadi and West Pune developments, offers exceptional returns due to proximity to major IT hubs, seamless connectivity, and robust future infrastructure. Specifically, understanding the ${cleanTopic} gives Joyville Homes Vyomora buyers a distinct advantage.`
  };

  const faq2 = {
    question: `What makes Shapoorji Pallonji Vyomora the absolute best choice regarding ${cleanTopic}?`,
    answer: `Shapoorji Pallonji brings over 150 years of legacy to West Pune. When it comes to ${cleanTopic} for ${cleanConfig} in ${cleanLocation}, Vyomora stands completely unmatched in architectural quality, transparency, and high-intent luxury living.`
  };

  return { title, description, h1, p1, p2, faqs: [faq1, faq2] };
}
