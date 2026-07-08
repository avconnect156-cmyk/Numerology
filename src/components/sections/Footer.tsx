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
    type: "success" | "error" |null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // ✅ FIX: Added missing handler
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus({ type: "error", message: "Email is required" });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await subscribeUser({ email });

      setStatus({
        type: "success",
        message: res?.message || "Subscribed successfully!",
      });

      setEmail("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus({ type: "error", message: error.message });
      } else {
        setStatus({ type: "error", message: "Something went wrong" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[0b0230] pt-16 pb-8 border-t border-[#C5A065]/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10 items-start">
          
          {/* BRAND */}
          <div className="space-y-4  text-center sm:text-left">
            <Link href="/">
              <h2 className="text-lg md:text-3xl font-bold text-white font-serif mb-4">
                astrovastuconnect
              </h2>
            </Link>
            <p className="text-white text-lg">
              Discover the power of numerology and unlock insights about your life.
            </p>
            <div className="text-sm space-y-1">
              {/* <p>📍 India</p>
            <a href="tel:8002758777">
              <p>📞 Call Us</p>
            </a>
            <a href="mailto:support@mahakaal.com">
              <p>📧 Email Us</p>
            </a> */}
            </div>
          </div>

          {/* SUPPORT */}
          <div className="text-center sm:text-left text-white mt-6">
            <h4 className="font-bold text-sm uppercase mb-4">Support</h4>
            <div className="space-y-2">
              <Link href="/term" className="block hover:text-[white]">Terms of services</Link>
              <Link href="/privacy" className="block hover:text-[white]">Privacy Policy</Link>
               <Link href="/privacy" className="block hover:text-[white]">Cookies Policy</Link>
            </div>
          </div>

          {/* PAGES */}
          <div className="text-center sm:text-left text-white mt-6">
            <h4 className="font-bold text-sm uppercase mb-4">Pages</h4>
            <div className="space-y-2">
              <Link href="/about-us" className="block hover:text-[white]">About</Link>
              <Link href="/contact" className="block hover:text-[white]">Contact</Link>
            </div>
          </div>

          {/* SUBSCRIBE */}
          <div className="text-center sm:text-left text-white mt-6 ">
            <h4 className="font-bold text-sm uppercase mb-4">Subscribe</h4>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="border px-3 py-2 text-sm flex-1 min-w-0 rounded-md text-white"
              />

              <Button
                type="submit"
                disabled={loading}
                className="shrink-0 whitespace-nowrap shadow-none bg-white !text-black font-bold hover:cursor-pointer"
              >
                {loading ? "..." : "Subscribe"}
              </Button>
            </form>

            {status.message && (
              <p
                className={`text-xs mt-2 ${
                  status.type === "success"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 text-center sm:text-left">
          <p>© {new Date().getFullYear()} astrovastuconnect. All rights reserved.</p>

          <div className="flex gap-4 justify-center sm:justify-start mt-2 sm:mt-0">
            <Instagram className="cursor-pointer hover:text-[#C5A065]" />
            <Linkedin className="cursor-pointer hover:text-[#C5A065]" />
            <Facebook className="cursor-pointer hover:text-[#C5A065]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;