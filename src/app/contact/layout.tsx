import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shapoorji Pallonji Joyville Vyomora",
  description: "Get in touch with Shapoorji Pallonji Joyville Vyomora sales team. Book a site visit to our premium project in Hinjewadi, Pune.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
