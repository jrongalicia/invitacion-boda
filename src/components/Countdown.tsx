"use client";

import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function getDiff(target: Date) {
  const now = new Date();
  const ms = target.getTime() - now.getTime();

  const isPast = ms <= 0;
  const abs = Math.max(0, ms);

  const totalSeconds = Math.floor(abs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { isPast, days, hours, minutes, seconds };
}

export default function Countdown({ dateISO }: { dateISO: string }) {
  const target = useMemo(() => new Date(dateISO), [dateISO]);
  const [diff, setDiff] = useState(() => getDiff(target));

  useEffect(() => {
    const id = setInterval(() => setDiff(getDiff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
        Cuenta regresiva
      </p>

      <p className="mt-2 font-serif text-2xl font-semibold text-neutral-900 sm:text-3xl">
        {diff.isPast ? "¡Hoy es el gran día! " : "Falta poco "}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Días" value={String(diff.days)} />
        <Stat label="Horas" value={pad2(diff.hours)} />
        <Stat label="Min" value={pad2(diff.minutes)} />
        <Stat label="Seg" value={pad2(diff.seconds)} />
      </div>

      <p className="mt-6 text-sm text-neutral-700">
        {target.toLocaleString("es-GT", { dateStyle: "full", timeStyle: "short" })}
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
      <div className="font-serif text-3xl font-semibold text-neutral-900">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-600">
        {label}
      </div>
    </div>
  );
}
