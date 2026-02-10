"use client";

import { motion } from "framer-motion";

export default function FloralsCorners() {
  return (
    <>
      {/* TOP LEFT */}
      <Corner
        className="left-0 top-0 -translate-x-10 -translate-y-10"
        flipX={false}
        flipY={false}
        opacity={0.35}
      />
      {/* TOP RIGHT */}
      <Corner
        className="right-0 top-0 translate-x-10 -translate-y-10"
        flipX={true}
        flipY={false}
        opacity={0.35}
      />

      {/* BOTTOM LEFT */}
      <Corner
        className="left-0 bottom-0 -translate-x-10 translate-y-10"
        flipX={false}
        flipY={true}
        opacity={0.25}
      />
      {/* BOTTOM RIGHT */}
      <Corner
        className="right-0 bottom-0 translate-x-10 translate-y-10"
        flipX={true}
        flipY={true}
        opacity={0.25}
      />
    </>
  );
}

function Corner({
  className,
  flipX,
  flipY,
  opacity,
}: {
  className: string;
  flipX: boolean;
  flipY: boolean;
  opacity: number;
}) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: `scale(${sx},${sy})` }}
          className="w-[220px] sm:w-[280px]"
        >
          <FloralCornerSVG />
        </motion.div>
      </motion.div>
    </div>
  );
}

function FloralCornerSVG() {
  return (
    <svg viewBox="0 0 320 320" fill="none" className="h-auto w-full">
      {/* ramas */}
      <path
        d="M40 250c60-90 140-140 240-160"
        stroke="rgba(180,140,60,0.55)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M55 265c70-95 150-150 245-175"
        stroke="rgba(180,140,60,0.28)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* hojas */}
      <path
        d="M110 210c-18-32-8-64 28-78 16 18 18 48-28 78Z"
        fill="rgba(200,160,80,0.18)"
        stroke="rgba(180,140,60,0.55)"
        strokeWidth="3"
      />
      <path
        d="M170 175c-10-30 8-60 44-70 12 22 6 52-44 70Z"
        fill="rgba(200,160,80,0.14)"
        stroke="rgba(180,140,60,0.45)"
        strokeWidth="3"
      />
      <path
        d="M220 150c2-26 24-46 54-44 2 26-20 46-54 44Z"
        fill="rgba(200,160,80,0.10)"
        stroke="rgba(180,140,60,0.40)"
        strokeWidth="3"
      />

      {/* flor */}
      <circle
        cx="120"
        cy="120"
        r="28"
        fill="rgba(200,160,80,0.20)"
        stroke="rgba(180,140,60,0.60)"
        strokeWidth="3"
      />
      <path
        d="M120 78c16 8 24 20 24 34s-10 26-24 26-24-12-24-26 8-26 24-34Z"
        fill="rgba(200,160,80,0.12)"
        stroke="rgba(180,140,60,0.50)"
        strokeWidth="3"
      />

      {/* puntitos */}
      {[
        [150, 110],
        [160, 125],
        [175, 135],
        [200, 165],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="rgba(180,140,60,0.28)" />
      ))}
    </svg>
  );
}
