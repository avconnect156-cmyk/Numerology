"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Link from "next/link";

const AboutTransform = () => {
  return (
    <Section className="pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 !bg-[linear-gradient(180deg,_#0F172A_0%,_#134E4A_60%,_#14532D_100%)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Image
              src="/image1.jpg"
              alt="Numerology"
              width={200}
              height={600}
              className="w-[500px] h-[500px] object-cover rounded-t-[200px] rounded-b-none shadow-2xl"
              priority
            />
          </div>
        </div>

       {/* Right Side Content */}
<div className="order-1 lg:order-2 space-y-7 text-center lg:text-left">

  {/* Badge */}
  <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-semibold tracking-[0.25em] uppercase text-cyan-200">
    Ancient Wisdom • Modern Insights
  </div>

  {/* Heading */}
  <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight text-white">
    Discover the
    <span className="block bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent">
      Hidden Power of Your Numbers
    </span>
  </h2>

  {/* Description */}
  <p className="text-lg md:text-xl leading-9 text-slate-200">
    Every number carries a unique vibration that shapes your personality,
    relationships, career, and life purpose. Numerology helps decode these
    patterns, revealing the opportunities and challenges written into your
    birth details.
  </p>
  {/* Features */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">

    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
      <span className="text-yellow-300 text-xl">✦</span>
      <span className="text-white font-medium">
        Personalized Birth Number Analysis
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
      <span className="text-yellow-300 text-xl">✦</span>
      <span className="text-white font-medium">
        Career & Financial Guidance
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
      <span className="text-yellow-300 text-xl">✦</span>
      <span className="text-white font-medium">
        Love & Relationship Insights
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
      <span className="text-yellow-300 text-xl">✦</span>
      <span className="text-white font-medium">
        Purpose & Future Direction
      </span>
    </div>

  </div>

  {/* Button */}
  <div className="pt-4 flex justify-center lg:justify-start lg:ml-50">
  <Link href="/about-us">
    <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#F4B400] !text-black font-bold uppercase hover:scale-105 transition-all duration-300 shadow-none">
      Explore Our Story
    </Button>
  </Link>
</div>

</div>
      </div>
    </Section>
  );
};

export default AboutTransform;