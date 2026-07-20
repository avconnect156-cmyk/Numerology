"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://numerloogy-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Backend Error: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Connection Refused:", error);
      alert("Unable to connect with the server. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-[#FFD700]/30 selection:text-white">

      <Header />

      {/* ================= HERO SECTION ================= */}
      <Section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 bg-[linear-gradient(180deg,#020617_0%,#0F172A_48%,#134E4A_100%)] text-center">

        {/* Decorative Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-[#FFD700]/10" />

          <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] rounded-full border border-[#D4AF37]/10" />

          <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[#FFD700]/10" />

        </div>

        {/* Soft Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FFD700]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">

          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/5 border border-[#FFD700]/20 backdrop-blur-md text-[#FFD700] text-sm md:text-base font-bold tracking-[0.2em] uppercase">

            <Sparkles className="w-4 h-4" />

            Contact Us

          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white">

            Let&apos;s Connect &

            <br />

            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFF5C3] to-[#D4AF37] bg-clip-text text-transparent italic">
              Discover Your Path
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about our numerology reports, need
            assistance, or simply want to connect with us, our team is here to
            guide you.
          </p>

        </div>
      </Section>

      {/* ================= CONTACT CONTENT ================= */}
      <Section className="relative py-20 md:py-28 bg-[linear-gradient(180deg,#134E4A_0%,#0F172A_45%,#020617_100%)]">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ================= CONTACT INFORMATION ================= */}
          <div className="space-y-10">

            {/* Heading */}
            <div>

              <p className="text-sm font-bold tracking-[0.25em] uppercase text-[#FFD700]">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                We&apos;re here to help you find

                <br />

                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFF5C3] to-[#D4AF37] bg-clip-text text-transparent italic">
                  clarity and direction.
                </span>
              </h2>

              <p className="mt-6 text-slate-300 leading-8 max-w-lg">
                Have a question about your personalized numerology report or
                need assistance? Reach out to us. Every journey begins with a
                conversation.
              </p>

            </div>

            {/* Contact Details */}
            <div className="space-y-5">

              {/* Address */}
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFD700]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#FFD700] transition-transform duration-300 group-hover:scale-110">

                  <MapPin className="w-5 h-5" />

                </div>

                <div>

                  <h4 className="font-serif font-bold text-lg text-[#FFD700]">
                    Visit Us
                  </h4>

                  <p className="mt-1 text-slate-300 leading-7">
                    202 Helga Springs Rd,
                    <br />
                    Crawford, TN 38554
                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFD700]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#FFD700] transition-transform duration-300 group-hover:scale-110">

                  <Phone className="w-5 h-5" />

                </div>

                <div>

                  <h4 className="font-serif font-bold text-lg text-[#FFD700]">
                    Call Us
                  </h4>

                  <p className="mt-1 text-slate-300">
                    800.275.8777
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Mon-Fri: 9am - 6pm EST
                  </p>

                </div>

              </div>

              {/* Email */}
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFD700]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#FFD700] transition-transform duration-300 group-hover:scale-110">

                  <Mail className="w-5 h-5" />

                </div>

                <div>

                  <h4 className="font-serif font-bold text-lg text-[#FFD700]">
                    Email Us
                  </h4>

                  <p className="mt-1 text-slate-300">
                    alex@company.com
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Support available 24/7
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="relative">

            {/* Gold Glow */}
            <div className="absolute -inset-4 bg-[#FFD700]/10 blur-3xl rounded-3xl pointer-events-none" />

            <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">

              <div className="mb-8">

                <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFD700]">
                  Send A Message
                </p>

                <h3 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-white">
                  Start a conversation with us
                </h3>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div className="space-y-2">

                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-300"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-xl px-4 py-3.5 bg-[#020617]/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFD700]/60 focus:ring-1 focus:ring-[#FFD700]/30 transition-all"
                    />

                  </div>

                  <div className="space-y-2">

                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-300"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full rounded-xl px-4 py-3.5 bg-[#020617]/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFD700]/60 focus:ring-1 focus:ring-[#FFD700]/30 transition-all"
                    />

                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-2">

                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl px-4 py-3.5 bg-[#020617]/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFD700]/60 focus:ring-1 focus:ring-[#FFD700]/30 transition-all"
                  />

                </div>

                {/* Message */}
                <div className="space-y-2">

                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="w-full rounded-xl px-4 py-3.5 bg-[#020617]/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFD700]/60 focus:ring-1 focus:ring-[#FFD700]/30 transition-all resize-none"
                  />

                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full rounded-full py-4 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] !text-black font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] hover:brightness-110 transition-all duration-300"
                >

                  Send Message

                  <Send className="w-4 h-4" />

                </Button>

              </form>

            </div>

          </div>

        </div>

      </Section>

      {/* ================= MAP SECTION ================= */}
      <section className="relative h-[400px] w-full overflow-hidden border-t border-[#D4AF37]/20">

        {/* Map Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#020617]/50 to-transparent" />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.348687241284!2d-85.25367802426364!3d36.13328810505963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8867a6e78848d70b%3A0xe5349e37cc600d8!2sCrawford%2C%20TN%2038554%2C%20USA!5e0!3m2!1sen!2sin!4v1708250000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </section>

      <Footer />

    </main>
  );
}