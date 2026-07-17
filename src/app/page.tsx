import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Story from "@/components/home/Story";
import Amenities from "@/components/home/Amenities";
import MasterLayout from "@/components/home/MasterLayout";
import Location from "@/components/home/Location";
import AboutDeveloper from "@/components/home/AboutDeveloper";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Story />
      <Amenities />
      <MasterLayout />
      <Location />
      <AboutDeveloper />
    </>
  );
}
