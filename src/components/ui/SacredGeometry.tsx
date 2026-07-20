"use client";

import { motion } from "framer-motion";

const SacredGeometry = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">

      {/* Large Rotating Sacred Circle */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.03, 1],
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#D4AF37]/30"
      >

        {/* Inner Circle */}
        <div className="absolute inset-12 rounded-full border border-[#FFD700]/25" />

        {/* Inner Circle */}
        <div className="absolute inset-24 rounded-full border border-[#D4AF37]/20" />

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#D4AF37]/20 -translate-x-1/2" />

        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#D4AF37]/20 -translate-y-1/2" />

        {/* Diagonal Line */}
        <div className="absolute left-1/2 top-1/2 w-full h-px bg-[#FFD700]/15 -translate-x-1/2 -translate-y-1/2 rotate-45" />

        {/* Opposite Diagonal Line */}
        <div className="absolute left-1/2 top-1/2 w-full h-px bg-[#FFD700]/15 -translate-x-1/2 -translate-y-1/2 -rotate-45" />

        {/* Center Circle */}
        <div className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full border border-[#FFD700]/30 -translate-x-1/2 -translate-y-1/2" />

        {/* Center Dot */}
        <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-[#FFD700] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#FFD700]" />

      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

    </div>
  );
};

export default SacredGeometry;