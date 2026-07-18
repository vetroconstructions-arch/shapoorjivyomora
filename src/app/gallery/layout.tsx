import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Shapoorji Pallonji Joyville Vyomora",
  description: "View the stunning architecture, premium amenities, and luxurious interiors of Joyville Vyomora Hinjewadi.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/gallery",
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
