import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Gallery from "@/components/gallery";
import BeforeAfter from "@/components/before-after";
import Workflow from "@/components/workflow";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Products />
      <Gallery />
      <BeforeAfter />
      <Workflow />
      <FinalCta />
      <Footer />
    </main>
  );
}
