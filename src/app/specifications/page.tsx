import { Metadata } from "next";
import Specifications from "@/components/home/Specifications";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Specifications | Shapoorji Pallonji Joyville Vyomora",
  description: "Detailed specifications for Shapoorji Pallonji Joyville Vyomora luxury residences in Pune.",
};

export default function SpecificationsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Specifications", href: "/specifications" }]} />
      </div>
      <Specifications />
    </div>
  );
}
