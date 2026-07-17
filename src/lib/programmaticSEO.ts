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

// 25 * 20 * 25 = 12,500 Permutations!

export function generateSEOContent(location: string, configuration: string, topic: string) {
  const cleanLocation = location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanConfig = configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanTopic = topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  const title = `${cleanConfig} in ${cleanLocation} | ${cleanTopic} | Shapoorji Pallonji Vyomora`;
  const description = `Explore the best ${cleanConfig} in ${cleanLocation}. Discover in-depth insights on ${cleanTopic} at Shapoorji Pallonji Joyville Vyomora, Pune's ultimate luxury township.`;
  
  const h1 = `Discover ${cleanConfig} in ${cleanLocation}: A Deep Dive into ${cleanTopic}`;
  
  const p1 = `The real estate market in ${cleanLocation} is witnessing unprecedented growth, making it the perfect time to explore ${cleanConfig}. At Shapoorji Pallonji Joyville Vyomora, we redefine luxury living by offering world-class infrastructure that perfectly complements the ${cleanTopic} demands of modern homebuyers.`;
  
  const p2 = `When evaluating ${cleanConfig} in ${cleanLocation}, understanding the ${cleanTopic} is crucial for securing a high-ROI investment. Vyomora by Shapoorji Pallonji is strategically positioned to offer immense capital appreciation while providing over 32,000 sq.ft of clubhouse luxury and 40+ lifestyle amenities.`;

  const faq1 = {
    question: `Why should I invest in ${cleanConfig} in ${cleanLocation}?`,
    answer: `Investing in ${cleanConfig} in ${cleanLocation} offers exceptional returns due to proximity to major IT hubs, seamless connectivity, and robust future infrastructure developments. Specifically, understanding the ${cleanTopic} gives buyers a distinct advantage.`
  };

  const faq2 = {
    question: `What makes Shapoorji Pallonji Vyomora the best choice for ${cleanTopic}?`,
    answer: `Shapoorji Pallonji brings over 150 years of legacy. When it comes to ${cleanTopic} for ${cleanConfig} in ${cleanLocation}, Vyomora stands completely unmatched in quality, transparency, and luxury.`
  };

  return { title, description, h1, p1, p2, faqs: [faq1, faq2] };
}
