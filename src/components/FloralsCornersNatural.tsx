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
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="-translate-x-8 -translate-y-8"
        >
          <Image
            src="/fondo/fondoarriba.png"
            alt=""
            width={520}
            height={520}
            priority
            unoptimized
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
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="translate-x-8 translate-y-8"
        >
          <Image
            src="/fondo/fondoabajo.png"
            alt=""
            width={520}
            height={520}
            unoptimized
            className="w-[260px] sm:w-[340px] opacity-80"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
