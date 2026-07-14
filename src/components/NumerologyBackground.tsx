"use client";

import { motion } from "framer-motion";

const NumerologyBackground = () => {
  return (
    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden pointer-events-none z-0">

      {/* Rotating Circles */}
      <motion.div
        className="absolute -left-[380px] -top-[180px]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="950" height="950" viewBox="0 0 950 950">
          {[450, 360, 270, 180].map((r, i) => (
            <circle
              key={i}
              cx="475"
              cy="475"
              r={r}
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              opacity="0.1"
            />
          ))}
        </svg>
      </motion.div>

      {/* Moving Network */}
      <motion.svg
        className="absolute left-0 top-0 w-full h-full"
        viewBox="0 0 900 900"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Solid Lines */}
        <g stroke="#D4AF37" strokeWidth="1.4" opacity="0.1">

          <line x1="70" y1="40" x2="250" y2="90" />
          <line x1="250" y1="90" x2="420" y2="220" />
          <line x1="420" y1="220" x2="180" y2="420" />
          <line x1="180" y1="420" x2="350" y2="650" />
          <line x1="350" y1="650" x2="620" y2="480" />
          <line x1="620" y1="480" x2="700" y2="180" />

          <line x1="70" y1="40" x2="180" y2="420" />
          <line x1="250" y1="90" x2="350" y2="650" />
          <line x1="420" y1="220" x2="620" y2="480" />

        </g>

        {/* Dashed Lines */}
        <g
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeDasharray="12 12"
          opacity="0.1"
        >
          <line x1="620" y1="0" x2="700" y2="180" />
          <line x1="700" y1="180" x2="640" y2="500" />
          <line x1="450" y1="100" x2="450" y2="820" />
          <line x1="120" y1="520" x2="700" y2="520" />
        </g>

        {/* Animated Nodes */}
        {[
          [70, 40],
          [250, 90],
          [420, 220],
          [180, 420],
          [350, 650],
          [620, 480],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            fill="#D4AF37"
            animate={{
              r: [6, 9, 6],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 1.5 + i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default NumerologyBackground;