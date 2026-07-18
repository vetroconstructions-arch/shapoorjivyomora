import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Lifestyle | Shapoorji Pallonji Joyville Vyomora",
  description: "Experience resort-style living with 40+ premium amenities at Shapoorji Pallonji Joyville Vyomora in Pune.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/lifestyle",
  }
};

export default function LifestyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
