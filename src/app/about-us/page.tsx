"use client";

import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Star, Target, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Header />

      {/* Hero */}
      <Section className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-[#F4F1EA] text-center relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 border border-[#C5A065] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-lg font-bold tracking-[0.2em] text-white uppercase mb-4">
            Our Story
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
            We help you find your <br />
            <span className="italic text-red-500">
              true path
            </span>
          </h1>

          <p className="text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
            astrovastuconnect was founded with a simple mission: to make the
            ancient wisdom of numerology accessible to everyone.
            We believe numbers hold the key to understanding
            our potential and destiny.
          </p>
        </div>
      </Section>

      {/* Mission Vision Values */}
      <Section className="py-2 bg-[#0B0230]">
        <div className="text-center mb-2">
          <p className="uppercase tracking-[0.3em] text-blue-300 text-lg font-bold">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white">
            Our Mission, Vision & Values
          </h2>

          <p className="mt-6 text-blue-100 max-w-2xl mx-auto leading-8">
            We combine ancient numerology wisdom with modern insights to help you
            discover your purpose and make better life decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="absolute top-0 left-0 w-full h-1"></div>

            <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <Target className="w-9 h-9" />
            </div>

            <h3 className="mt-8 text-2xl font-serif font-semibold text-gray-900 text-center">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-8 text-center">
              To empower individuals through personalized numerology insights,
              helping them understand their strengths, overcome challenges, and
              confidently move toward their life's purpose.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="absolute top-0 left-0 w-full h-1 "></div>

            <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <Star className="w-9 h-9" />
            </div>

            <h3 className="mt-8 text-2xl font-serif font-semibold text-gray-900 text-center">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8 text-center">
              To make the timeless wisdom of numerology accessible to everyone,
              inspiring people worldwide to live with confidence, clarity, and
              purpose.
            </p>
          </div>

          {/* Values */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="absolute top-0 left-0 w-full h-1 "></div>

            <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <Heart className="w-9 h-9" />
            </div>

            <h3 className="mt-8 text-2xl font-serif font-semibold text-gray-900 text-center">
              Our Values
            </h3>

            <p className="mt-5 text-gray-600 leading-8 text-center">
              We are committed to honesty, accuracy, compassion, and privacy,
              ensuring every numerology report delivers meaningful guidance you can
              trust.
            </p>
          </div>

        </div>
      </Section>

      {/* Story Section */}
      <Section className="py-16 md:py-20 bg-[#1A1A2E] text-white overflow-hidden relative">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left Image */}
          <div className="relative">

            <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] bg-gray-800 rounded-t-full border-4 border-[#C5A065]/30 overflow-hidden relative">

              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-80" />
            </div>

            <div className="absolute -bottom-8 -right-4 md:-right-8 w-28 h-28 md:w-40 md:h-40 bg-secondary rounded-full flex items-center justify-center text-center p-4 shadow-xl">

              <p className="font-serif font-bold text-base md:text-lg leading-tight">
                10+ <br />
                <span className="text-[10px] md:text-xs font-sans font-normal uppercase tracking-wider">
                  Years of Magic
                </span>
              </p>

            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">

            <div className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
              Why Choose Us
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight">
              Guided by the stars, <br />
              <span className="italic">
                grounded in wisdom
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Unlike generic horoscope platforms, we use complex
              mathematical calculations based on the Pythagorean
              system to generate unique charts and personalized guidance.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Certified Numerologists",
                "Deeply Personalized Reports",
                "24/7 Spiritual Support",
                "Secure & Confidential",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 bg-[#E65100] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button className="px-10 py-4 bg-white !text-black uppercase border shadow-none hover:cursor-pointer">
                Get Your Reading
              </Button>
            </div>

          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}