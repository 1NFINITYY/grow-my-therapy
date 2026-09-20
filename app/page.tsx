import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import WhoWeHelp from "./components/WhoWeHelp";
import QuoteBanner from "./components/QuoteBanner";
import Expertise from "./components/Expertise";
import HowWeWork from "./components/HowWeWork";
import AboutSection from "./components/AboutSection";
import SpecialtiesDetail from "./components/SpecialtiesDetail";
import Office from "./components/Office";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — large heading + full-width image */}
        <Hero />

        {/* 2. Mission / Philosophy — intro paragraphs + image */}
        <Mission />

        {/* 3. Who We Help — 3 cards */}
        <WhoWeHelp />

        {/* 4. Quote banner — full-width image + centered quote */}
        <QuoteBanner />

        {/* 5. Areas of Expertise — numbered list */}
        <Expertise />

        {/* 6. How We Work — modalities + image */}
        <HowWeWork />

        {/* 7. About Dr. Maya Reynolds — portrait + bio + credentials */}
        <AboutSection />

        {/* 8. Services Detail — image + service list */}
        <SpecialtiesDetail />

        {/* 9. Our Office — NEW section */}
        <Office />

        {/* 10. FAQ — accordion */}
        <FAQ />

        {/* 11. CTA — two images + booking buttons */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
