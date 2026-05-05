import Hero from "@/components/hero";
import Products from "@/components/products";
import BookSection from "@/components/book-section";
import BeforeAfter from "@/components/before-after";
import Workflow from "@/components/workflow";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <BookSection />
      <BeforeAfter />
      <Workflow />
      <Faq />
      <FinalCta />
    </>
  );
}
