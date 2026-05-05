import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";

export const metadata: Metadata = {
  title: "FAQ — M14service",
  description:
    "Common questions about M14service — coverage, pricing, equipment, scheduling and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions."
        subtitle="Quick answers to the things people ask most. Still stuck? Drop us a message."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <Faq />
      <FinalCta />
    </>
  );
}
