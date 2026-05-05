import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Trust from "@/components/trust";
import ProblemSolution from "@/components/problem-solution";
import Products from "@/components/products";
import Reviews from "@/components/reviews";
import MultiCta from "@/components/multi-cta";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Trust />
      <ProblemSolution />
      <Products />
      <Reviews />
      <MultiCta />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
