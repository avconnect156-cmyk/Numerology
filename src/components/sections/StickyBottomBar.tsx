"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/app/Modal/Modal";
import usePricing from "@/hooks/usePricing";
import SacredGeometry from "@/components/ui/SacredGeometry";

// ================= PRICING TYPE =================
type PricingType = {
  price: number;
  finalPrice: number;
  discount: number;
  buttonText: string;
  countdown: number;
  offerId: string;
};

const StickyBottomBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const pricing = usePricing() as PricingType | null;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // ================= ADMIN DATA =================
  const countdown = pricing?.countdown;
  const offerId = pricing?.offerId;

  // ================= TIMER SETUP =================
  useEffect(() => {
    if (!pricing || !countdown || !offerId) return;

    const storedOfferId = localStorage.getItem("offer_id");

    // Reset timer if admin changes the offer
    if (storedOfferId && storedOfferId !== offerId) {
      localStorage.removeItem("offer_end_time");
      localStorage.removeItem("offer_expired");
    }

    localStorage.setItem("offer_id", offerId);

    const expired = localStorage.getItem("offer_expired");

    if (expired === "true") {
      setTimeLeft(0);
      setIsReady(true);
      return;
    }

    let endTime = localStorage.getItem("offer_end_time");

    if (!endTime) {
      const newEndTime = Date.now() + countdown * 1000;

      localStorage.setItem(
        "offer_end_time",
        newEndTime.toString()
      );

      endTime = newEndTime.toString();
    }

    const updateTimer = () => {
      const remaining = Math.max(
        0,
        Math.floor(
          (parseInt(endTime as string) - Date.now()) / 1000
        )
      );

      setTimeLeft(remaining);

      if (remaining <= 0) {
        localStorage.setItem("offer_expired", "true");
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    setIsReady(true);

    return () => clearInterval(interval);
  }, [pricing, countdown, offerId]);

  // ================= FORMAT TIME =================
  const formatTime = (sec: number): string => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    const pad = (n: number) =>
      n.toString().padStart(2, "0");

    return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
  };

  // ================= PRICING =================
  const isExpired = timeLeft <= 0;

  const price = pricing?.price ?? 1999;

  const finalPrice = !isExpired
    ? pricing?.finalPrice ?? price
    : price;

  const discount = !isExpired
    ? pricing?.discount ?? 0
    : 0;

  const buttonText =
    pricing?.buttonText ?? "Get Your Full Report";

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden">

        {/* Premium Top Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-[#FFD700]/10 blur-3xl pointer-events-none" />

       <div className="relative overflow-hidden border-t border-[#D4AF37]/30 bg-[linear-gradient(90deg,#020617_0%,#0F172A_45%,#134E4A_100%)] backdrop-blur-2xl shadow-[0_-12px_40px_rgba(0,0,0,0.55)] px-4 py-3">
        {/* ================= DESKTOP ================= */}
<div className="hidden md:flex relative max-w-6xl mx-auto min-h-[76px] items-center justify-center">

  {/* ================= PRICE + BUTTON GROUP ================= */}
  <div className="flex items-center gap-6">

    {/* LEFT PRICE */}
    <div className="flex items-center gap-3">

      <p className="text-2xl font-serif font-bold text-[#FFD700]">

        {!isExpired && (
          <span className="mr-2 text-base text-slate-500 line-through">
            ₹ {price}
          </span>
        )}

        ₹ {finalPrice}

      </p>

      {/* DISCOUNT */}
      {!isExpired && discount > 0 && (
        <span className="rounded-full border border-[#D4AF37]/40 bg-[#FFD700]/10 px-3 py-1 text-xs font-bold text-[#FFD700]">
          {discount}% OFF
        </span>
      )}

    </div>

    {/* ================= CENTER CIRCULAR SACRED GEOMETRY ================= */}
    <div className="relative flex items-center justify-center">

      {/* Outer Gold Glow */}
      <div className="absolute w-52 h-52 rounded-full bg-[#FFD700]/10 blur-3xl" />

      {/* Rotating Sacred Geometry */}
      <div className="absolute w-48 h-48 opacity-50 pointer-events-none animate-[spin_30s_linear_infinite]">
        <SacredGeometry />
      </div>

      {/* Outer Circular Border */}
      <div className="absolute w-44 h-44 rounded-full border border-[#D4AF37]/30 pointer-events-none" />

      {/* Dashed Circular Border */}
      <div className="absolute w-40 h-40 rounded-full border border-dashed border-[#FFD700]/30 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />

      {/* Inner Circular Border */}
      <div className="absolute w-32 h-32 rounded-full border border-[#D4AF37]/20 pointer-events-none" />

      {/* CTA Button */}
      <Button
        onClick={handleOpen}
        className="relative z-10 rounded-full px-10 h-12 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] !text-[#020617] font-bold uppercase tracking-wide shadow-[0_8px_30px_rgba(212,175,55,0.35)] border border-[#FFD700]/50 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:cursor-pointer"
      >
        {buttonText}
      </Button>

    </div>

  </div>

  {/* ================= RIGHT TIMER ================= */}
  <div className="absolute right-0 flex justify-end min-w-[190px]">

    {isReady && !isExpired && (
      <div className="flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-2 backdrop-blur-xl">

        <span className="text-lg">
          ⏳
        </span>

        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            Offer Ends In
          </p>

          <p className="text-base font-bold text-[#FFD700]">
            {formatTime(timeLeft)}
          </p>
        </div>

      </div>
    )}

  </div>


          </div>

          {/* ================================================= */}
          {/* MOBILE */}
          {/* ================================================= */}

          <div className="md:hidden max-w-md mx-auto">

            {/* Price */}
            <div className="flex items-center justify-center gap-3">

              <p className="text-xl font-serif font-bold text-[#FFD700]">

                {!isExpired && (
                  <span className="mr-2 text-sm text-slate-500 line-through">
                    ₹ {price}
                  </span>
                )}

                ₹ {finalPrice}

              </p>

              {!isExpired && discount > 0 && (
                <span className="rounded-full border border-[#D4AF37]/40 bg-[#FFD700]/10 px-2.5 py-1 text-[10px] font-bold text-[#FFD700]">
                  {discount}% OFF
                </span>
              )}

            </div>

            {/* Mobile Timer */}
            {isReady && !isExpired && (
              <div className="mt-2 flex justify-center">

                <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-1.5">

                  <span className="text-sm">
                    ⏳
                  </span>

                  <p className="text-xs font-bold text-[#FFD700]">
                    {formatTime(timeLeft)}
                  </p>

                </div>

              </div>
            )}

            {/* Mobile Circular Design */}
            <div className="relative flex items-center justify-center mt-3">

              {/* Glow */}
              <div className="absolute w-40 h-40 rounded-full bg-[#FFD700]/10 blur-2xl" />

              {/* Sacred Geometry */}
              <div className="absolute w-36 h-36 opacity-40 pointer-events-none animate-[spin_30s_linear_infinite]">

                <SacredGeometry />

              </div>

              {/* Outer Circle */}
              <div className="absolute w-36 h-36 rounded-full border border-[#D4AF37]/30 pointer-events-none" />

              {/* Dashed Circle */}
              <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#FFD700]/30 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />

              {/* Mobile CTA */}
              <Button
                onClick={handleOpen}
                className="relative z-10 rounded-full px-8 h-11 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] !text-[#020617] font-bold uppercase tracking-wide shadow-[0_8px_25px_rgba(212,175,55,0.3)] border border-[#FFD700]/50 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
              >
                {buttonText}
              </Button>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* MODAL */}
      {/* ================================================= */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </>
  );
};

export default StickyBottomBar;