export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.shapoorji-vyomora.com/#organization",
        "name": "Shapoorji Pallonji Joyville Homes Vyomora",
        "url": "https://www.shapoorji-vyomora.com",
        "priceRange": "Premium",
        "description": "Ultra luxury 2BHK, 3BHK, 4BHK apartments in Hinjewadi, Pune by Shapoorji Pallonji.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.shapoorji-vyomora.com/icon.svg"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7744009295",
          "contactType": "sales",
          "areaServed": "IN",
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
        "sameAs": [
          "https://www.facebook.com/shapoorjipallonji/",
          "https://twitter.com/shapoorjipallonji",
          "https://www.instagram.com/shapoorjipallonji/"
        ]
      },
      {
        "@type": "Residence",
        "@id": "https://www.shapoorji-vyomora.com/#project",
        "name": "Vyomora by Shapoorji Pallonji Joyville",
        "description": "Premium residential township development project located in Hinjewadi, Pune. Featuring luxury 2BHK, 3BHK, and 4BHK apartments.",
        "url": "https://www.shapoorji-vyomora.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hinjewadi Phase 1, Near Infosys",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5912",
          "longitude": "73.7389"
        },
        "numberOfRooms": ["2", "3", "4"],
        "petsAllowed": "True",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "32,000+ sq. ft. Clubhouse", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "IT Corridor Connectivity", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Features", "value": "True" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Shapoorji Pallonji Vyomora worth buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Joyville Homes Vyomora is highly recommended. It offers luxury living, a massive clubhouse, and is strategically located in the Hinjewadi IT Corridor, ensuring high ROI and excellent capital appreciation."
            }
          },
          {
            "@type": "Question",
            "name": "Is Hinjewadi good for investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hinjewadi is one of the best areas for real estate investment in Pune. Driven by the Rajiv Gandhi Infotech Park, the upcoming Pune Metro, and massive infrastructure growth, properties here yield high rental income and strong appreciation."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best residential project in Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora is widely considered the best residential project in Hinjewadi due to its premium 2, 3 & 4 BHK configurations, trusted 150-year builder legacy, and unmatched lifestyle amenities."
            }
          },
          {
            "@type": "Question",
            "name": "Is Shapoorji Pallonji a trusted builder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Shapoorji Pallonji has an unparalleled 150-year legacy in real estate and construction, delivering iconic structures across India. They are renowned for transparency, quality, and timely possession."
            }
          },
          {
            "@type": "Question",
            "name": "What is the future of Hinjewadi real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The future of Hinjewadi real estate is extremely bright. With massive IT park expansions, smart city initiatives, and seamless connectivity via the Mumbai-Pune Expressway, property values are projected to soar."
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
