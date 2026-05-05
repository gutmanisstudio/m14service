import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import AboutIntro from "@/components/about-intro";
import ProcessSteps from "@/components/process-steps";
import Workflow from "@/components/workflow";
import FinalCta from "@/components/final-cta";

export const metadata: Metadata = {
  title: "About — M14service",
  description:
    "M14service — clean beyond the surface. Trusted cleaning for homes, apartments, offices and hotels in Manchester.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Clean beyond the surface."
        subtitle="Turning mess into magic — for homes, apartments, offices and hotels in Manchester."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutIntro />
      <ProcessSteps />
      <Workflow />
      <FinalCta />
    </>
  );
}
