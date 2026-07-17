import { Metadata } from "next";
import Pricing from "@/components/home/Pricing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Luxury Residences | Shapoorji Pallonji Joyville Vyomora",
  description: "Explore 2BHK, 3BHK, 4BHK, and Duplex residences at Shapoorji Pallonji Joyville Vyomora.",
};

export default function ResidencesPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Residences", href: "/residences" }]} />
      </div>
      <Pricing />
    </div>
  );
}
