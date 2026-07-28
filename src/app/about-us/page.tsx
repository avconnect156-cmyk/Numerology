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
import KaliyugSection from "@/components/about/KaliyugSection";
import VastuStoriesSection from "@/components/about/VastuStoriesSection";
import ModernVastuSection from "@/components/about/ModernVastuSection";
import NumerologyBasicsSection from "@/components/about/NumerologyBasicsSection";
import EnergyAlignmentSection from "@/components/about/EnergyAlignmentSection";

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
      <KaliyugSection />
      <VastuSection />
      <VastuStoriesSection />
      <ModernVastuSection />
      <NumerologyBasicsSection />
      <EnergyAlignmentSection />
      
      <Footer />
    </main>
  );
}