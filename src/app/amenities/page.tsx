import { Metadata } from "next";
import Amenities from "@/components/home/Amenities";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "World-Class Amenities | Shapoorji Pallonji Joyville Vyomora",
  description: "Experience 32,000 sq ft of clubhouse and 40+ resort-style amenities at Joyville Vyomora.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/amenities",
  }
};

export default function AmenitiesPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Amenities", href: "/amenities" }]} />
      </div>
      <Amenities />
    </div>
  );
}
