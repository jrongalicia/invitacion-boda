"use client";

import Image from "next/image";
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
          <Image
            src="/fondo/centro.png"
            alt=""
            width={800}
            height={220}
            priority
            className="h-auto w-full opacity-90"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
