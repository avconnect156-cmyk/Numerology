"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import { subscribeUser } from "../../Service/api";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus({
        type: "error",
        message: "Email is required.",
      });
      return;
    }

    setLoading(true);

    setStatus({
      type: null,
      message: "",
    });

    try {
      const res = await subscribeUser({ email });

      setStatus({
        type: "success",
        message: res?.message || "Subscribed successfully!",
      });

      setEmail("");
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative z-[9999] bg-[#071B33] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/">
              <h2 className="text-3xl font-bold tracking-wide">
                <span className="text-[#D4AF37]">Astro</span>
                <span className="text-white">Vastu</span>
                <span className="text-[#D4AF37]">Connect</span>
              </h2>
            </Link>

            <p className="text-[15px] leading-7 text-gray-300">
              Discover the hidden wisdom within your birth numbers and
              receive personalized guidance for your career,
              relationships, finances and life purpose through
              ancient numerology.
            </p>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 font-semibold uppercase tracking-widest text-[#D4AF37]">
              Support
            </h4>

            <div className="space-y-3">
              <Link
                href="/term"
                className="block text-gray-300 transition hover:text-[#FFD700]"
              >
                Terms of Service
              </Link>

              <Link
                href="/privacy"
                className="block text-gray-300 transition hover:text-[#FFD700]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/cookies"
                className="block text-gray-300 transition hover:text-[#FFD700]"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
                    {/* Pages */}
          <div>
            <h4 className="mb-5 font-semibold uppercase tracking-widest text-[#D4AF37]">
              Pages
            </h4>

            <div className="space-y-3">
              <Link
                href="/about-us"
                className="block text-gray-300 transition duration-300 hover:text-[#FFD700]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block text-gray-300 transition duration-300 hover:text-[#FFD700]"
              >
                Contact
              </Link>

              <Link
                href="/faq"
                className="block text-gray-300 transition duration-300 hover:text-[#FFD700]"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="mb-5 font-semibold uppercase tracking-widest text-[#D4AF37]">
              Subscribe
            </h4>

            <p className="mb-4 text-sm leading-6 text-gray-300">
              Get exclusive numerology insights, special offers and updates
              delivered directly to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-[#D4AF37]/30 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 backdrop-blur-md transition-all focus:border-[#FFD700] focus:outline-none"></input>

<Button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#F4C430] py-3 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70">
                {loading ? "Subscribing..." : "SUBSCRIBE"}
              </Button>

              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>
                {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Copyright */}
            <p className="text-center text-sm text-gray-400 md:text-left">
              © {new Date().getFullYear()} AstroVastuConnect. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 hover:scale-110 hover:border-[#FFD700] hover:bg-[#D4AF37] hover:text-[#071B33]"
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 hover:scale-110 hover:border-[#FFD700] hover:bg-[#D4AF37] hover:text-[#071B33]"
              >
                <Linkedin size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 hover:scale-110 hover:border-[#FFD700] hover:bg-[#D4AF37] hover:text-[#071B33]"
              >
                <Facebook size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;