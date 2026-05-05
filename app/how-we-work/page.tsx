import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Workflow from "@/components/workflow";
import FinalCta from "@/components/final-cta";

export const metadata: Metadata = {
  title: "How we work — M14service",
  description:
    "Watch how M14service approaches every clean — proper kit, proper process, no shortcuts.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Proper kit. Proper process."
        subtitle="From walk-in to handover. No shortcuts, no surprises."
        crumbs={[{ label: "Home", href: "/" }, { label: "How we work" }]}
      />
      <Workflow />
      <FinalCta />
    </>
  );
}
