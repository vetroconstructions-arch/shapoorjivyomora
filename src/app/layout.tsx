import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import EnquiryModal from "@/components/EnquiryModal";
import ExitIntentModal from "@/components/ExitIntentModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StructuredData from "@/components/StructuredData";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shapoorji-vyomora.com'),
  alternates: {
    canonical: 'https://www.shapoorji-vyomora.com',
  },
  applicationName: "Shapoorji Pallonji Vyomora",
  authors: [{ name: "Shapoorji Pallonji Real Estate", url: "https://shapoorjirealestate.com" }],
  creator: "Shapoorji Pallonji",
  publisher: "Shapoorji Pallonji Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Vyomora",
  },
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
    "Best Residential Projects in Hinjewadi",
    "Shapoorji Pallonji Pune Projects",
    "Joyville Homes Pune",
    "Joyville Sensorium Hinjewadi",
    "Joyville Hadapsar Annexe",
    "Shapoorji Pallonji Wildstone",
    "Shapoorji Pallonji Celestian",
    "Best Builder in Pune",
    "High ROI Investment Pune",
    "Luxury Real Estate Pune",
    "Top Properties in West Pune"
  ],
  openGraph: {
    title: "Shapoorji Pallonji Vyomora | Joyville Homes Hinjewadi Vyomora",
    description: "Shapoorji Pallonji Vyomora is the ultimate luxury real estate project in Pune. Discover premium 2, 3 & 4 BHK apartments at Joyville Homes Hinjewadi Vyomora.",
    url: "https://www.shapoorji-vyomora.com",
    siteName: "Shapoorji Pallonji Vyomora",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden max-w-full`}>
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
          <EnquiryModal />
          <ExitIntentModal />
          <WhatsAppWidget />
        </SmoothScroll>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
