import { Metadata } from "next";
import Location from "@/components/home/Location";
import Connectivity from "@/components/home/Connectivity";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Location & Connectivity | Shapoorji Pallonji Joyville Vyomora",
  description: "View the location and connectivity of Shapoorji Pallonji Joyville Vyomora in Mahalunge-Hinjewadi, Pune.",
};

export default function LocationPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Location", href: "/location" }]} />
      </div>
      <Location />
      <Connectivity />
    </div>
  );
}
