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
  title: "Vyomora Hinjewadi | Luxury Residences by Shapoorji Pallonji",
  description: "Experience luxury living at Shapoorji Pallonji Vyomora in Hinjewadi, Pune. Premium 2, 3 & 3 BHK Duplex residences.",
  openGraph: {
    title: "Vyomora Hinjewadi | Luxury Residences by Shapoorji Pallonji",
    description: "Experience luxury living at Shapoorji Pallonji Vyomora in Hinjewadi, Pune.",
    url: "https://vyomora-hinjewadi.com",
    siteName: "Vyomora by Shapoorji Pallonji",
    images: [
      {
        url: "https://vyomora-hinjewadi.com/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyomora Hinjewadi | Luxury Residences by Shapoorji Pallonji",
    description: "Experience luxury living at Shapoorji Pallonji Vyomora in Hinjewadi, Pune.",
    images: ["https://vyomora-hinjewadi.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vyomora-hinjewadi.com",
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
