import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Updates | Shapoorji Pallonji Joyville Vyomora",
  description: "Track the latest construction milestones and updates for Joyville Vyomora in Pune.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/updates",
  }
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
