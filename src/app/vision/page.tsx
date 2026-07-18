import { Metadata } from "next";
import Story from "@/components/home/Story";
import Intro from "@/components/home/Intro";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Vision | Shapoorji Pallonji Joyville Vyomora",
  description: "Discover the architectural vision behind Shapoorji Pallonji Joyville Vyomora in Pune.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/vision",
  }
};

export default function VisionPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "The Vision", href: "/vision" }]} />
      </div>
      <Intro />
      <Story />
    </div>
  );
}
