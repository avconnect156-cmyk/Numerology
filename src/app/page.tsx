import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutTransform from "@/components/sections/AboutTransform";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import ConsultationBanner from "@/components/sections/ConsultationBanner";
import Footer from "@/components/sections/Footer";
import SevenCards from "./SevenCard/sevencard";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <AboutTransform />

      <Services />

      <SevenCards />

      <ConsultationBanner />

      <FAQ />

      <Footer />
    </>
  );
}