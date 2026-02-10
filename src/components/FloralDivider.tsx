"use client";

import { motion } from "framer-motion";

export default function FloralDivider() {
  return (
    <div aria-hidden className="pointer-events-none flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[260px] sm:w-[340px]"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FloralDividerSVG />
        </motion.div>
      </motion.div>
    </div>
  );
}

function FloralDividerSVG() {
  return (
    <svg viewBox="0 0 800 220" fill="none" className="h-auto w-full">
      {/* ramas */}
      <path
        d="M90 150c120-70 240-95 310-95s190 25 310 95"
        stroke="rgba(180,140,60,0.45)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* hojas laterales */}
      <path
        d="M210 145c-28-36-18-72 30-90 20 22 20 56-30 90Z"
        fill="rgba(200,160,80,0.14)"
        stroke="rgba(180,140,60,0.45)"
        strokeWidth="3"
      />
      <path
        d="M590 145c28-36 18-72-30-90-20 22-20 56 30 90Z"
        fill="rgba(200,160,80,0.14)"
        stroke="rgba(180,140,60,0.45)"
        strokeWidth="3"
      />

      {/* flor central */}
      <circle
        cx="400"
        cy="110"
        r="34"
        fill="rgba(200,160,80,0.20)"
        stroke="rgba(180,140,60,0.60)"
        strokeWidth="3"
      />
      <path
        d="M400 70c20 10 30 24 30 40s-12 30-30 30-30-14-30-30 10-30 30-40Z"
        fill="rgba(200,160,80,0.10)"
        stroke="rgba(180,140,60,0.50)"
        strokeWidth="3"
      />

      {/* florecitas */}
      {[
        [330, 120, 18],
        [470, 120, 18],
      ].map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="rgba(200,160,80,0.14)"
          stroke="rgba(180,140,60,0.50)"
          strokeWidth="3"
        />
      ))}

      {/* puntitos */}
      {[
        [360, 155],
        [380, 165],
        [420, 165],
        [440, 155],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="rgba(180,140,60,0.25)" />
      ))}
    </svg>
  );
}
