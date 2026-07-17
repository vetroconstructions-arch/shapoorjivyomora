import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shapoorji-vyomora.com'),
  title: "Shapoorji Pallonji Vyomora Hinjewadi | Premium Joyville Homes Pune",
  description: "Invest in Shapoorji Pallonji Joyville Homes Vyomora Hinjewadi. Discover luxury 2BHK, 3BHK, 4BHK apartments near Rajiv Gandhi Infotech Park, West Pune. Download the floor plan and brochure today.",
  keywords: [
    "Shapoorji Pallonji Vyomora Hinjewadi", 
    "Joyville Homes Vyomora Hinjewadi", 
    "Shapoorji Pallonji Vyomora Pune",
    "Shapoorji Pallonji Projects in Hinjewadi",
    "Luxury Apartments Hinjewadi",
    "Premium Flats in Hinjewadi",
    "New Launch Projects Hinjewadi",
    "Apartments Near Hinjewadi IT Park",
    "Shapoorji Pallonji Vyomora Price",
    "Shapoorji Pallonji Vyomora Floor Plan",
    "Pune Real Estate",
    "Pune Property Market",
    "Property Investment in Pune",
    "Invest in Hinjewadi",
    "Best Residential Projects in Hinjewadi"
  ],
  openGraph: {
    title: "Shapoorji Pallonji Vyomora Hinjewadi | Luxury Real Estate Pune",
    description: "Explore Joyville Vyomora by Shapoorji Pallonji. Premium gated community apartments in the heart of West Pune's IT Corridor.",
    url: "https://www.shapoorji-vyomora.com",
    siteName: "Shapoorji Pallonji Joyville Homes Vyomora",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Joyville Vyomora Luxury Project in Hinjewadi",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shapoorji Pallonji Vyomora | Premium Residences Pune",
    description: "Luxury homes and premium apartments in the Hinjewadi IT Corridor.",
    images: ["https://www.shapoorji-vyomora.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_plOwnQGpvv_iPs3H6LA4ghAOe9XbJprhoQyky_lWko',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Preloader />
        <SmoothScroll>
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
