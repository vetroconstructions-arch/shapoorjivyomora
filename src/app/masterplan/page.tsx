import { Metadata } from "next";
import MasterLayout from "@/components/home/MasterLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Masterplan | Shapoorji Pallonji Joyville Vyomora",
  description: "View the masterplan and layout of the premium township Joyville Vyomora in Pune.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/masterplan",
  }
};

export default function MasterplanPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Masterplan", href: "/masterplan" }]} />
      </div>
      <MasterLayout />
    </div>
  );
}
