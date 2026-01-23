"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHero({
  children,
  heightClass = "h-[440px]",
  strength = 0.12, // qué tan fuerte es el parallax
}: {
  children: React.ReactNode;
  heightClass?: string;
  strength?: number;
}) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (v) => -v * strength);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.92]);

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-white shadow-sm ${heightClass}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>

      {/* Overlay suave “vintage” */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/0" />
    </div>
  );
}
