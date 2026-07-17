export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://shapoorji-vyomora.com/#organization",
        "name": "Shapoorji Pallonji Joyville Homes Vyomora",
        "url": "https://shapoorji-vyomora.com",
        "priceRange": "Premium",
        "description": "Ultra luxury 2BHK, 3BHK, 4BHK, duplex, and skyduplex residences in Hinjewadi, Mahalunge, and Baner, Pune.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shapoorji-vyomora.com/icon.svg"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Mahalunge - Hinjawadi",
          "addressLocality": "Pune",
          "postalCode": "411057",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Product",
        "name": "Luxury 2BHK Apartments in Hinjewadi",
        "description": "Premium 2 BHK flats near Hinjewadi IT Park, Pune, perfect for IT professionals.",
        "category": "Real Estate",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "8499000",
          "availability": "https://schema.org/PreOrder"
        }
      },
      {
        "@type": "Product",
        "name": "Premium 3BHK & 4BHK Flats in Mahalunge",
        "description": "Ultra-luxury 3 BHK and 4 BHK apartments in Mahalunge, Pune. Resort-style amenities.",
        "category": "Real Estate",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "14500000",
          "availability": "https://schema.org/PreOrder"
        }
      },
      {
        "@type": "Product",
        "name": "Luxury Duplex & Skyduplex in Baner",
        "description": "Exclusive duplex and skyduplex penthouses for sale in Baner and Hinjewadi corridor.",
        "category": "Real Estate",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/PreOrder"
        }
      },
      {
        "@type": "Residence",
        "@id": "https://shapoorji-vyomora.com/#project",
        "name": "Vyomora by Shapoorji Pallonji Joyville",
        "description": "Premium residential township development project located in Mahalunge and Hinjewadi, Pune. Featuring 2BHK, 3BHK, 4BHK, simplex and duplex homes.",
        "url": "https://shapoorji-vyomora.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hinjewadi Phase 1, Mahalunge",
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
        "numberOfRooms": ["2", "3", "4", "5"],
        "petsAllowed": "True",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "32,000+ sq. ft. Clubhouse", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Elevated Eco-Deck", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Features", "value": "True" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What configurations are available at Shapoorji Pallonji Joyville Vyomora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vyomora offers premium 2BHK, 3BHK, 4BHK, duplex, and skyduplex residences tailored for luxury living in Pune."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the Shapoorji Pallonji Vyomora project located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project is strategically located in the Mahalunge and Hinjewadi Phase 1 corridor in Pune, offering excellent connectivity to Baner and the IT Park."
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
