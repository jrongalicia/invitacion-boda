import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-200">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
          Invitación de boda
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
          Diego &amp; Estefanny
        </h1>

        <p className="mt-4 text-lg text-neutral-700 sm:text-xl">
          Nos encantaría que nos acompañes en este día tan especial.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/details"
            className="rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-md transition hover:opacity-90"
          >
            Ver detalles
          </Link>

          <Link
            href="/rsvp"
            className="rounded-2xl border border-neutral-900 bg-white px-6 py-3 text-neutral-900 shadow-md transition hover:bg-neutral-100"
          >
            Confirmar asistencia (RSVP)
          </Link>
        </div>
      </section>
    </main>
  );
}
