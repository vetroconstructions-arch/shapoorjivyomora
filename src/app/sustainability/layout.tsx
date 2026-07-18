import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Shapoorji Pallonji Joyville Vyomora",
  description: "Learn about the eco-friendly, sustainable living initiatives at Joyville Vyomora Hinjewadi, Pune.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/sustainability",
  }
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
