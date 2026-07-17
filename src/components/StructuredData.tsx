export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://vyomora-hinjewadi.com/#organization",
        "name": "Shapoorji Pallonji Real Estate",
        "url": "https://shapoorjivyomora.com",
        "priceCurrency": "INR",
        "price": "8499000",
        "availability": "https://schema.org/PreOrder",
        "itemCondition": "https://schema.org/NewCondition",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vyomora-hinjewadi.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Unit Size",
            "value": "685 - 1434 sq. ft."
          },
          {
            "@type": "PropertyValue",
            "name": "Location",
            "value": "Hinjawadi, Pune"
          },
          {
            "@type": "PropertyValue",
            "name": "Land Area",
            "value": "25 Acres"
          },
          {
            "@type": "PropertyValue",
            "name": "RERA Registration Number",
            "value": "PR1260002600999"
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Shapoorji Pallonji Real Estate",
        "url": "https://shapoorjirealestate.com/",
        "logo": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vymora-by-joyville/logo/white-logo.svg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1",
          "addressLocality": "Hinjawadi, Pune",
          "postalCode": "411057",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Residence",
        "@id": "https://vyomora-hinjewadi.com/#project",
        "name": "Vyomora by Shapoorji Pallonji",
        "description": "Luxury 2, 3 & 3 BHK Duplex residences in Hinjewadi Phase 1, Pune.",
        "url": "https://vyomora-hinjewadi.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hinjewadi Phase 1",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5912", // Approximate, replace with exact
          "longitude": "73.7389"
        },
        "numberOfRooms": ["2", "3"],
        "petsAllowed": "True",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Swimming Pool",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Gymnasium",
            "value": "True"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What configurations are available at Vyomora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vyomora offers premium 2 BHK, 3 BHK, and 3 BHK Duplex residences."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Vyomora located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project is strategically located in Phase 1, Hinjewadi, Pune, close to major IT parks."
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
