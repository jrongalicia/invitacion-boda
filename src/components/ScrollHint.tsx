"use client";

import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY < 10); // solo arriba
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
        <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
          Desliza
        </span>

        <span className="scroll-bounce text-neutral-700" aria-hidden>
          ↓
        </span>
      </div>

      <style jsx>{`
        .scroll-bounce {
          display: inline-block;
          animation: bounce 1.2s infinite ease-in-out;
          font-size: 18px;
          line-height: 1;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
