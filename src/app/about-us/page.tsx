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

      {/* ================= HERO SECTION ================= */}
      <Section className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-[linear-gradient(180deg,#020617_0%,#0F172A_45%,#134E4A_80%,#14532D_100%)] text-center relative overflow-hidden">

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 border border-[#C5A065] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Section Label */}
          <div className="text-3xl font-bold text-[#FFD700] uppercase mb-6">
            Our Purpose
          </div>

          {/* Heading */}
          <h1 className="font-serif text-2xl font-bold text-white leading-tight">
            AstroVastu Connect (AVC) is driven by a clear and powerful vision to elevate the lives of
            individuals seeking growth, success, inner peace, and meaningful transformation. Our
            mission is to guide people toward a more fulfilling and balanced life by aligning their
            energies with universal principles.
          </h1>
          <p className="mt-6 text-2xl max-w-2xl mx-auto text-white">
            AVC is a holistic spiritual and energy-alignment platform dedicated to transforming lives
            through the wisdom of ancient Vedic sciences. By integrating Astrology, Vastu Shastra,
            Numerology, and other occult disciplines, we offer a comprehensive and synergistic
            system designed to empower individuals and unlock their true potential.
          </p>

          <h2 className="mt-6 text-2xl max-w-2xl mx-auto  text-yellow-400 font-bold">
            The Fundamental Philosophy: The Connection Between Astrology (Jyotish) & the
            Vedas
          </h2>
          <p className="mt-6 text-2xl max-w-2xl mx-auto text-white">
            Vedic Astrology, known as Jyotish, is an integral part of the Vedic tradition and is deeply
            rooted in ancient scriptures such as the Vedas, Upanishads, and Vedangas. Within the
            Vedic framework, six auxiliary disciplines known as the Vedangas & were established to
            support the understanding and application of Vedic knowledge. Among them, Jyotish is
            regarded as the <strong>&ldquo;eye of the Vedas&rdquo;</strong>
            </p>
        </div>
        <h2 className="mt-6 text-2xl max-w-2xl mx-auto  text-yellow-400 font-bold">
          The Six Vedangas (Limbs of the Vedas)
        </h2>
       <p className="mt-6 text-2xl max-w-2xl mx-auto text-white leading-relaxed">
  Apart from <strong>Jyotish</strong>, the other five <strong>Vedangas</strong> are
  metaphorically compared to parts of the human body:
  <br />
  <br />

  <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    1. Shiksha (Phonetics)
  </span>{" "}
  – Nose
  <br />

  <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    2. Vyakarana (Grammar)
  </span>{" "}
  – Mouth
  <br />

  <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    3. Nirukta (Etymology)
  </span>{" "}
  – Ears
  <br />

  <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    4. Chandas (Meter/Prosody)
  </span>{" "}
  – Feet
  <br />

  <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    5. Kalpa (Rituals & Procedures)
  </span>{" "}
  – Hands
  <br />
  <br />

  Together, these disciplines form a complete system for understanding and applying
  <strong> Vedic wisdom.</strong>
</p>
<h3 className="mt-6 text-2xl max-w-2xl mx-auto  text-yellow-400 font-bold">
  Why is Jyotish called the “Eye”?
</h3>

<div className="mt-6 max-w-2xl mx-auto text-white text-lg leading-relaxed space-y-6">
  <div>
    <h4 className="font-bold text-xl text-yellow-400">
      • Guiding Light
    </h4>
    <p className="mt-2">
      Just as a person cannot navigate the world without eyesight, the profound
      wisdom of the Vedas cannot be fully understood without <strong>Jyotish</strong>.
      It provides the vision needed to interpret cosmic patterns, planetary
      movements, and the deeper meaning of life events.
    </p>
  </div>

  <div>
    <h4 className="font-bold text-xl text-yellow-400">
      • Understanding Time (Kala)
    </h4>
    <p className="mt-2">
      Jyotish enables us to determine the right timing (<em>Muhurat</em>) for
      important actions—whether rituals, ceremonies, or major life decisions.
      It offers insight into the flow of time—past, present, and future—and
      aligns human actions with cosmic rhythms.
    </p>
  </div>

  <div>
    <h4 className="font-bold text-xl text-yellow-400">
      • Science of Light
    </h4>
    <p className="mt-2">
      The word <strong>Jyotish</strong> itself means <em>"Science of Light."</em>
      Just as physical eyes help us see the material world, Jyotish uses the
      light of celestial bodies to illuminate one's life path, karma, and
      destiny.
    </p>
  </div>
</div>
<h3 className="mt-10 text-3xl max-w-3xl mx-auto text-yellow-400 font-bold text-center">
  Divine Origin of the Vedas
</h3>

<div className="mt-6 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-8">

  <p>
    In <strong>Sanatan Dharma</strong>, the <strong>Vedas</strong> are considered
    <strong> Apaurusheya</strong>—not created by humans but divinely revealed and
    eternal. Their knowledge is believed to have originated directly from the
    <strong> Supreme Consciousness</strong>.
  </p>

  <p>
    Different traditions describe their origin in various ways:
  </p>

  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • From Lord Brahma
    </h4>

    <p className="mt-3">
      It is believed that at the beginning of creation,
      <strong> Lord Brahma</strong> received the knowledge of the
      <strong> Vedas</strong> and passed it on for the welfare of humanity.
      According to some traditions, the
      <strong> four Vedas</strong> emerged from his
      <strong> four mouths</strong>, symbolizing the divine transmission of sacred
      wisdom.
    </p>
  </div>

  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • From Lord Shiva
    </h4>

    <p className="mt-3">
      As described in the <strong>Shiva Purana</strong>, the primordial sound
      <strong> Om (ॐ)</strong> emerging from <strong>Lord Shiva's Damru</strong>
      gave rise to the Vedas. The sacred syllables
      <strong> "A," "U,"</strong> and <strong>"M"</strong> are believed to have
      formed the foundation of the four Vedas—
      <strong> Rigveda</strong>, <strong>Yajurveda</strong>,
      <strong> Samaveda</strong>, and <strong>Atharvaveda</strong>.
    </p>
  </div>

</div>
<h3 className="mt-12 text-3xl max-w-3xl mx-auto text-white font-bold text-center">
  Preservation and Transmission of Vedic Knowledge
</h3>

<div className="mt-8 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-8">

  {/* Oral Tradition */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Oral Tradition (Shruti Parampara)
    </h4>

    <p className="mt-3">
      In ancient times, the <strong>Vedas</strong> were not written down. They were
      regarded as sacred sound vibrations and were transmitted orally from one
      generation to the next. Great sages (<strong>Rishis</strong>) received this
      divine knowledge through deep meditation and passed it on to their disciples
      through memorization. This sacred <strong>Guru–Shishya (teacher–student)</strong>
      tradition ensured the accurate preservation of Vedic wisdom across centuries.
    </p>
  </div>

  {/* Ved Vyasa */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Compilation by Sage Ved Vyasa
    </h4>

    <p className="mt-3">
      As human memory and lifespan gradually declined towards the end of the
      <strong> Dwapara Yuga</strong>, <strong>Maharishi Krishna Dvaipayana Ved Vyasa</strong>
      systematically compiled and divided the Vedas into four parts—
      <strong> Rigveda</strong>, <strong>Yajurveda</strong>,
      <strong> Samaveda</strong>, and <strong>Atharvaveda</strong>.
      This monumental effort helped preserve the sacred knowledge for future generations.
    </p>
  </div>

  {/* Evolution */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Loss, Reconstruction & Evolution of Knowledge
    </h4>

    <p className="mt-3">
      Over time, particularly during the <strong>Kaliyuga</strong>, invasions and
      historical disruptions led to the destruction of many original Vedic texts,
      scriptures, and Puranas. Dedicated spiritual lineages later reconstructed and
      preserved much of this knowledge through the
      <strong> Guru–Shishya tradition</strong>.
    </p>

    <p className="mt-4">
      What we study and practice today is widely regarded as a refined and
      rediscovered form of this ancient wisdom. Through continuous research,
      interpretation, and preservation, humanity has reached a stage where accurate
      birth details—<strong>date, time, and place</strong>—allow a
      <strong> Jyotish</strong> to provide meaningful insights into an individual's
      past, present, and potential future.
    </p>
  </div>

  {/* Great Sages */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Contribution of Great Sages
    </h4>

    <p className="mt-3">
      The development and transmission of <strong>Jyotish</strong> have been greatly
      influenced by revered sages whose teachings continue to form the foundation of
      modern <strong>Vedic Astrology</strong>.
    </p>

    <div className="mt-5 space-y-2 pl-6">
      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Maharishi Parashara
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Maharishi Bhrigu
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Maharishi Garg
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Maharishi Jaimini
        </span>
      </p>
    </div>

    <p className="mt-5">
      Their teachings and scriptures form the foundation upon which
      <strong> modern Vedic Astrology</strong> is practiced today.
    </p>
  </div>

</div>
<h3 className="mt-12 text-3xl max-w-3xl mx-auto text-white font-bold text-center">
  Our Belief
</h3>

<div className="mt-8 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-8">

  {/* Introduction */}
  <p>
    This sacred science is not merely <strong>predictive</strong>—it is deeply
    <strong> transformational</strong>.
  </p>

  <p>
    We believe that life is governed by <strong>energy</strong> and
    <strong> karma</strong>. By aligning both with universal principles, an
    individual can achieve true <strong>balance</strong>,
    <strong> fulfillment</strong>, and ultimately,
    <strong> liberation (Moksha)</strong>.
  </p>

  {/* Understanding Life & Karma */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Understanding Life & Karma
    </h4>

    <p className="mt-3">
      Human life is a journey that begins with the <strong>first breath</strong>
      and ends with the <strong>last</strong>. Everything that happens in between
      is not random; it is deeply influenced by <strong>karma</strong> and follows
      a pre-defined <strong>cosmic order</strong>.
    </p>
  </div>

  {/* What Defines Our Life */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • What Defines Our Life?
    </h4>

    <p className="mt-3">
      Many important aspects of our lives are determined before we are even aware
      of them:
    </p>

    <div className="mt-5 space-y-2 pl-6">
      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Where we are born
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Who our parents are
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Our relationships, career, and life experiences
        </span>
      </p>
    </div>

    <p className="mt-5">
      Every individual enters this life carrying <strong>karmic impressions</strong>
      from previous births—both positive and negative—which influence the path of
      their present life.
    </p>
  </div>

  {/* Core Philosophy */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Core Philosophy of Life
    </h4>

    <div className="mt-5 space-y-3 pl-6">
      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Life is a continuous process of balancing karmas
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • We experience the results of our past actions (past-life karma)
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • We simultaneously create new karma through our present actions
        </span>
      </p>
    </div>
  </div>

  {/* Spiritual Truth */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • A Deep Spiritual Truth
    </h4>

    <p className="mt-3">
      Often, people question life's fairness:
    </p>

    <blockquote className="mt-4  pl-5 italic text-gray-300">
      "Why do good people suffer while others seem to prosper?"
    </blockquote>

    <p className="mt-5">
      According to <strong>Vedic philosophy</strong>, every experience in life is
      the result of accumulated <strong>karma</strong>. While we may not fully
      understand the reasons behind every event, the law of karma ensures that
      every action has its corresponding consequence.
    </p>

    <p className="mt-4">
      Through self-awareness, righteous actions (<strong>Dharma</strong>), and
      spiritual guidance, we can reduce negative karmic influences, strengthen
      positive energies, and move steadily toward
      <strong> inner peace</strong>, <strong>fulfillment</strong>, and ultimately
      <strong> Moksha</strong>.
    </p>
  </div>

</div>
<div className="mt-10 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-8">

  {/* Question */}
  <blockquote className="italic text-gray-300">
    “Why do people doing wrong seem happy, while those walking the spiritual path
    still suffer?”
  </blockquote>

  {/* Reality */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • The Reality
    </h4>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • A person doing wrong may be enjoying past-life good karma
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Their present actions are generating negative karma for the future
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • When past good karma is exhausted, accumulated negative karma begins to manifest
        </span>
      </p>

    </div>

    <div className="mt-6 p-5 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
      <p className="text-2xl font-bold text-center bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
        Result: Downfall becomes inevitable
      </p>
    </div>
  </div>

  {/* Path of Dharma */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • The Path of Dharma (Righteous Living)
    </h4>

    <p className="mt-3">
      A person walking the path of righteousness may:
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Perform prayers (Pooja)
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Practice charity (Daan)
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Maintain good conduct
        </span>
      </p>

    </div>

    <p className="mt-6">
      Even if such a person faces challenges, they are:
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Gradually clearing past negative karma
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Simultaneously building strong positive karma
        </span>
      </p>

    </div>
  </div>

  {/* Turning Point */}
  <div>
    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • The Turning Point
    </h4>

    <p className="mt-3">
      When the karmic balance shifts:
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Negative Karma → Neutralized
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Positive Karma → Reaches its Peak
        </span>
      </p>

    </div>

    <div className="mt-8 p-6 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10">

      <h5 className="text-center text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
        Result
      </h5>

      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-center">

        <div>
          <p className="text-3xl">🌟</p>
          <p className="font-bold text-yellow-300">Yash</p>
          <p className="text-gray-300">Fame</p>
        </div>

        <div>
          <p className="text-3xl">🙏</p>
          <p className="font-bold text-yellow-300">Kirti</p>
          <p className="text-gray-300">Respect</p>
        </div>

        <div>
          <p className="text-3xl">💰</p>
          <p className="font-bold text-yellow-300">Dhan</p>
          <p className="text-gray-300">Wealth</p>
        </div>

      </div>

    </div>
  </div>

</div>
{/* Shanti (Inner Peace) */}
<div className="mt-10">
  <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    • Shanti (Inner Peace)
  </h4>

  <p className="mt-4 text-yellow-400">
    This phase can be called the{" "}
    <strong>“Limitless Growth Phase.”</strong> It is a state where one's positive
    karma has become dominant, allowing life to unfold with greater harmony,
    opportunities, and success. Many of the successful people we see today are
    believed to be in this very phase.
  </p>

  <blockquote className="mt-5  italic text-gray-300">
    “Jisme Hath Daalte Hai, Sona Ban Jaata Hai.”
  </blockquote>

  <p className="mt-2 text-gray-400 italic">
    (Whatever they touch seems to turn into gold.)
  </p>
</div>

{/* Explanation */}
<div className="mt-10">
  <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
    • Explanation
  </h4>

  <div className="mt-5 space-y-4">

    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-5">
      <p className="font-bold text-blue-300 text-xl">
        Dharma Path (Blue)
      </p>
      <p className="mt-2 text-white">
        Slow start → Massive success later
      </p>
      <p className="text-blue-200 italic">
        (Sky is the limit)
      </p>
    </div>

    <div className="rounded-xl border border-pink-500/30 bg-pink-500/10 p-5">
      <p className="font-bold text-pink-300 text-xl">
        Adharma Path (Pink)
      </p>
      <p className="mt-2 text-white">
        Fast rise → Sudden fall
      </p>
      <p className="text-pink-200 italic">
        (Durgati)
      </p>
    </div>

  </div>
</div>

{/* Final Conclusion */}
<div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">
  <p className="text-center text-2xl text-white leading-relaxed">
    <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      "Karma"
    </span>{" "}
    plays a major role in our lives by determining the
    <strong> direction (Disha)</strong> and
    <strong> condition (Dasha)</strong> of both our
    <strong> present</strong> and
    <strong> future</strong>.
  </p>
</div>
{/* =======================================================
    Another Important Observation
======================================================= */}

<h3 className="mt-12 text-3xl max-w-3xl mx-auto text-white font-bold text-center">
  Another Important Observation
</h3>

<div className="mt-8 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-8">

  {/* Intro */}
  <p>
    We often hear people say:
  </p>

  <blockquote className="italic text-gray-300">
    "Two people are born at the same time, with the same planetary positions,
    yet their lives are completely different."
  </blockquote>

  {/* Reality */}
  <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      The Reality
    </h4>

    <p className="mt-5">
      The answer lies not merely in the planetary positions but also in the
      <strong> karmic journey</strong> of every individual.
    </p>

    <p className="mt-4">
      Consider a simple example:
    </p>

    <blockquote className="mt-4 italic text-gray-300">
      A businessman's child is naturally exposed to business from an early age.
      A salaried employee's child often grows up valuing a secure job.
      Likewise, an auto driver's child is more likely to see driving as a natural
      profession.
    </blockquote>

    <p className="mt-5">
      Even if all three children are born on the
      <strong> same date</strong>,
      <strong> at the same time</strong>, and under
      <strong> similar planetary positions</strong>,
      their lives begin from completely different environments.
    </p>

    <p className="mt-5">
      As life progresses, their future is shaped not only by their surroundings
      but also by their own
      <strong> karma (actions)</strong> and
      <strong> destiny (Bhagya)</strong>.
    </p>

  </div>

  {/* Why */}
  <div>

    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Why Does This Happen?
    </h4>

    <p className="mt-4">
      Every individual enters this world carrying a unique karmic balance.
      Although two birth charts may appear similar, the
      <strong> karmic account</strong> behind each soul is never identical.
    </p>

  </div>

  {/* Reason */}
  <div>

    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • The Reason
    </h4>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • A birth chart (Kundli) shows possibilities, strengths, and tendencies.
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Actual life outcomes depend upon the balance of past karmas.
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Every soul carries both positive and negative karmic impressions.
        </span>
      </p>

    </div>

    <p className="mt-6">
      These karmic impressions determine:
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • The starting point of life
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • The opportunities available
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • The challenges and obstacles one experiences
        </span>
      </p>

    </div>

  </div>

  {/* Conclusion */}
  <div>

    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Conclusion
    </h4>

    <p className="mt-5">
      Our life is governed by the balance between
      <strong> past karmas</strong> and
      <strong> present actions</strong>.
    </p>

    <p className="mt-4">
      An astrologer can guide you, show you the right direction, and help you
      understand the timing of important life events. However,
      <strong> no one can completely change destiny.</strong>
    </p>

    <p className="mt-4">
      What can be changed is the
      <strong> quality of life</strong> and the
      <strong> intensity of experiences</strong> through
      right guidance, conscious actions, and righteous living.
    </p>

    <div className="mt-8 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">

      <p className="text-center text-2xl leading-relaxed">

        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          Karma
        </span>{" "}
        plays the most important role.

      </p>

      <p className="mt-5 text-center">
        Our birth, circumstances, surroundings, and opportunities are influenced
        by planetary positions and environmental energies. During difficult
        planetary periods (<strong>Bad Dasha</strong>), people often seek instant
        solutions, expecting a mantra or remedy to remove every problem.
      </p>

      <p className="mt-5 text-center font-semibold text-yellow-300">
        But the deeper truth is...
      </p>

      <p className="mt-3 text-center text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
        Lasting and powerful transformation comes only through Dharma
        (The Path of Righteousness).
      </p>

    </div>

  </div>

</div>
{/* =======================================================
    The Higher Path
======================================================= */}

<div className="mt-12 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-8">

  {/* Higher Path */}
  <div>

    <h3 className="text-3xl font-bold text-center text-white">
      The Higher Path
    </h3>

    <p className="mt-6">
      If we truly seek <strong>faster</strong> and more
      <strong> meaningful transformation</strong>, we must go beyond planetary
      remedies and take refuge in higher divine energies.
    </p>

    <p className="mt-5">
      True change begins when our lives become aligned with
      <strong> Dharma</strong>, strengthened by
      <strong> Bhakti (devotion)</strong>, and guided by
      <strong> divine grace</strong>.
    </p>

  </div>

  {/* Divine Energies */}

  <div>

    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Seek Refuge in Higher Divine Energies
    </h4>

    <p className="mt-4">
      Our scriptures encourage us to surrender to the Supreme through sincere
      devotion. Some of the most revered forms of divine energy include:
    </p>

    <div className="mt-6 grid md:grid-cols-2 gap-4">

      {[
        "Bhagwan Bholenath (Shiva)",
        "Bhagwan Narayan (Vishnu)",
        "Maa Shakti",
        "Bajrangbali (Hanuman)",
        "Maa Kali",
        "Bhairav",
      ].map((deity) => (
        <div
          key={deity}
          className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4"
        >
          <p className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
            ✦ {deity}
          </p>
        </div>
      ))}

    </div>

  </div>

  {/* Faith */}

  <div>

    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Power of Shraddha & Bhakti
    </h4>

    <p className="mt-4">
      When a person surrenders with genuine
      <strong> Shraddha (faith)</strong> and
      <strong> Bhakti (devotion)</strong>, life gradually begins to align
      naturally.
    </p>

    <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">

      <blockquote className="italic text-center text-gray-200 text-2xl leading-relaxed">
        "Jab insaan sachchi bhakti se Ishwar ki sharan mein aata hai,
        tab dheere dheere sab kuch sahi hone lagta hai."
      </blockquote>

    </div>

    <p className="mt-6">
      As devotion deepens:
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Problems begin to settle naturally
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Inner strength increases
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Fear and anxiety gradually reduce
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Peace replaces confusion
        </span>
      </p>

    </div>

  </div>

  {/* Reality of Kaliyug */}

  <div>

    <h3 className="text-3xl font-bold text-center text-white">
      Reality of Kaliyug
    </h3>

    <p className="mt-6">
      In the present age of <strong>Kaliyug</strong>, maintaining purity of
      thoughts and actions has become increasingly difficult.
    </p>

    <p className="mt-5">
      Because of this, receiving direct divine blessings is also more
      challenging than in previous ages.
    </p>

  </div>

  {/* Therefore */}

  <div>

    <h4 className="font-bold text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Therefore...
    </h4>

    <div className="mt-6 space-y-4">

      <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
        <p className="font-bold text-yellow-300">
          Walk consistently on the path of Dharma.
        </p>
      </div>

      <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
        <p className="font-bold text-yellow-300">
          Practice devotion every day, just as we eat food every day.
        </p>
      </div>

      <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
        <p className="font-bold text-yellow-300">
          Develop "Patrata" (worthiness) to receive Divine Grace.
        </p>
      </div>

    </div>

  </div>

  {/* Patrata */}

  <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">

    <blockquote className="text-center italic text-2xl text-gray-200 leading-relaxed">
      "Jab Bhakti ki Patrata ban jaati hai,
      tab darr aur tension khatam ho jaata hai."
    </blockquote>

    <p className="mt-6 text-center">
      When a person becomes worthy through sincere devotion,
      <strong> fear</strong> gradually disappears,
      <strong> stress reduces</strong>,
      and life begins to flow with greater peace and confidence.
    </p>

  </div>

</div>
{/* =======================================================
    Key Principles to Follow
======================================================= */}

<div className="mt-12 max-w-3xl mx-auto text-white text-xl leading-relaxed space-y-10">

  <h3 className="text-3xl font-bold text-center text-white">
    Key Principles to Follow
  </h3>

  {/* Principle 1 */}
  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      1. Do Good Karmas
    </h4>

    <p className="mt-4">
      Every action leaves an impression on our future. Therefore, always strive
      to perform righteous actions with sincerity and compassion.
    </p>

    <p className="mt-5 font-semibold">
      Always focus on:
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Helping others
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Acting ethically
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Living with honesty and compassion
        </span>
      </p>

    </div>

  </div>

  {/* Avoid */}
  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      Avoid Karma Destruction
    </h4>

    <p className="mt-4">
      We strongly caution against actions that create negative karmic impressions:
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-6">

      {[
        "Greed (Lobh)",
        "Lust (Kaam)",
        "Jealousy (Irsha)",
        "Hurting Others",
        "Dishonesty",
        "Theft & Violence",
      ].map((item) => (
        <div
          key={item}
          className="rounded-xl border border-red-500/20 bg-red-500/10 p-4"
        >
          <p className="font-semibold text-red-300">
            ✖ {item}
          </p>
        </div>
      ))}

    </div>

    <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-5">
      <p className="text-center text-red-200 italic">
        These actions may provide temporary gains,
        but they ultimately lead to long-term suffering and destruction.
      </p>
    </div>

  </div>

  {/* Principle 2 */}
  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      2. Connect with Your Isht Dev / Devi
    </h4>

    <p className="mt-4">
      Every individual naturally feels connected to a particular divine form.
      Strengthen that relationship through daily devotion.
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Choose one deity you feel deeply connected to
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Chant their name daily
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Perform Teerth Yatra whenever possible
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Take holy baths in sacred rivers
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Build a personal spiritual connection
        </span>
      </p>

    </div>

  </div>

  {/* Principle 3 */}
  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      3. Give Back to Society
    </h4>

    <p className="mt-4">
      One of the highest expressions of Dharma is serving others selflessly.
    </p>

    <div className="mt-5 space-y-3 pl-6">

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Donate (Daan)
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Build or restore Temples
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Support Hospitals & Schools
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Perform Seva (Selfless Service)
        </span>
      </p>

      <p>
        <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
          • Contribute with humility
        </span>
      </p>

    </div>

  </div>

  {/* Final Message */}

  <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">

    <h3 className="text-center text-3xl font-bold text-white">
      Final Message
    </h3>

    <div className="mt-8 space-y-4 text-center">

      <p className="text-2xl font-semibold text-yellow-300">
        Astrology can guide you.
      </p>

      <p className="text-2xl font-semibold text-yellow-300">
        Dharma can protect you.
      </p>

      <p className="text-2xl font-semibold text-yellow-300">
        Karma will shape you.
      </p>

      <p className="text-2xl font-semibold text-yellow-300">
        Bhakti will liberate you.
      </p>

    </div>

    <p className="mt-8 text-center">
      When you align your
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-4">

      <div className="px-6 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
        <span className="font-bold text-yellow-300">
          Karma (Actions)
        </span>
      </div>

      <div className="px-6 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
        <span className="font-bold text-yellow-300">
          Dharma (Path)
        </span>
      </div>

      <div className="px-6 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
        <span className="font-bold text-yellow-300">
          Bhakti (Devotion)
        </span>
      </div>

    </div>

    <p className="mt-8 text-center">
      Life naturally transforms.
    </p>

    <div className="mt-6 space-y-3 text-center">

      <p>✨ Peace replaces fear.</p>
      <p>✨ Clarity replaces confusion.</p>
      <p>✨ Growth replaces struggle.</p>
      <p>✨ You gradually move toward the true purpose of life.</p>

    </div>

    <div className="mt-8 rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-6">

      <p className="text-center text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
        The ultimate destination of the soul is Moksha —
        Liberation through righteous living, selfless actions,
        and unwavering devotion to the Divine.
      </p>

    </div>

  </div>

</div>
{/* ============================================================
                    WHAT IS VASTU SHASTRA?
============================================================ */}

<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  What is Vastu Shastra?
</h3>

<div className="mt-8 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">

  {/* Introduction */}

  <p>
    <strong>Vastu Shastra</strong> is an ancient Indian science of architecture
    and design that explains how homes, temples, offices, and cities should be
    planned in harmony with
    <strong> nature, directions, energy flow,</strong> and
    <strong> cosmic forces.</strong>
  </p>

  <p>
    The word
    <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      {" "}Vastu
    </span>{" "}
    means
    <strong> "Dwelling"</strong>,
    while
    <span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      {" "}Shastra
    </span>{" "}
    means
    <strong> "Science or Sacred Knowledge."</strong>
  </p>

  <p>
    Its primary objective is to create spaces that promote
    <strong> health</strong>,
    <strong> prosperity</strong>,
    <strong> peace</strong>,
    and
    <strong> positive energy.</strong>
  </p>

  {/* Panch Tatva */}

  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • Foundation of Vastu – Panch Tatva (Five Elements)
    </h4>

    <p className="mt-4">
      Vastu Shastra is based on maintaining harmony between the
      <strong> five fundamental elements of nature.</strong>
    </p>

    <div className="grid md:grid-cols-2 gap-5 mt-8">

      {[
        ["🌍", "Earth (Prithvi)", "Stability & Strength"],
        ["💧", "Water (Jal)", "Flow & Emotions"],
        ["🔥", "Fire (Agni)", "Energy & Transformation"],
        ["🌬️", "Air (Vayu)", "Movement & Relationships"],
        ["🌌", "Space (Aakash)", "Expansion & Consciousness"],
      ].map(([icon, title, desc]) => (

        <div
          key={title}
          className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5"
        >

          <div className="text-4xl">{icon}</div>

          <h5 className="mt-3 font-bold text-yellow-300">
            {title}
          </h5>

          <p className="mt-2 text-gray-300">
            {desc}
          </p>

        </div>

      ))}

    </div>

    <p className="mt-8">
      When these five elements remain balanced within a space,
      the environment naturally supports
      <strong> peace</strong>,
      <strong> success</strong>,
      and
      <strong> wellbeing.</strong>
    </p>

  </div>

</div>

{/* ============================================================
              MYTHOLOGICAL ORIGINS OF VASTU
============================================================ */}

<h3 className="mt-20 text-3xl text-center text-white font-bold">
  Mythological Origins of Vastu
</h3>

<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">

  {/* Vishwakarma */}

  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      1. Dev Shilpi Vishwakarma
    </h4>

    <p className="mt-5">
      In Hindu tradition,
      <strong> Bhagwan Vishwakarma</strong> is regarded as the
      <strong> Divine Architect of the Devas.</strong>
      He symbolizes perfection in architecture,
      engineering,
      creativity,
      and cosmic design.
    </p>

    <p className="mt-5">
      According to the scriptures, he designed several magnificent creations,
      including:
    </p>

    <div className="mt-6 space-y-3">

      <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
        <p className="font-bold text-yellow-300">
          ✦ Swarg Lok (Heaven)
        </p>
      </div>

      <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
        <p className="font-bold text-yellow-300">
          ✦ Dwarka – The Kingdom of Lord Krishna
        </p>
      </div>

      <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
        <p className="font-bold text-yellow-300">
          ✦ Indraprastha – Capital of the Pandavas
        </p>
      </div>

    </div>

    <div className="mt-8 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">

      <p className="text-center">
        Lord Vishwakarma represents the principle that
        <strong> balance, harmony, and righteous architecture</strong>
        naturally lead to
        <strong> prosperity and success.</strong>
      </p>

    </div>

  </div>

  {/* Mayasura */}

  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      2. Danav Shilpi Mayasura
    </h4>

    <p className="mt-5">
      Among the
      <strong> Danavas (Asuras)</strong>,
      the greatest architect was
      <strong> Mayasura (May).</strong>
      He possessed extraordinary knowledge of
      engineering,
      illusion,
      and advanced architecture.
    </p>

    <p className="mt-5">
      His most famous creation was the magnificent
      <strong> Mayasabha</strong>,
      built for the
      <strong> Pandavas</strong>
      at
      <strong> Indraprastha.</strong>
    </p>

  </div>

  {/* Palace */}

  <div>

    <h4 className="text-2xl bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent font-bold">
      • Mayasabha – Palace of Illusions
    </h4>

    <p className="mt-5">
      This palace was renowned for its extraordinary architectural illusions.
    </p>

    <div className="mt-6 space-y-4">

      <div className="rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-4">
        <p>
          ✦ Floors appeared to be water, but were actually solid.
        </p>
      </div>

      <div className="rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-4">
        <p>
          ✦ Water bodies appeared like polished marble floors.
        </p>
      </div>

      <div className="rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-4">
        <p>
          ✦ Optical illusions amazed every visitor.
        </p>
      </div>

    </div>

  </div>

  {/* Mahabharata */}

  <div>

    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      • The Mahabharata Incident
    </h4>

    <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">

      <p>
        Duryodhana mistook a pool of water for solid ground because of the
        architectural illusion and fell into it.
      </p>

      <p className="mt-4">
        Draupadi laughed (or smiled, according to different traditions),
        deeply hurting Duryodhana's pride.
      </p>

      <p className="mt-4">
        This humiliation became one of the important events that eventually
        contributed to the
        <strong> Mahabharata War.</strong>
      </p>

    </div>

    <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">

      <h5 className="font-bold text-blue-300 text-xl">
        Lesson from Vastu
      </h5>

      <p className="mt-4">
        Even the greatest architecture must be combined with
        <strong> clarity</strong>,
        <strong> practicality</strong>,
        and
        <strong> human understanding.</strong>

        Otherwise,
        misunderstanding,
        ego,
        and imbalance can arise.
      </p>

    </div>

  </div>

</div>
{/* ============================================================
            OTHER MYTHOLOGICAL EXAMPLES OF VASTU
============================================================ */}

<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Other Mythological Examples of Vastu
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-12">


{/* Golden Lanka */}

<div>

<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
  1. Sone Ki Lanka (Golden Lanka)
</h4>


<p className="mt-5">
  According to Hindu traditions, the magnificent city of
  <strong> Lanka</strong> was originally designed and built by
  <strong> Bhagwan Vishwakarma</strong> for Lord Shiva.
</p>


<p className="mt-4">
  Later, it came under the control of
  <strong> Ravana</strong>, who transformed it into a city of immense wealth,
  power, and grandeur.
</p>


<div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">

<p>
  Lanka was considered an architectural wonder, filled with
  <strong> gold, luxury, and extraordinary craftsmanship.</strong>
</p>

</div>


<div className="mt-6">

<h5 className="text-xl font-bold text-yellow-300">
  Lesson:
</h5>

<p className="mt-3">
  Even perfect architecture and unlimited wealth cannot protect a person
  from destruction when
  <strong> ego, arrogance, and misuse of power</strong> dominate life.
</p>

<p className="mt-3">
  Vastu provides support, but
  <strong> Dharma determines the direction of that power.</strong>
</p>

</div>

</div>



{/* Dwarka */}

<div>

<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
  2. Dwarka (Lord Krishna's City)
</h4>


<p className="mt-5">
  <strong>Dwarka</strong>, the divine city of
  <strong> Lord Krishna</strong>, is described as one of the greatest examples
  of advanced planning and harmonious architecture.
</p>


<p className="mt-4">
  It was designed by
  <strong> Vishwakarma</strong> and built in alignment with
  natural forces, directions, and environmental balance.
</p>


<div className="mt-6 space-y-4">


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Designed with perfect alignment with nature
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Balanced relationship between land, water, and energy
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Created as a prosperous and protected kingdom
</p>

</div>


</div>



<div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">

<h5 className="font-bold text-blue-300 text-xl">
  Lesson:
</h5>


<p className="mt-3">
  Proper Vastu combined with
  <strong> Dharma (righteousness)</strong>
  creates harmony, prosperity, and long-term success.
</p>

</div>


</div>




{/* Indraprastha */}

<div>


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
  3. Indraprastha (Pandavas' Capital)
</h4>


<p className="mt-5">
  <strong>Indraprastha</strong>, the magnificent capital of the Pandavas,
  was known for its extraordinary planning, beauty, and balance.
</p>


<p className="mt-4">
  With the guidance of divine knowledge and advanced architecture,
  the city became a symbol of
  <strong> prosperity, power, and organized living.</strong>
</p>


<div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-6">

<p>
  The prosperity of Indraprastha reflects how proper alignment of
  <strong> space, energy, governance, and intention</strong>
  creates success.
</p>

</div>


</div>





{/* Key Learnings */}

<div>


<h3 className="text-3xl font-bold text-white text-center">
  Key Learnings from Mythology
</h3>



<p className="mt-6">
  These ancient stories teach us that Vastu is not only about physical
  construction but also about creating harmony between
  <strong> nature, energy, and human consciousness.</strong>
</p>



<div className="mt-8 grid md:grid-cols-2 gap-5">


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Balance of Nature is Essential
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Design Should Be Practical, Not Deceptive
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Ego and Misuse of Space Lead to Downfall
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Positive Energy and Intention Matter More Than Luxury
</p>

</div>


</div>



<div className="mt-10 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">

Vastu is not only about creating beautiful spaces,
but about creating spaces that support
<strong> harmony, growth, and positive energy.</strong>

</p>


</div>


</div>



</div>
{/* ============================================================
                VASTU IN THE CURRENT ERA
============================================================ */}

<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Vastu in the Current Era
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">


<p>
  Today, <strong>Vastu Shastra</strong> continues to be practiced in a more
  practical and modern way. It is not limited only to traditional buildings,
  but is applied in homes, offices, businesses, and personal spaces to create
  better energy balance.
</p>



{/* Homes */}

<div>

<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
  In Homes
</h4>


<div className="mt-6 space-y-4">


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Entrance direction planning
</span>
</p>


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Kitchen placement according to Fire Element (Agni)
</span>
</p>


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Bedroom arrangement for peace and stability
</span>
</p>


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Maintaining cleanliness and avoiding energy blockages
</span>
</p>


</div>

</div>





{/* Offices */}

<div>

<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
  In Offices & Business
</h4>


<div className="mt-6 space-y-4">


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Proper desk placement for productivity
</span>
</p>


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Entrance alignment for customer attraction
</span>
</p>


<p>
<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
• Cash counter placement for financial stability
</span>
</p>


</div>

</div>





<div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">


<p className="text-center">

In today's world, Vastu is often combined with:

</p>


<div className="mt-5 grid md:grid-cols-3 gap-4 text-center">


<div className="rounded-xl bg-[#D4AF37]/10 p-4">
<p className="font-bold text-yellow-300">
Architecture
</p>
</div>


<div className="rounded-xl bg-[#D4AF37]/10 p-4">
<p className="font-bold text-yellow-300">
Psychology
</p>
</div>


<div className="rounded-xl bg-[#D4AF37]/10 p-4">
<p className="font-bold text-yellow-300">
Environmental Science
</p>
</div>


</div>


</div>



</div>






{/* ============================================================
                    CORE PRINCIPLES
============================================================ */}


<h3 className="mt-20 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Core Principles of Vastu Alignment
</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">


<p>
Vastu works on balancing different layers of energy within a space:
</p>



{/* Directions */}

<div>


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

1. 16 Directions (Shodash Disha)

</h4>


<p className="mt-4">

Vastu recognizes sixteen directions, where each direction carries a specific
energy and influence.

</p>



<div className="mt-6 grid md:grid-cols-2 gap-5">


{[
["North","Wealth (Kuber Energy)"],
["East","Growth & Health (Sun Energy)"],
["South","Stability & Discipline"],
["West","Gains & Opportunities"],
["Northeast","Wisdom & Spiritual Growth"],
["Southeast","Fire & Transformation"],
["Southwest","Stability & Control"],
["Northwest","Movement & Relationships"]
].map(([dir,meaning])=>(

<div
key={dir}
className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5"
>

<p className="font-bold text-yellow-300">
{dir}
</p>

<p className="mt-2 text-gray-300">
{meaning}
</p>

</div>

))}


</div>


</div>






{/* Panch Tatva */}

<div>


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

2. Panch Tatva (Five Elements)

</h4>



<div className="mt-6 space-y-4">


<p>
<span className="font-bold text-yellow-300">
Earth (Prithvi)
</span>
{" "}→ Stability
</p>


<p>
<span className="font-bold text-yellow-300">
Water (Jal)
</span>
{" "}→ Flow & Emotions
</p>


<p>
<span className="font-bold text-yellow-300">
Fire (Agni)
</span>
{" "}→ Energy & Transformation
</p>


<p>
<span className="font-bold text-yellow-300">
Air (Vayu)
</span>
{" "}→ Movement & Relationships
</p>


<p>
<span className="font-bold text-yellow-300">
Space (Aakash)
</span>
{" "}→ Expansion & Consciousness
</p>


</div>


</div>





{/* 45 Devtas */}

<div>


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

3. 45 Devtas in Vastu Purush Mandala

</h4>



<p className="mt-4">

According to Vastu, every plot or building is represented through the
<strong> Vastu Purush Mandala</strong>, where 45 divine energies are believed
to influence different zones.

</p>



<div className="mt-6 grid md:grid-cols-2 gap-5">


{[
["Brahma","Center - Balance"],
["Indra","East - Power & Authority"],
["Kuber","North - Wealth"],
["Agni","Southeast - Fire Energy"],
["Varun","West - Water & Stability"]
].map(([name,role])=>(


<div
key={name}
className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5"
>

<p className="font-bold text-yellow-300">
{name}
</p>

<p className="text-gray-300 mt-2">
{role}
</p>

</div>


))}


</div>


</div>





{/* Navgraha */}

<div>


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

4. Navgraha Influence

</h4>


<p className="mt-4">

Vastu is deeply connected with the nine planetary energies because every
direction carries a planetary influence.

</p>


<div className="mt-6 space-y-3">


<p>
<span className="font-bold text-yellow-300">
Sun
</span>
→ Authority & Health (East)
</p>


<p>
<span className="font-bold text-yellow-300">
Moon
</span>
→ Mind & Emotions (Northwest)
</p>


<p>
<span className="font-bold text-yellow-300">
Mars
</span>
→ Energy & Property (South)
</p>


<p>
<span className="font-bold text-yellow-300">
Mercury
</span>
→ Communication & Business (North)
</p>


<p>
<span className="font-bold text-yellow-300">
Jupiter
</span>
→ Wisdom & Expansion (Northeast)
</p>


<p>
<span className="font-bold text-yellow-300">
Venus
</span>
→ Luxury & Relationships (Southeast)
</p>


<p>
<span className="font-bold text-yellow-300">
Saturn
</span>
→ Karma & Discipline (West)
</p>


<p>
<span className="font-bold text-yellow-300">
Rahu & Ketu
</span>
→ Karmic Influences
</p>


</div>


</div>



</div>

{/* ============================================================
              THE MOST IMPORTANT CONCEPT: ALIGNMENT
============================================================ */}


<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  The Most Important Concept: ALIGNMENT
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">


<p>
  The true power of <strong>Vastu Shastra</strong> comes from proper alignment
  of different energies within a space.
</p>


<p>
  A building is not just made of walls and rooms; it is a combination of
  <strong> directions, elements, planetary influences, and cosmic energies.</strong>
</p>



<div className="mt-8 grid md:grid-cols-2 gap-5">


<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<p className="font-bold text-yellow-300 text-xl">
  ✔ Directions
</p>

<p className="mt-3 text-gray-300">
  Proper utilization of directional energies creates balance and harmony.
</p>

</div>



<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<p className="font-bold text-yellow-300 text-xl">
  ✔ Elements (Panch Tatva)
</p>

<p className="mt-3 text-gray-300">
  Earth, Water, Fire, Air, and Space must remain balanced.
</p>

</div>



<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<p className="font-bold text-yellow-300 text-xl">
  ✔ 45 Devtas
</p>

<p className="mt-3 text-gray-300">
  Every zone carries a specific divine energy that influences the space.
</p>

</div>



<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<p className="font-bold text-yellow-300 text-xl">
  ✔ Planetary Energies
</p>

<p className="mt-3 text-gray-300">
  Navgraha influences affect different directions and zones.
</p>

</div>


</div>
</div>





{/* ============================================================
                    VASTU + KUNDLI
============================================================ */}



<div className="mt-14">


<h3 className="text-3xl text-center font-bold text-white">
  Vastu Should Be Aligned With Your Kundli
</h3>



<p className="mt-6">

One of the deepest principles of Vastu is that a space should not only be
designed according to general rules but should also support the individual's
<strong> personal planetary energy.</strong>

</p>



<div className="mt-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">

Every individual has a unique planetary combination,
and every space has its own energy pattern.

</p>


</div>




<div className="mt-8 grid md:grid-cols-2 gap-6">


<div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">


<h4 className="text-2xl font-bold text-blue-300">
Kundli
</h4>


<p className="mt-4">

Not just a horoscope —
it is a personal energy map showing:

</p>


<ul className="mt-4 space-y-2">

<li>• Planetary strengths</li>

<li>• Weaknesses</li>

<li>• Life patterns</li>

<li>• Karmic influences</li>

</ul>


</div>




<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">


<h4 className="text-2xl font-bold text-yellow-300">
Vastu
</h4>


<p className="mt-4">

Not just a structure —
it is energy management of your surroundings.

</p>


<ul className="mt-4 space-y-2">

<li>• Directions</li>

<li>• Elements</li>

<li>• Energy flow</li>

<li>• Environmental balance</li>

</ul>


</div>



</div>


</div>







{/* ============================================================
                    FINAL VASTU MESSAGE
============================================================ */}



<div className="mt-14 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-10">


<h3 className="text-center text-3xl font-bold text-white">
  Final Thought on Vastu
</h3>



<p className="mt-8 text-center text-2xl leading-relaxed">

Vastu Shastra is not merely about placement of rooms;
it is a complete science of balancing

</p>



<div className="mt-8 flex flex-wrap justify-center gap-5">


<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

<span className="font-bold text-yellow-300">
Directions
</span>

</div>



<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

<span className="font-bold text-yellow-300">
Elements
</span>

</div>




<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

<span className="font-bold text-yellow-300">
45 Devtas
</span>

</div>




<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

<span className="font-bold text-yellow-300">
Planetary Energies
</span>

</div>


</div>



<p className="mt-10 text-center text-2xl font-bold">

When space and personal energy are aligned,
life naturally moves toward harmony and growth.

</p>



</div>




{/* ============================================================
                    TRANSITION TO NUMEROLOGY
============================================================ */}



<div className="mt-20 text-center">


<h3 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

Vastu Sets The Stage...

</h3>


<p className="mt-6 text-2xl text-white">

Now we move towards another powerful energy science:

</p>



<h2 className="mt-6 text-4xl font-bold text-white">

Numerology –
The Science of Numbers & Energy

</h2>


</div>
{/* ============================================================
          NUMEROLOGY – THE SCIENCE OF NUMBERS & ENERGY
============================================================ */}


<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Numerology – The Science of Numbers & Energy
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">


{/* Introduction */}

<p>
  <strong>Numerology</strong> is an ancient science that studies the
  vibrations, frequencies, and energies associated with numbers and their
  influence on human life, destiny, and surroundings.
</p>


<p>
  According to numerology, every number carries a unique vibration that
  connects with:
</p>



<div className="mt-6 grid md:grid-cols-2 gap-5">


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Personality
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Destiny
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Success & Opportunities
</p>

</div>


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">

<p className="font-bold text-yellow-300">
  ✦ Relationships & Life Journey
</p>

</div>


</div>





{/* Core Concept */}

<div className="mt-12">


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

Core Concept of Numerology

</h4>



<p className="mt-5">

Numerology works on the principle that numbers are not just mathematical
symbols, but they represent
<strong> energy codes</strong> that influence different areas of life.

</p>



<div className="mt-8 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-6">


<p className="text-center text-2xl font-bold">

Every number carries a vibration,
and every vibration creates an influence.

</p>


</div>


</div>





{/* Numbers Influence */}

<div className="mt-12">


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

Numbers Influence:

</h4>



<div className="mt-6 space-y-4">


<p>

<span className="font-bold text-yellow-300">
• Name or Business Name
</span>

</p>



<p>

<span className="font-bold text-yellow-300">
• Date of Birth
</span>

</p>



<p>

<span className="font-bold text-yellow-300">
• Mobile Number
</span>

</p>



<p>

<span className="font-bold text-yellow-300">
• House Number
</span>

</p>



<p>

<span className="font-bold text-yellow-300">
• Important Dates
</span>

</p>


</div>



<p className="mt-8">

These numbers are not considered random; they are believed to be connected
with
<strong> cosmic vibrations and planetary energies.</strong>

</p>


</div>







{/* ============================================================
                    KEY ELEMENTS
============================================================ */}



<h3 className="mt-16 text-3xl text-center font-bold text-white">

Key Elements of Numerology

</h3>





{/* Core Numbers */}

<div className="mt-10">


<h4 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

1. Core Numbers in Numerology

</h4>




{/* Birth Number */}

<div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">


<h5 className="text-2xl font-bold text-yellow-300">

Birth Number (Mulank)

</h5>


<p className="mt-4">

Derived from your
<strong> date of birth</strong>,
it represents your basic personality,
natural qualities, and behavioural patterns.

</p>


</div>





{/* Destiny Number */}

<div className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">


<h5 className="text-2xl font-bold text-yellow-300">

Destiny Number (Bhagyank)

</h5>


<p className="mt-4">

Calculated from your complete date of birth,
it represents your life path, destiny, opportunities,
and major experiences.

</p>


</div>






{/* Name Number */}

<div className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">


<h5 className="text-2xl font-bold text-yellow-300">

Name Number

</h5>


<p className="mt-4">

Calculated through your name spelling,
it influences your identity, recognition,
public image, and success vibration.

</p>


</div>


</div>






{/* Summary Box */}

<div className="mt-12 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">

Birth Number reveals your nature,<br/>

Destiny Number reveals your journey,<br/>

Name Number influences your external vibration.

</p>


</div>



</div>
{/* ============================================================
          NUMBERS (1 TO 9) & THEIR ENERGIES
============================================================ */}


<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Numbers (1 to 9) & Their Energies
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">


<p>
  In Numerology, every number from
  <strong> 1 to 9</strong> is connected with a specific planetary energy.
  These planetary vibrations influence personality, abilities, challenges,
  and life experiences.
</p>




<div className="mt-8 grid md:grid-cols-2 gap-6">



{/* Number 1 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  1 – Sun ☀️
</h4>

<p className="mt-3">
<strong>Energy:</strong> Leadership & Authority
</p>

<p className="mt-3 text-gray-300">
Represents confidence, individuality, power,
recognition, and the desire to lead.
</p>

</div>




{/* Number 2 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  2 – Moon 🌙
</h4>

<p className="mt-3">
<strong>Energy:</strong> Emotions & Sensitivity
</p>

<p className="mt-3 text-gray-300">
Represents imagination, intuition, emotions,
and understanding of others.
</p>

</div>





{/* Number 3 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  3 – Jupiter 🪐
</h4>

<p className="mt-3">
<strong>Energy:</strong> Growth & Wisdom
</p>

<p className="mt-3 text-gray-300">
Represents knowledge, expansion,
spiritual learning, and guidance.
</p>

</div>





{/* Number 4 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  4 – Rahu ☊
</h4>

<p className="mt-3">
<strong>Energy:</strong> Unconventional Thinking & Struggle
</p>

<p className="mt-3 text-gray-300">
Represents innovation, sudden changes,
unique ideas, and unusual paths.
</p>

</div>





{/* Number 5 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  5 – Mercury ☿
</h4>

<p className="mt-3">
<strong>Energy:</strong> Communication & Business
</p>

<p className="mt-3 text-gray-300">
Represents intelligence, adaptability,
communication skills, and trade.
</p>

</div>





{/* Number 6 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  6 – Venus ♀
</h4>

<p className="mt-3">
<strong>Energy:</strong> Luxury & Relationships
</p>

<p className="mt-3 text-gray-300">
Represents beauty, creativity,
comfort, attraction, and harmony.
</p>

</div>





{/* Number 7 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  7 – Ketu ☋
</h4>

<p className="mt-3">
<strong>Energy:</strong> Spirituality & Introspection
</p>

<p className="mt-3 text-gray-300">
Represents detachment, deep thinking,
research, and spiritual awareness.
</p>

</div>





{/* Number 8 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<h4 className="text-2xl font-bold text-yellow-300">
  8 – Saturn ♄
</h4>

<p className="mt-3">
<strong>Energy:</strong> Karma & Discipline
</p>

<p className="mt-3 text-gray-300">
Represents responsibility, patience,
justice, and long-term success.
</p>

</div>





{/* Number 9 */}

<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6 md:col-span-2">

<h4 className="text-2xl font-bold text-yellow-300">
  9 – Mars ♂
</h4>

<p className="mt-3">
<strong>Energy:</strong> Courage & Action
</p>

<p className="mt-3 text-gray-300">
Represents strength, determination,
passion, bravery, and energy.
</p>

</div>



</div>


</div>







{/* ============================================================
              VIBRATIONAL ALIGNMENT
============================================================ */}



<div className="mt-16 max-w-4xl mx-auto text-white text-xl leading-relaxed">


<h3 className="text-3xl font-bold text-center text-white">
  Vibrational Alignment in Numerology
</h3>



<p className="mt-8">

Numerology is based on the principle of
<strong> alignment</strong>.
When important numbers in our life support each other,
energy flows more smoothly.

</p>




<div className="mt-8 grid md:grid-cols-2 gap-6">



<div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">


<h4 className="text-2xl font-bold text-green-300">
  When Numbers Are Aligned
</h4>


<div className="mt-4 space-y-3">

<p>
✔ Better opportunities
</p>

<p>
✔ Improved confidence
</p>

<p>
✔ Greater stability
</p>

<p>
✔ Smooth progress
</p>


</div>


</div>





<div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">


<h4 className="text-2xl font-bold text-red-300">
  When Numbers Are Misaligned
</h4>


<div className="mt-4 space-y-3">

<p>
✖ Increased struggles
</p>

<p>
✖ Delays and obstacles
</p>

<p>
✖ Lack of balance
</p>

<p>
✖ Energy conflicts
</p>


</div>


</div>



</div>






{/* Important Numbers */}

<div className="mt-12 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<h4 className="text-center text-2xl font-bold text-yellow-300">

Important Vibrational Numbers

</h4>


<div className="mt-6 flex flex-wrap justify-center gap-4">


<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30">
Birth Number
</div>


<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30">
Destiny Number
</div>


<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30">
Name Number
</div>


<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30">
Mobile Number
</div>


<div className="px-6 py-3 rounded-full border border-[#D4AF37]/30">
House Number
</div>


</div>



</div>



</div>
{/* ============================================================
          NUMEROLOGY + KUNDLI CONNECTION
============================================================ */}


<h3 className="mt-16 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Numerology + Kundli Connection
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">


<p>
  Numerology and Astrology are deeply connected because both work with
  <strong> planetary energies and cosmic vibrations.</strong>
</p>


<p>
  Your <strong>Kundli (Birth Chart)</strong> represents your planetary
  blueprint — showing your strengths, weaknesses, karmic patterns, and the
  timing of important events through planetary movements and dashas.
</p>


<p>
  Numerology works as a supporting science by analysing the vibration of
  numbers connected with your birth date, name, and important numbers of life.
</p>



<div className="mt-8 p-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10">


<p className="text-center text-2xl font-bold">

Kundli reveals your planetary blueprint,<br/>
Numerology helps align your surrounding vibrations.

</p>


</div>



</div>







{/* ============================================================
          PERSONAL ENERGY & NUMBER ALIGNMENT
============================================================ */}



<h3 className="mt-20 text-3xl text-center font-bold text-white">

Personal Energy & Number Alignment

</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed">


<p>

Every person carries a unique energetic pattern based on:

</p>



<div className="mt-8 grid md:grid-cols-2 gap-6">


<div className="p-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5">


<h4 className="text-2xl font-bold text-yellow-300">
Birth Energy
</h4>


<p className="mt-4">

• Date of Birth<br/>
• Birth Number (Mulank)<br/>
• Destiny Number (Bhagyank)

</p>


</div>




<div className="p-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5">


<h4 className="text-2xl font-bold text-yellow-300">
Name Energy
</h4>


<p className="mt-4">

• Name vibration<br/>
• Business name vibration<br/>
• Public identity

</p>


</div>


</div>


</div>







{/* ============================================================
          NUMEROLOGY + VASTU CONNECTION
============================================================ */}



<h3 className="mt-20 text-3xl text-center font-bold text-white">

Numerology + Vastu Connection

</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">


<p>

Numerology works with the energy of the individual,
while Vastu works with the energy of the environment.

</p>



<div className="grid md:grid-cols-2 gap-8 mt-8">


<div className="rounded-3xl p-8 border border-[#D4AF37]/30 bg-[#D4AF37]/10">


<h4 className="text-2xl font-bold text-yellow-300">

Numerology

</h4>


<p className="mt-5">

Represents:

</p>


<ul className="mt-4 space-y-3">

<li>• Personal vibration</li>

<li>• Name frequency</li>

<li>• Number energy</li>

<li>• Individual potential</li>

</ul>


</div>





<div className="rounded-3xl p-8 border border-blue-400/30 bg-blue-400/10">


<h4 className="text-2xl font-bold text-blue-300">

Vastu

</h4>


<p className="mt-5">

Represents:

</p>


<ul className="mt-4 space-y-3">

<li>• Space vibration</li>

<li>• Directional energy</li>

<li>• Five elements</li>

<li>• Environmental balance</li>

</ul>


</div>


</div>





<div className="mt-10 p-8 rounded-3xl border border-[#D4AF37]/30">


<p className="text-center text-2xl font-bold">


When a person's energy and the energy of their surroundings support each other,
growth becomes smoother and obstacles reduce.

</p>


</div>


</div>








{/* ============================================================
          EXAMPLE OF ALIGNMENT
============================================================ */}



<h3 className="mt-20 text-3xl text-center font-bold text-white">

Example of Energy Alignment

</h3>




<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed">


<p>

A person's suitable numbers, name vibration, and living environment should be
considered together with their Kundli.

</p>


<div className="mt-8 space-y-5">


<p>

<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

Birth Number:

</span>

Shows natural personality and abilities.

</p>



<p>

<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

Destiny Number:

</span>

Shows life direction and opportunities.

</p>




<p>

<span className="font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

Name Number:

</span>

Influences identity, recognition, and external vibration.

</p>


</div>



</div>







{/* ============================================================
          FINAL MESSAGE
============================================================ */}



<div className="mt-16 max-w-4xl mx-auto p-10 rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10">


<h3 className="text-center text-3xl font-bold text-white">

The Principle of Alignment

</h3>



<p className="mt-8 text-center text-2xl font-bold">

Kundli shows the path,<br/>
Numerology balances the vibration,<br/>
Vastu supports the environment.

</p>


</div>
{/* ============================================================
          HOUSE NUMBER & VASTU ENERGY
============================================================ */}


<h3 className="mt-20 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  House Number & Vastu Energy
</h3>


<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">


<p>
  Every space carries a unique vibration. Just as a person has a personal
  energy pattern through their birth details, a house also carries an energy
  vibration through its number, direction, and environment.
</p>


<p>
  The house number can be studied along with:
</p>



<div className="mt-6 grid md:grid-cols-2 gap-6">


<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<p className="font-bold text-yellow-300 text-xl">
  • Personal Numerology
</p>

<p className="mt-3">
Birth Number, Destiny Number, and Name Number.
</p>

</div>



<div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

<p className="font-bold text-yellow-300 text-xl">
  • Vastu Principles
</p>

<p className="mt-3">
Directions, elements, and energy flow of the space.
</p>

</div>


</div>



<div className="mt-8 rounded-3xl border border-[#D4AF37]/30 
bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">

A balanced combination of personal energy and space energy
creates a supportive environment for growth.

</p>


</div>


</div>







{/* ============================================================
          NAME NUMEROLOGY + VASTU ALIGNMENT
============================================================ */}



<h3 className="mt-20 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Name Numerology + Vastu Space Alignment
</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">


<p>
  A person's name represents their identity and vibration, while the place
  where they live or work influences their surrounding energy.
</p>


<p>
  When the vibration of a name and the energy of a space support each other,
  it can create better harmony, confidence, and opportunities.
</p>




<div className="mt-8 grid md:grid-cols-3 gap-5">


<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5 text-center">

<p className="font-bold text-yellow-300">
Name Energy
</p>

<p className="mt-3">
Identity & Recognition
</p>

</div>



<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5 text-center">

<p className="font-bold text-yellow-300">
Number Energy
</p>

<p className="mt-3">
Personal Vibration
</p>

</div>




<div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5 text-center">

<p className="font-bold text-yellow-300">
Space Energy
</p>

<p className="mt-3">
Environment & Growth
</p>

</div>


</div>


</div>







{/* ============================================================
          MODERN DAY APPLICATIONS
============================================================ */}



<h3 className="mt-20 text-3xl max-w-4xl mx-auto text-center font-bold text-white">
  Modern-Day Applications of Numerology
</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed">


<p>
  Today, Numerology is applied in different areas of life to understand
  vibrations and make more conscious choices.
</p>




<div className="mt-10 space-y-8">


{/* Business */}


<div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-8">


<h4 className="text-2xl font-bold text-yellow-300">
  1. Business & Branding
</h4>


<div className="mt-5 space-y-3">

<p>
• Selecting business names
</p>

<p>
• Brand identity alignment
</p>

<p>
• Understanding business vibrations
</p>

<p>
• Creating stronger recognition
</p>


</div>


</div>





{/* Real Estate */}


<div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-8">


<h4 className="text-2xl font-bold text-yellow-300">
  2. Real Estate & Property
</h4>


<div className="mt-5 space-y-3">


<p>
• Choosing house numbers
</p>


<p>
• Understanding property vibrations
</p>


<p>
• Combining Numerology with Vastu principles
</p>


</div>


</div>






{/* Lifestyle */}


<div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-8">


<h4 className="text-2xl font-bold text-yellow-300">
  3. Lifestyle Decisions
</h4>



<div className="mt-5 space-y-3">


<p>
• Mobile numbers
</p>


<p>
• Vehicle numbers
</p>


<p>
• Important dates
</p>


<p>
• Personal choices
</p>


</div>


</div>



</div>


</div>







{/* ============================================================
          FINAL THOUGHT
============================================================ */}



<div className="mt-20 max-w-4xl mx-auto rounded-3xl border border-[#D4AF37]/40 
bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-10">


<h3 className="text-center text-3xl font-bold text-white">
  Final Thought
</h3>



<p className="mt-8 text-center text-3xl font-bold 
bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] 
bg-clip-text text-transparent">

Vastu Sets The Stage,<br/>
Numerology Tunes The Frequency.

</p>



<p className="mt-8 text-center text-2xl text-white leading-relaxed">

When the energy of a person,
the vibration of numbers,
and the environment around them
are aligned together,

</p>



<p className="mt-6 text-center text-3xl font-bold text-yellow-300">

Life moves towards harmony, growth, and balance.

</p>


</div>
{/* ============================================================
          OUR APPROACH: 3 PILLARS OF TRANSFORMATION
============================================================ */}


<h3 className="mt-20 text-4xl max-w-4xl mx-auto text-center font-bold text-white">

Our Approach: 3 Pillars of Transformation

</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">



<p className="text-center text-2xl">

True transformation happens when we understand the connection between

</p>



<div className="mt-8 flex flex-wrap justify-center gap-5">


<div className="
px-8 py-4 rounded-full
border border-[#D4AF37]/30
bg-[#D4AF37]/10
font-bold text-yellow-300
">

Astrology

</div>



<div className="
px-8 py-4 rounded-full
border border-[#D4AF37]/30
bg-[#D4AF37]/10
font-bold text-yellow-300
">

Vastu

</div>




<div className="
px-8 py-4 rounded-full
border border-[#D4AF37]/30
bg-[#D4AF37]/10
font-bold text-yellow-300
">

Numerology

</div>


</div>




<div className="mt-10 rounded-3xl border border-[#D4AF37]/30 
bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">

Astrology reveals your path,<br/>
Vastu aligns your environment,<br/>
Numerology balances your vibrations.

</p>


</div>



<p>

These three ancient sciences work together to provide a deeper understanding
of life, helping an individual identify their strengths, challenges, and the
right direction for growth.

</p>



</div>








{/* ============================================================
              PILLAR 1 - ASTROLOGY
============================================================ */}



<h3 className="mt-20 text-4xl max-w-4xl mx-auto text-center font-bold text-white">

1. Astrology (Kundli Science)

</h3>



<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">



<p>

Astrology, especially <strong>Vedic Astrology (Jyotish)</strong>, is the
science of understanding planetary influences and their connection with human
life.

</p>



<p>

A Kundli (birth chart) is created using the precise details of:

</p>




<div className="grid md:grid-cols-3 gap-6 mt-8">


<div className="
rounded-2xl
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
text-center
">


<p className="text-3xl">
📅
</p>


<p className="mt-3 font-bold text-yellow-300">

Date of Birth

</p>


</div>





<div className="
rounded-2xl
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
text-center
">


<p className="text-3xl">
⏰
</p>


<p className="mt-3 font-bold text-yellow-300">

Time of Birth

</p>


</div>





<div className="
rounded-2xl
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
text-center
">


<p className="text-3xl">
📍
</p>


<p className="mt-3 font-bold text-yellow-300">

Place of Birth

</p>


</div>



</div>






<div className="mt-10">


<h4 className="text-2xl font-bold 
bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B]
bg-clip-text text-transparent">

Astrology Helps Understand:

</h4>



<div className="mt-6 space-y-4">


<p>
<span className="font-bold text-yellow-300">
• Life Path:
</span>
 Understanding your natural direction and purpose.
</p>



<p>
<span className="font-bold text-yellow-300">
• Planetary Strengths:
</span>
 Identifying supportive and challenging energies.
</p>




<p>
<span className="font-bold text-yellow-300">
• Timing of Events:
</span>
 Understanding favourable periods through Dashas and planetary movements.
</p>




<p>
<span className="font-bold text-yellow-300">
• Karmic Patterns:
</span>
 Recognising lessons and experiences carried through life.
</p>


</div>


</div>







<div className="mt-10 rounded-3xl border border-[#D4AF37]/40 
bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">


A Kundli does not limit your life;
it provides awareness, guidance, and the wisdom to make better choices.

</p>


</div>




</div>
{/* ============================================================
              PILLAR 2 - VASTU SHASTRA
============================================================ */}



<h3 className="mt-20 text-4xl max-w-4xl mx-auto text-center font-bold text-white">

2. Vastu Shastra (Energy Alignment)

</h3>





<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">



<p>

Vastu Shastra is the ancient Indian science of architecture that focuses on
creating harmony between human life and the energies of nature.

</p>



<p>

Every space carries a vibration. The arrangement of directions, elements,
and energy flow within a place can influence the overall environment and
experience of the people living or working there.

</p>






<div className="mt-10 rounded-3xl border border-[#D4AF37]/30 
bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">


<p className="text-center text-2xl font-bold">


Vastu does not only design a structure,
it creates alignment between space, nature, and energy.

</p>


</div>







{/* VASTU OBJECTIVES */}



<h4 className="mt-12 text-3xl font-bold 
bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B]
bg-clip-text text-transparent">


Purpose of Vastu Alignment

</h4>





<div className="mt-8 grid md:grid-cols-2 gap-6">


<div className="
rounded-2xl 
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
">


<p className="font-bold text-yellow-300 text-xl">

✓ Balance Energy Flow

</p>


<p className="mt-3">

Creating harmony between directions, elements, and surroundings.

</p>


</div>





<div className="
rounded-2xl 
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
">


<p className="font-bold text-yellow-300 text-xl">

✓ Remove Energy Blockages

</p>


<p className="mt-3">

Correcting imbalances that may affect peace, productivity, and growth.

</p>


</div>





<div className="
rounded-2xl 
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
">


<p className="font-bold text-yellow-300 text-xl">

✓ Improve Positivity

</p>


<p className="mt-3">

Creating a supportive environment filled with positive vibrations.

</p>


</div>





<div className="
rounded-2xl 
border border-[#D4AF37]/20
bg-[#D4AF37]/5
p-6
">


<p className="font-bold text-yellow-300 text-xl">

✓ Support Growth

</p>


<p className="mt-3">

Aligning spaces for better opportunities and stability.

</p>


</div>


</div>







{/* VASTU COMPONENTS */}



<h4 className="mt-14 text-3xl font-bold 
bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B]
bg-clip-text text-transparent">


Core Elements of Vastu

</h4>





<div className="mt-8 space-y-5">


<p>

<span className="font-bold text-yellow-300">
• Directions (Disha):
</span>

Each direction carries a specific energy influence.

</p>




<p>

<span className="font-bold text-yellow-300">
• Panch Tatva (Five Elements):
</span>

Earth, Water, Fire, Air, and Space must remain balanced.

</p>




<p>

<span className="font-bold text-yellow-300">
• Energy Flow:
</span>

Proper placement allows natural movement of positive energy.

</p>




<p>

<span className="font-bold text-yellow-300">
• Vastu Purush Mandala:
</span>

A sacred framework representing cosmic energy within a space.

</p>



</div>








{/* APPLICATION */}



<h4 className="mt-14 text-3xl font-bold 
bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B]
bg-clip-text text-transparent">


Vastu Applications

</h4>




<div className="mt-8 grid md:grid-cols-3 gap-6">



<div className="
rounded-2xl
border border-[#D4AF37]/30
p-6
text-center
">


<p className="text-3xl">
🏠
</p>


<h5 className="mt-4 font-bold text-yellow-300 text-xl">

Home

</h5>


<p className="mt-3">

Peace, harmony, relationships, and positive living.

</p>


</div>







<div className="
rounded-2xl
border border-[#D4AF37]/30
p-6
text-center
">


<p className="text-3xl">
🏢
</p>


<h5 className="mt-4 font-bold text-yellow-300 text-xl">

Office

</h5>


<p className="mt-3">

Productivity, stability, and business growth.

</p>


</div>







<div className="
rounded-2xl
border border-[#D4AF37]/30
p-6
text-center
">


<p className="text-3xl">
🏛️
</p>


<h5 className="mt-4 font-bold text-yellow-300 text-xl">

Temples & Spaces

</h5>


<p className="mt-3">

Spiritual balance and sacred energy.

</p>


</div>



</div>








{/* FINAL VASTU MESSAGE */}



<div className="mt-14 rounded-3xl border border-[#D4AF37]/40 
bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-10">


<p className="text-center text-3xl font-bold">

A balanced space creates a balanced mind.

</p>


<p className="mt-6 text-center text-xl">


Vastu helps transform your surroundings by aligning
directions, elements, and energies with natural forces.

</p>


</div>




</div>
{/* ============================================================
              PILLAR 3 - NUMEROLOGY
============================================================ */}

<h3 className="mt-20 text-4xl max-w-4xl mx-auto text-center font-bold text-white">
  3. Numerology (Vibrational Alignment)
</h3>

<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-10">

  <p>
    Numerology is the ancient science of numbers that studies the vibrational
    energy associated with every individual. Each number carries a unique
    frequency that influences personality, opportunities, relationships, and
    life experiences.
  </p>

  <p>
    By understanding and aligning these numerical vibrations, individuals can
    make more conscious decisions and create greater harmony in different areas
    of life.
  </p>

  {/* Highlight Box */}

  <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">

    <p className="text-center text-2xl font-bold">

      Numbers are more than symbols—
      they are energetic frequencies that influence our journey.

    </p>

  </div>





  {/* What Numerology Helps With */}

  <h4
    className="text-3xl font-bold
    bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B]
    bg-clip-text text-transparent"
  >
    Numerology Helps You Understand
  </h4>

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

      <h5 className="text-xl font-bold text-yellow-300">
        Birth Number (Mulank)
      </h5>

      <p className="mt-3">
        Reveals your natural personality, behaviour, strengths, and inner
        qualities.
      </p>

    </div>

    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

      <h5 className="text-xl font-bold text-yellow-300">
        Destiny Number (Bhagyank)
      </h5>

      <p className="mt-3">
        Indicates your life path, opportunities, and long-term purpose.
      </p>

    </div>

    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

      <h5 className="text-xl font-bold text-yellow-300">
        Name Number
      </h5>

      <p className="mt-3">
        Influences recognition, public image, confidence, and success.
      </p>

    </div>

    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

      <h5 className="text-xl font-bold text-yellow-300">
        Vibrational Alignment
      </h5>

      <p className="mt-3">
        Helps bring balance between personal energy and universal vibrations.
      </p>

    </div>

  </div>





  {/* Applications */}

  <h4
    className="mt-14 text-3xl font-bold
    bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B]
    bg-clip-text text-transparent"
  >
    Applications of Numerology
  </h4>

  <div className="mt-8 space-y-5">

    <p>
      <span className="font-bold text-yellow-300">
        • Personal Development:
      </span>{" "}
      Understand your strengths, challenges, and life direction.
    </p>

    <p>
      <span className="font-bold text-yellow-300">
        • Name & Business Alignment:
      </span>{" "}
      Select names that resonate with your personal energy.
    </p>

    <p>
      <span className="font-bold text-yellow-300">
        • Important Numbers:
      </span>{" "}
      Evaluate the vibration of mobile numbers, vehicle numbers, house numbers,
      and significant dates.
    </p>

    <p>
      <span className="font-bold text-yellow-300">
        • Decision Making:
      </span>{" "}
      Gain clarity while making important personal and professional choices.
    </p>

  </div>





  {/* Final Numerology Quote */}

  <div className="mt-14 rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-10">

    <p className="text-center text-3xl font-bold">

      When your numbers are aligned,
      your efforts begin to flow with greater harmony.

    </p>

  </div>

</div>







{/* ============================================================
        OUR HOLISTIC APPROACH
============================================================ */}

<h3 className="mt-24 text-4xl max-w-4xl mx-auto text-center font-bold text-white">
  Our Holistic Approach
</h3>

<div className="mt-10 max-w-5xl mx-auto text-white text-xl leading-relaxed">

  <p className="text-center">
    We believe that lasting transformation is achieved by combining the wisdom
    of all three ancient sciences rather than relying on just one.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-12">

    <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-8 text-center">

      <div className="text-5xl">🪐</div>

      <h4 className="mt-5 text-2xl font-bold text-yellow-300">
        Astrology
      </h4>

      <p className="mt-4">
        Understand your life path, planetary influences, and karmic timing.
      </p>

    </div>

    <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-8 text-center">

      <div className="text-5xl">🏡</div>

      <h4 className="mt-5 text-2xl font-bold text-yellow-300">
        Vastu
      </h4>

      <p className="mt-4">
        Align your living and working spaces with natural energies.
      </p>

    </div>

    <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-8 text-center">

      <div className="text-5xl">🔢</div>

      <h4 className="mt-5 text-2xl font-bold text-yellow-300">
        Numerology
      </h4>

      <p className="mt-4">
        Harmonize your personal vibration with the energy of numbers.
      </p>

    </div>

  </div>

  <div className="mt-16 rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-10">

    <h4 className="text-center text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">
      The Three Pillars of Transformation
    </h4>

    <div className="mt-8 text-center space-y-3 text-2xl">

      <p><strong>Astrology</strong> guides your path.</p>

      <p><strong>Vastu</strong> aligns your environment.</p>

      <p><strong>Numerology</strong> balances your vibrations.</p>

    </div>

    <p className="mt-10 text-center text-2xl font-semibold text-white">
      Together, they help create a life of greater clarity, harmony, growth,
      and spiritual awareness.
    </p>

  </div>

</div>
{/* ============================================================
                OUR MISSION
============================================================ */}

<h3 className="mt-24 text-4xl max-w-4xl mx-auto text-center font-bold text-white">
  Our Mission
</h3>

<div className="mt-10 max-w-4xl mx-auto text-white text-xl leading-relaxed space-y-8">

  <p>
    Our mission is to preserve and share the timeless wisdom of the ancient
    Vedic sciences in a way that is authentic, practical, and relevant for the
    modern world.
  </p>

  <p>
    Astrology, Vastu Shastra, and Numerology are not merely systems for making
    predictions—they are powerful tools for understanding ourselves, improving
    our decisions, and living in greater harmony with the universal order.
  </p>

  <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-8">

    <p className="text-center text-2xl font-bold">

      Knowledge becomes meaningful only
      when it is applied with wisdom,
      sincerity, and right action.

    </p>

  </div>

</div>







{/* ============================================================
                OUR COMMITMENT
============================================================ */}

<h3 className="mt-20 text-4xl max-w-4xl mx-auto text-center font-bold text-white">
  Our Commitment
</h3>

<div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

  <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">

    <h4 className="text-2xl font-bold text-yellow-300">
      ✓ Authentic Guidance
    </h4>

    <p className="mt-4 text-white text-lg">
      Every recommendation is based on traditional Vedic principles and careful
      analysis rather than assumptions or shortcuts.
    </p>

  </div>

  <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">

    <h4 className="text-2xl font-bold text-yellow-300">
      ✓ Personalized Approach
    </h4>

    <p className="mt-4 text-white text-lg">
      Every individual has a unique birth chart, unique karmas, and unique life
      circumstances. Guidance should therefore always be personal.
    </p>

  </div>

  <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">

    <h4 className="text-2xl font-bold text-yellow-300">
      ✓ Spiritual Foundation
    </h4>

    <p className="mt-4 text-white text-lg">
      We believe that Dharma, Karma, and Bhakti form the strongest foundation
      for lasting peace and meaningful success.
    </p>

  </div>

  <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">

    <h4 className="text-2xl font-bold text-yellow-300">
      ✓ Continuous Learning
    </h4>

    <p className="mt-4 text-white text-lg">
      Ancient knowledge continues to inspire modern understanding through
      study, research, and sincere practice.
    </p>

  </div>

</div>








{/* ============================================================
                FINAL MESSAGE
============================================================ */}

<div className="mt-24 max-w-5xl mx-auto rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 p-12">

  <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

    Final Message

  </h3>

  <p className="mt-10 text-center text-2xl leading-relaxed text-white">

    Astrology helps you understand your journey.

  </p>

  <p className="text-center text-2xl leading-relaxed text-white">

    Vastu creates harmony in your surroundings.

  </p>

  <p className="text-center text-2xl leading-relaxed text-white">

    Numerology aligns your personal vibrations.

  </p>

  <p className="text-center text-2xl leading-relaxed text-white">

    Dharma gives direction.

  </p>

  <p className="text-center text-2xl leading-relaxed text-white">

    Karma shapes the future.

  </p>

  <p className="text-center text-2xl leading-relaxed text-white">

    Bhakti brings inner peace and divine grace.

  </p>

  <div className="mt-12 border-t border-[#D4AF37]/30 pt-10">

    <p className="text-center text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#B8860B] bg-clip-text text-transparent">

      When Knowledge,<br />
      Karma,<br />
      Dharma,<br />
      and Devotion come together...

    </p>

    <p className="mt-8 text-center text-3xl font-bold text-white">

      Life naturally moves toward
      <span className="text-yellow-300"> Peace</span>,
      <span className="text-yellow-300"> Prosperity</span>,
      <span className="text-yellow-300"> Wisdom</span>,
      and ultimately
      <span className="text-yellow-300"> Moksha.</span>

    </p>

  </div>

</div>

</Section>

  

      <Footer />
    </main>
  );
}