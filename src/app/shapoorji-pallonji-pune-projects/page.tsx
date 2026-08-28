import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ShieldCheck, Award, MapPin, Building, ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Shapoorji Pallonji Projects in Pune | Joyville Homes Pune Complete Portfolio",
  description: "Explore all Shapoorji Pallonji and Joyville Homes projects in Pune. Comprehensive guide to Vyomora Hinjewadi, Sensorium, Hadapsar Annexe, Wildstone, Celestian, and Vanaha Bavdhan.",
  keywords: [
    "shapoorji pallonji projects in pune",
    "shapoorji pallonji real estate pune",
    "joyville homes pune",
    "shapoorji pallonji pune",
    "all shapoorji pallonji projects in pune",
    "shapoorji pallonji pune projects list",
    "shapoorji pallonji vyomora",
    "shapoorji vyomara",
    "joyville sensorium hinjewadi",
    "joyville hadapsar annexe",
    "shapoorji pallonji wildstone",
    "shapoorji pallonji celestian",
    "shapoorji vanaha bavdhan",
    "best shapoorji projects in pune",
    "joyville homes price list pune",
    "shapoorji pallonji hinjewadi",
    "shapoorji pallonji mahalunge",
    "best shapoorji pallonji project to invest in pune"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects",
  },
  openGraph: {
    title: "Shapoorji Pallonji & Joyville Homes Pune: Complete Project Portfolio & Price Guide",
    description: "Discover all residential township developments by Shapoorji Pallonji Real Estate across West and East Pune. Compare floor plans, amenities, prices, and ROI.",
    url: "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects",
    type: "website",
    images: [{
      url: "https://www.shapoorji-vyomora.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Shapoorji Pallonji Projects in Pune - Joyville Homes Portfolio"
    }]
  }
};

const puneProjects = [
  {
    id: "vyomora",
    name: "Shapoorji Pallonji Joyville Vyomora",
    badge: "Flagship Luxury New Launch",
    location: "Mahalunge - Hinjewadi Phase 1, West Pune",
    typology: "2, 3, 4 BHK, Sky Duplex & 5 BHK Sky Villas",
    carpetArea: "685 - 1,600+ sq. ft.",
    price: "₹78 Lakhs - ₹2.50 Cr+",
    status: "New Launch / Pre-Booking",
    highlights: ["32,000+ sq. ft. Clubhouse", "5 Mins to Rajiv Gandhi IT Park", "Metro Line 3 Connectivity", "Smart Home Automation"],
    rera: "PR1260002600999",
    featured: true,
    link: "/"
  },
  {
    id: "sensorium",
    name: "Joyville Sensorium",
    badge: "Tech-Forward Landmark",
    location: "Hinjewadi Phase 1, Pune",
    typology: "2 & 3 BHK Luxury Apartments",
    carpetArea: "700 - 1,050 sq. ft.",
    price: "₹75 Lakhs - ₹1.25 Cr",
    status: "Under Construction / Rapid Selling",
    highlights: ["Multi-Sensory Park & 5D Experience", "Walk to Work for IT Hubs", "2.8 Acres Central Park"],
    rera: "P52100024965",
    featured: false,
    link: "/articles/joyville-sensorium-vs-joyville-vyomora-hinjewadi"
  },
  {
    id: "hadapsar",
    name: "Joyville Hadapsar Annexe",
    badge: "East Pune Mega Township",
    location: "Manjri - Hadapsar, East Pune",
    typology: "1, 2 & 3 BHK Township Residences",
    carpetArea: "430 - 890 sq. ft.",
    price: "₹45 Lakhs - ₹95 Lakhs",
    status: "Under Construction / Phased Handover",
    highlights: ["60+ Lifestyle Amenities", "8.8 Acres of Central Greenery", "Proximity to SP Infocity & Magarpatta"],
    rera: "P52100026451",
    featured: false,
    link: "/articles/shapoorji-pallonji-pune-projects-2026-guide"
  },
  {
    id: "wildstone",
    name: "Shapoorji Pallonji Wildstone",
    badge: "Hillside Forest Living",
    location: "Bavdhan - Oxford Valley, West Pune",
    typology: "2 & 3 BHK Nature Residences",
    carpetArea: "750 - 1,120 sq. ft.",
    price: "₹85 Lakhs - ₹1.45 Cr",
    status: "Premium Residential",
    highlights: ["Forest & Mountain Panoramas", "Clean Air Micro-Climate", "Minutes from Chandani Chowk & Kothrud"],
    rera: "P52100030012",
    featured: false,
    link: "/articles/shapoorji-pallonji-pune-projects-2026-guide"
  },
  {
    id: "vanaha",
    name: "Shapoorji Pallonji Vanaha & Golfland",
    badge: "1000+ Acre Valley Township",
    location: "Near Bavdhan, Pune West",
    typology: "1, 2, 3, 4 BHK & Luxury Golf Villas",
    carpetArea: "500 - 2,200 sq. ft.",
    price: "₹55 Lakhs - ₹3.80 Cr+",
    status: "Mega Masterplanned Valley",
    highlights: ["18-Hole Golf Course Access", "Over 50,000 Trees on-site", "Valley Views & Riverside Trails"],
    rera: "P52100028033",
    featured: false,
    link: "/articles/shapoorji-pallonji-pune-projects-2026-guide"
  },
  {
    id: "celestian",
    name: "Shapoorji Pallonji Celestian",
    badge: "Skyline Icon",
    location: "Bavdhan West Pune",
    typology: "3 & 4 BHK Sky Residences",
    carpetArea: "1,050 - 1,450 sq. ft.",
    price: "₹1.20 Cr - ₹2.10 Cr",
    status: "Elite High-Rise",
    highlights: ["Rooftop Sky Lounges", "Low Density Living", "Seamless Western Bypass Access"],
    rera: "P52100029544",
    featured: false,
    link: "/articles/shapoorji-pallonji-pune-projects-2026-guide"
  }
];

export default function ShapoorjiPuneProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects#list",
        "name": "Shapoorji Pallonji Real Estate & Joyville Homes Projects in Pune",
        "description": "Comprehensive list of residential townships and luxury projects by Shapoorji Pallonji in Pune.",
        "itemListElement": puneProjects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "ApartmentComplex",
            "name": project.name,
            "description": `${project.typology} in ${project.location}. ${project.highlights.join(", ")}.`,
            "url": `https://www.shapoorji-vyomora.com${project.link}`,
            "priceRange": project.price,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": project.location,
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best Shapoorji Pallonji project in Pune for investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora (Mahalunge-Hinjewadi) is currently the #1 investment choice. As the newest flagship launch in West Pune, it offers pre-launch price benefits, massive 2, 3, 4 BHK & Sky Duplex typologies, a 32,000 sq. ft. clubhouse, and highest projected capital appreciation near the IT corridor."
            }
          },
          {
            "@type": "Question",
            "name": "What is Joyville Homes in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joyville Homes is the premier residential township development platform by Shapoorji Pallonji Real Estate, offering world-class amenities, superior build quality, and transparent handover timelines across key Pune growth corridors like Hinjewadi, Mahalunge, Hadapsar, and Bavdhan."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price range of Shapoorji Pallonji projects in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Pune homes range from ₹45 Lakhs for 1 BHK & compact 2 BHK units at Hadapsar Annexe up to ₹2.50 Cr+ for ultra-luxury 4 BHKs, Sky Duplexes, and Golf Villas at Joyville Vyomora Hinjewadi and Vanaha Bavdhan."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C5A059]/15 to-transparent rounded-bl-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Breadcrumbs 
            items={[{ label: "Shapoorji Pallonji Pune Projects", href: "/shapoorji-pallonji-pune-projects" }]} 
          />
          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-6">
              <Award size={14} />
              150+ Years Builder Legacy • Pune Real Estate Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Shapoorji Pallonji Projects <br />
              <span className="text-[#C5A059]">& Joyville Homes Pune.</span>
            </h1>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-3xl">
              Explore the complete residential township ecosystem developed by <strong>Shapoorji Pallonji Real Estate</strong> across Pune. From the flagship <strong>Joyville Vyomora (Mahalunge-Hinjewadi)</strong> to <strong>Sensorium</strong>, <strong>Hadapsar Annexe</strong>, and <strong>Vanaha Bavdhan</strong>, discover luxury living engineered for maximum capital growth.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Feature Banner */}
      <section className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        <div className="bg-gradient-to-r from-[#0A192F] via-[#152a4a] to-[#0A192F] border border-[#C5A059]/40 rounded-2xl p-8 md:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-3">
              <Sparkles size={16} />
              #1 Ranked Flagship Township
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Joyville Vyomora: Hinjewadi & Mahalunge
            </h2>
            <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-6">
              The crown jewel of the Shapoorji Pallonji Pune portfolio. Offering premium 2 BHK, 3 BHK, 4 BHK & Sky Duplexes with a monumental 32,000+ sq. ft. clubhouse right at the doorstep of the Rajiv Gandhi IT Park.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">MahaRERA: PR1260002600999</span>
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1.5 rounded-full border border-[#C5A059]/30">Pre-Launch Priority Pricing Active</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
            <Link 
              href="/"
              className="px-8 py-4 bg-[#C5A059] text-[#0A192F] font-bold text-center rounded-lg hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Explore Vyomora Details
              <ArrowRight size={16} />
            </Link>
            <a 
              href="tel:+917744009295"
              className="px-8 py-4 border border-white/30 text-white font-medium text-center rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call: +91 7744009295
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 md:px-12 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-3">Complete Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F]">
            All Shapoorji Pallonji & Joyville Developments in Pune
          </h2>
          <p className="text-gray-600 mt-4 font-light">
            Compare prices, typologies, RERA registration numbers, and key connectivity highlights across all flagship projects in Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puneProjects.map((project) => (
            <div 
              key={project.id}
              className={`bg-white rounded-2xl border ${project.featured ? 'border-[#C5A059] ring-2 ring-[#C5A059]/20 shadow-xl' : 'border-black/5 shadow-md'} p-8 flex flex-col justify-between hover:shadow-xl transition-all group`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${project.featured ? 'bg-[#C5A059] text-[#0A192F]' : 'bg-gray-100 text-gray-700'}`}>
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400">RERA: {project.rera}</span>
                </div>

                <h3 className="text-2xl font-serif text-[#0A192F] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-6">
                  <MapPin size={14} className="text-[#C5A059] shrink-0" />
                  {project.location}
                </p>

                <div className="space-y-3 border-t border-b border-gray-100 py-4 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Configurations:</span>
                    <span className="font-semibold text-[#0A192F] text-right">{project.typology}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Carpet Area:</span>
                    <span className="font-medium text-gray-700">{project.carpetArea}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price Guide:</span>
                    <span className="font-bold text-[#C5A059]">{project.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium">{project.status}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-[#C5A059] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link 
                href={project.link}
                className={`w-full py-3 text-center rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${project.featured ? 'bg-[#0A192F] text-white hover:bg-[#152a4a]' : 'bg-gray-100 text-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F]'}`}
              >
                View Project Details
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="container mx-auto px-6 md:px-12 mt-24">
        <div className="bg-white rounded-2xl border border-black/5 shadow-xl p-8 md:p-12 overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-serif text-[#0A192F] mb-6">
            Comprehensive Comparison Matrix: Shapoorji Pallonji Pune Projects
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="border-b-2 border-[#0A192F]/10 text-[#0A192F] font-bold text-xs uppercase tracking-wider bg-gray-50">
                  <th className="py-4 px-4">Project Name</th>
                  <th className="py-4 px-4">Location</th>
                  <th className="py-4 px-4">Typologies</th>
                  <th className="py-4 px-4">Price Range</th>
                  <th className="py-4 px-4">Clubhouse Scale</th>
                  <th className="py-4 px-4">IT Proximity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-[#C5A059]/5 font-semibold text-[#0A192F]">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    Joyville Vyomora (Flagship)
                  </td>
                  <td className="py-4 px-4">Mahalunge - Hinjewadi</td>
                  <td className="py-4 px-4">2, 3, 4 BHK & Sky Duplex</td>
                  <td className="py-4 px-4 text-[#C5A059]">₹78 L - ₹2.50 Cr+</td>
                  <td className="py-4 px-4">32,000+ sq. ft.</td>
                  <td className="py-4 px-4">5 Mins to Phase 1</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-[#0A192F]">Joyville Sensorium</td>
                  <td className="py-4 px-4">Hinjewadi Phase 1</td>
                  <td className="py-4 px-4">2 & 3 BHK</td>
                  <td className="py-4 px-4">₹75 L - ₹1.25 Cr</td>
                  <td className="py-4 px-4">25,000 sq. ft.</td>
                  <td className="py-4 px-4">Walk-to-Work Phase 1</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="py-4 px-4 font-medium text-[#0A192F]">Joyville Hadapsar Annexe</td>
                  <td className="py-4 px-4">Hadapsar - Manjri</td>
                  <td className="py-4 px-4">1, 2, 3 BHK</td>
                  <td className="py-4 px-4">₹45 L - ₹95 L</td>
                  <td className="py-4 px-4">Clubhouse & 60+ Amenities</td>
                  <td className="py-4 px-4">SP Infocity / Magarpatta</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-[#0A192F]">Shapoorji Wildstone</td>
                  <td className="py-4 px-4">Bavdhan West Pune</td>
                  <td className="py-4 px-4">2 & 3 BHK</td>
                  <td className="py-4 px-4">₹85 L - ₹1.45 Cr</td>
                  <td className="py-4 px-4">Valley View Club</td>
                  <td className="py-4 px-4">15 Mins to Kothrud</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="py-4 px-4 font-medium text-[#0A192F]">Shapoorji Vanaha & Golfland</td>
                  <td className="py-4 px-4">Bavdhan - Oxford Valley</td>
                  <td className="py-4 px-4">1, 2, 3, 4 BHK & Villas</td>
                  <td className="py-4 px-4">₹55 L - ₹3.80 Cr+</td>
                  <td className="py-4 px-4">Golf Course & Sports Hub</td>
                  <td className="py-4 px-4">20 Mins to Hinjewadi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container mx-auto px-6 md:px-12 mt-20 max-w-4xl">
        <h2 className="text-3xl font-serif text-[#0A192F] mb-8 text-center">
          Frequently Asked Questions on Shapoorji Pallonji Pune Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
            <h3 className="text-xl font-medium mb-3 text-[#0A192F]">Which is the best Shapoorji Pallonji project in Pune for investment?</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              <strong>Shapoorji Pallonji Joyville Vyomora (Mahalunge-Hinjewadi)</strong> is currently the #1 investment choice. As the newest flagship launch in West Pune, it offers pre-launch price benefits, massive 2, 3, 4 BHK & Sky Duplex typologies, a 32,000 sq. ft. clubhouse, and highest projected capital appreciation near the IT corridor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
            <h3 className="text-xl font-medium mb-3 text-[#0A192F]">What is Joyville Homes in Pune?</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Joyville Homes is the premier residential township development platform by Shapoorji Pallonji Real Estate, offering world-class amenities, superior build quality, and transparent handover timelines across key Pune growth corridors like Hinjewadi, Mahalunge, Hadapsar, and Bavdhan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
            <h3 className="text-xl font-medium mb-3 text-[#0A192F]">What is the price range of Shapoorji Pallonji projects in Pune?</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Shapoorji Pallonji Pune homes range from ₹45 Lakhs for 1 BHK & compact 2 BHK units at Hadapsar Annexe up to ₹2.50 Cr+ for ultra-luxury 4 BHKs, Sky Duplexes, and Golf Villas at Joyville Vyomora Hinjewadi and Vanaha Bavdhan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
