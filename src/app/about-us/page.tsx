import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import PurposeSection from "@/components/about/PurposeSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import VedangasSection from "@/components/about/VedangasSection";
import EyeOfVedas from "@/components/about/EyeOfVedas";
import DivineOrigin from "@/components/about/DivineOrigin";
import PreservationSection from "@/components/about/PreservationSection";
import BeliefSection from "@/components/about/BeliefSection";
import KarmaSection from "@/components/about/KarmaSection";
import VastuSection from "@/components/about/VastuSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <PurposeSection />
      <PhilosophySection />
      <VedangasSection />
      <EyeOfVedas />
      <DivineOrigin />
      <PreservationSection />
      <BeliefSection />
      <KarmaSection />
      <VastuSection />

      <Footer />
    </main>
  );
}