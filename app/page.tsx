import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
