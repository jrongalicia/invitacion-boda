"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloralsCornersNatural() {
  return (
    <>
      {/* TOP LEFT */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-0"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="-translate-x-8 -translate-y-8"
          animate={{
            y: [0, 16, -6, 12, 0],
            x: [0, 6, -4, 5, 0],
            rotate: [0, 1.5, -1.2, 1.2, 0],
            scale: [1, 1.02, 0.99, 1.015, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/fondo/fondoarriba.png"
            alt=""
            width={520}
            height={520}
            priority
            className="w-[260px] sm:w-[340px] opacity-90"
          />
        </motion.div>
      </motion.div>

      {/* BOTTOM RIGHT */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed bottom-0 right-0 z-0"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
      >
        <motion.div
          className="translate-x-8 translate-y-8"
          animate={{
            y: [0, -18, 8, -12, 0],
            x: [0, -7, 5, -6, 0],
            rotate: [0, -1.6, 1.1, -1.2, 0],
            scale: [1, 1.015, 0.99, 1.02, 1],
          }}
          transition={{
            duration: 13.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/fondo/fondoabajo.png"
            alt=""
            width={520}
            height={520}
            className="w-[260px] sm:w-[340px] opacity-80"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
