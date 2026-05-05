import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Products from "@/components/products";
import FinalCta from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Services — M14service",
  description:
    "What M14service cleans — home, office, deep clean, move-in/out, post-renovation and custom requests across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we clean."
        subtitle="Six things we do most. If yours isn't on the list, ask — we cover custom and one-off jobs too."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Products />
      <FinalCta />
    </>
  );
}
