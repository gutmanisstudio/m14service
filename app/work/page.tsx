import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Gallery from "@/components/gallery";
import BeforeAfter from "@/components/before-after";
import FinalCta from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Work — M14service",
  description:
    "Photos from recent M14service jobs — homes, offices and end-of-tenancy cleans in Manchester.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        title="A look at the work."
        subtitle="Photos straight from the job. Same teams, same kit, same standard on every site."
        crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
      />
      <Gallery />
      <BeforeAfter />
      <FinalCta />
    </>
  );
}
