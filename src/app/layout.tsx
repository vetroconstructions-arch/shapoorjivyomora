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
  title: "Vyomora Hinjewadi | Luxury 2BHK, 3BHK, 4BHK & Duplex by Shapoorji Pallonji",
  description: "Experience luxury living at Shapoorji Pallonji Joyville Homes Vyomora. Premium 2BHK, 3BHK, 4BHK, and Duplex residences in the Mahalunge-Hinjewadi corridor, Pune.",
  keywords: ["shapoorji pallonji joyville homes vyomora pune", "2bhk flats in hinjewadi", "3bhk apartments in mahalunge", "4bhk luxury flats baner", "duplex for sale in pune west", "shapoorji pallonji real estate", "premium township mahalunge hinjewadi"],
  openGraph: {
    title: "Shapoorji Pallonji Vyomora | Luxury Real Estate in Pune",
    description: "Discover ultra-premium 2BHK, 3BHK, 4BHK and Duplex apartments in Hinjewadi and Mahalunge. Book your dream home with Shapoorji Pallonji today.",
    url: "https://shapoorji-vyomora.com",
    siteName: "Shapoorji Pallonji Joyville Homes Vyomora",
    images: [
      {
        url: "https://shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Joyville Vyomora Luxury Project",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shapoorji Pallonji Vyomora | Premium Residences Pune",
    description: "Luxury 2, 3, 4 BHK & Duplex homes in Mahalunge-Hinjewadi corridor.",
    images: ["https://shapoorji-vyomora.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shapoorji-vyomora.com",
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
