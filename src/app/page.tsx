import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* 1. Impact visuel immédiat */}
      <HeroSection />
      <WhyUs />
      {/* 2. Preuve de valeur (Bento Grid) */}
      <Services />

      {/* 3. Pourquoi nous choisir ? */}
      <HowItWorks />

      {/* 4. Notre méthodologie */}
      <Process />

      {/* 5. Réassurance (Carousel) */}
      <Testimonials />
      <ContactCTA />
    </main>
  );
}