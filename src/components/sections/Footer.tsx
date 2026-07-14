"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import { subscribeUser } from "../../Service/api";

const Footer = () => {
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

    if (!email) {
      setStatus({
        type: "error",
        message: "Email is required",
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
      if (error instanceof Error) {
        setStatus({
          type: "error",
          message: error.message,
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#081C3A] via-[#06142B] to-[#020B18] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/">
              <h2 className="text-3xl font-bold tracking-wide">
                <span className="text-[#D4AF37]">Astro</span>
                <span className="text-white">VastuConnect</span>
              </h2>
            </Link>

            <p className="text-gray-300 leading-7 text-[15px]">
              Discover the hidden wisdom within your birth numbers and receive
              personalized guidance for your career, relationships, finances,
              and life purpose through ancient numerology.
            </p>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#D4AF37] uppercase font-semibold tracking-widest mb-5">
              Support
            </h4>

            <div className="space-y-3">
              <Link
                href="/term"
                className="block text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                Terms of Service
              </Link>

              <Link
                href="/privacy"
                className="block text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/cookies"
                className="block text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                Cookies Policy
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[#D4AF37] uppercase font-semibold tracking-widest mb-5">
              Pages
            </h4>

            <div className="space-y-3">
              <Link
                href="/about-us"
                className="block text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-[#D4AF37] uppercase font-semibold tracking-widest mb-5">
              Subscribe
            </h4>

            <p className="text-gray-300 text-sm mb-4">
              Get exclusive numerology insights, offers, and updates directly
              to your inbox.
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
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D4AF37]/30
                  bg-white/5
                  backdrop-blur-md
                  px-4
                  py-3
                  text-white
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:border-[#FFD700]
                  transition-all
                "
              />

              <Button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-[#B8860B]
                  via-[#FFD700]
                  to-[#F4C430]
                  text-black
                  font-bold
                  py-3
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:brightness-110
                  hover:cursor-pointer
                  shadow-none
                "
              >
                {loading ? "Subscribing..." : "SUBSCRIBE"}
              </Button>
            </form>

            {status.message && (
              <p
                className={`mt-3 text-sm ${
                  status.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} AstroVastuConnect. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#D4AF37]/40
                flex
                items-center
                justify-center
                text-[#D4AF37]
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#081C3A]
              "
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#D4AF37]/40
                flex
                items-center
                justify-center
                text-[#D4AF37]
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#081C3A]
              "
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#D4AF37]/40
                flex
                items-center
                justify-center
                text-[#D4AF37]
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#081C3A]
              "
            >
              <Facebook size={18} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;