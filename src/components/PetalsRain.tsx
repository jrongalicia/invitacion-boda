"use client";

import { useEffect, useState } from "react";

export default function PetalsRain() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 6000); // duración
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${5 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
