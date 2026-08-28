export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.shapoorji-vyomora.com/#website",
        "url": "https://www.shapoorji-vyomora.com",
        "name": "Shapoorji Pallonji Joyville Vyomora",
        "description": "Official portal for Shapoorji Pallonji Joyville Vyomora Hinjewadi & Mahalunge Pune luxury apartments.",
        "publisher": {
          "@id": "https://www.shapoorji-vyomora.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.shapoorji-vyomora.com/locations?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/#navigation",
        "name": "Site Navigation Sitelinks",
        "itemListElement": [
          { "@type": "SiteNavigationElement", "position": 1, "name": "Residences & Floor Plans", "url": "https://www.shapoorji-vyomora.com/residences" },
          { "@type": "SiteNavigationElement", "position": 2, "name": "32,000 sq. ft. Clubhouse & Amenities", "url": "https://www.shapoorji-vyomora.com/amenities" },
          { "@type": "SiteNavigationElement", "position": 3, "name": "Masterplan & Site Layout", "url": "https://www.shapoorji-vyomora.com/masterplan" },
          { "@type": "SiteNavigationElement", "position": 4, "name": "Location & Metro Connectivity", "url": "https://www.shapoorji-vyomora.com/location" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "Shapoorji Pallonji Pune Projects", "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects" },
          { "@type": "SiteNavigationElement", "position": 6, "name": "ROI & Investment Calculator", "url": "https://www.shapoorji-vyomora.com/investment-calculator" },
          { "@type": "SiteNavigationElement", "position": 7, "name": "Real Estate Market Articles", "url": "https://www.shapoorji-vyomora.com/articles" },
          { "@type": "SiteNavigationElement", "position": 8, "name": "Pune Micro-Markets Directory", "url": "https://www.shapoorji-vyomora.com/locations" }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.shapoorji-vyomora.com/#organization",
        "name": "Shapoorji Pallonji Joyville Homes Vyomora",
        "alternateName": [
          "Shapoorji Vyomara",
          "Shapoorji Pallonji Vyomara",
          "Joyville Vyomara",
          "Vyomara Hinjewadi",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi",
          "Shapoorji Pallonji Real Estate Pune",
          "Joyville Vyomora Hinjewadi",
          "Shapoorji Pallonji Real Estate Hinjewadi",
          "Joyville Homes Pune"
        ],
        "url": "https://www.shapoorji-vyomora.com",
        "priceRange": "INR 78 Lakhs - 2.50 Cr+",
        "description": "Ultra luxury 2BHK, 3BHK, 4BHK, Sky Duplex, Simplex, and 5BHK Sky Villa apartments in Hinjewadi and Mahalunge, Pune by Shapoorji Pallonji Real Estate.",
        "knowsAbout": [
          "Shapoorji Pallonji Real Estate",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi",
          "Shapoorji Vyomara Pune",
          "Joyville Homes Pune",
          "Hinjewadi Real Estate Market",
          "Mahalunge Township Projects",
          "2 BHK 3 BHK 4 BHK Flats in Hinjewadi",
          "Sky Duplex & 5 BHK Sky Villas Pune"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.shapoorji-vyomora.com/icon.svg"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7744009295",
          "contactType": "sales",
          "areaServed": ["IN", "AE", "US", "SG", "GB", "QA", "KW"],
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park",
          "addressLocality": "Hinjewadi, Pune",
          "postalCode": "411057",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "hasMap": "https://maps.google.com/?q=18.5912,73.7389",
        "sameAs": [
          "https://www.facebook.com/shapoorjipallonji/",
          "https://twitter.com/shapoorjipallonji",
          "https://www.instagram.com/shapoorjipallonji/"
        ]
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.shapoorji-vyomora.com/#project",
        "name": "Vyomora by Shapoorji Pallonji Joyville",
        "alternateName": [
          "Shapoorji Vyomara",
          "Shapoorji Pallonji Vyomara",
          "Joyville Vyomara",
          "Vyomara Hinjewadi",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi"
        ],
        "description": "Ultra luxury township offering 2BHK in Hinjewadi, 3BHK in Mahalunge, 4BHK in Baner, Sky Duplexes, Simplexes, and Penthouses near Rajiv Gandhi Infotech Park Pune by Shapoorji Pallonji Real Estate.",
        "url": "https://www.shapoorji-vyomora.com",
        "telephone": "+91-7744009295",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park, Mahalunge-Hinjewadi",
          "addressLocality": "Hinjewadi, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5912",
          "longitude": "73.7389"
        },
        "hasMap": "https://maps.google.com/?q=18.5912,73.7389",
        "numberOfRooms": ["2", "3", "4", "5"],
        "petsAllowed": "True",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "32,000+ sq. ft. Luxury Clubhouse", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Rajiv Gandhi IT Park & Metro Connectivity", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Automation & Voice Controls", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Infinity Temperature-Controlled Swimming Pool", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Multi-Tier Sports Arena & Cricket Pitch", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Elevated Sky Deck & Nature Trails", "value": "True" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "7800000",
          "highPrice": "35000000",
          "offerCount": "120",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#2bhk-luxury-unit",
        "name": "2 BHK Luxury Smart Apartment - Shapoorji Pallonji Vyomora Hinjewadi",
        "description": "Premium 2 BHK apartment in Hinjewadi Phase 1 with smart home automation, expansive balcony, and modern kitchen.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Residential Apartments > 2 BHK",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "7800000",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#3bhk-luxury-unit",
        "name": "3 BHK Premium Garden View Apartment - Shapoorji Pallonji Vyomora Mahalunge",
        "description": "Spacious 3 BHK luxury apartment in Mahalunge-Hinjewadi with panoramic hill views, utility balcony, and master suite.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Residential Apartments > 3 BHK",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "12500000",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#4bhk-sky-suite",
        "name": "4 BHK Presidential Sky Suite & Duplex - Shapoorji Pallonji Vyomora Baner",
        "description": "Grand 4 BHK luxury residence and sky duplex in Baner-Mahalunge corridor with private deck, staff quarters, and double-height living room.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Luxury Penthouses & Duplex > 4 BHK",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "18500000",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.shapoorji-vyomora.com/#localbusiness",
        "name": "Shapoorji Pallonji Joyville Vyomora Experience Centre & Sales Office",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "telephone": "+91-7744009295",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park, Mahalunge",
          "addressLocality": "Hinjewadi, Pune",
          "postalCode": "411057",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5913",
          "longitude": "73.7389"
        },
        "hasMap": "https://maps.google.com/?q=18.5913,73.7389",
        "url": "https://www.shapoorji-vyomora.com/location",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/#pune-projects-portfolio",
        "name": "Shapoorji Pallonji Real Estate & Joyville Homes Pune Portfolio",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Shapoorji Pallonji Joyville Vyomora (Hinjewadi - Mahalunge)",
            "url": "https://www.shapoorji-vyomora.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Joyville Sensorium Hinjewadi Phase 1",
            "url": "https://www.shapoorji-vyomora.com/articles/joyville-sensorium-vs-joyville-vyomora-hinjewadi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Joyville Hadapsar Annexe East Pune",
            "url": "https://www.shapoorji-vyomora.com/articles/shapoorji-pallonji-pune-projects-2026-guide"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Shapoorji Pallonji Wildstone Bavdhan",
            "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Shapoorji Pallonji Vanaha & Golfland",
            "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Shapoorji Pallonji Celestian",
            "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What configurations are available at Shapoorji Pallonji Vyomora Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora offers 2 BHK in Hinjewadi, 3 BHK in Mahalunge, 4 BHK in Baner-Mahalunge, Sky Duplexes, Simplexes, 5 BHK Sky Villas, and Presidential Penthouses with sizes ranging from 685 sq. ft. to 1,600+ sq. ft."
            }
          },
          {
            "@type": "Question",
            "name": "Is Shapoorji Pallonji Vyomora worth buying for investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Joyville Homes Vyomora is highly recommended. It offers luxury living, a massive 32,000 sq. ft. clubhouse, and is strategically located in the Hinjewadi-Mahalunge IT Corridor near Metro Line 3, ensuring high rental yields and 12-15% annual capital appreciation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the MahaRERA registration number for Shapoorji Pallonji Vyomora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora is registered under MahaRERA No: PR1260002600999, verified on the official MahaRERA website (maharera.mahaonline.gov.in)."
            }
          },
          {
            "@type": "Question",
            "name": "How does Shapoorji Vyomora compare with Godrej Hillside and Kolte Patil Life Republic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Vyomora features a 150-year engineering legacy, superior seismic-resistant build quality, an expansive 32,000 sq. ft. clubhouse, and prime walk-to-work proximity to Hinjewadi Phase 1, making it the top luxury choice in West Pune."
            }
          },
          {
            "@type": "Question",
            "name": "Can NRIs buy property in Shapoorji Pallonji Vyomora Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, NRIs from Dubai, USA, Singapore, UK, Kuwait, and Qatar can seamlessly purchase apartments in Shapoorji Pallonji Vyomora through authorized channel partners, with complete digital documentation, remote NRI home loans, and dedicated property management assistance."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
