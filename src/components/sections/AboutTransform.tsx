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
        <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
          <div className="text-2xl font-bold tracking-[0.2em] text-white uppercase">
            Who We Are
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
            Numerology helps to <br />
            <span className="italic">transform you</span>
          </h2>

          <p className="text-lg text-white leading-8">
            Numerology is an ancient belief system that assigns spiritual
            meaning to numbers and their influence on life.
          </p>

          <p className="text-lg text-white leading-8">
            It reveals personality traits and life purpose using your birth
            date and name.
          </p>

          <div className="pt-4 flex justify-center lg:justify-start">
            <Link href="/about-us">
              <Button className="px-6 py-3 border bg-white !text-black uppercase shadow-none hover:cursor-pointer">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutTransform;