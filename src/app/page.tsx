import Image from "next/image";
import Link from "next/link";
import Countdown from "../components/Countdown";


export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_55%),linear-gradient(to_bottom,#ffffff,#f5f5f5)]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Nuestra de boda
        </p>


        <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
          Diego &amp; Estefanny
        </h1>

        <p className="mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg">
          Con alegría queremos invitarte a celebrar con nosotros este día tan especial.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/details"
            className="rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-md transition hover:opacity-90"
          >
            Ver detalles del evento
          </Link>

          
        </div>
        
        <div id="countdown" className="mt-12 w-full max-w-xl">
          <Countdown dateISO="2026-03-21T16:00:00-06:00" />
        </div>


      </div>
    </main>
  );
}


/*
<a
            href="#countdown"
            className="rounded-2xl border border-neutral-900 bg-white px-6 py-3 text-neutral-900 shadow-md transition hover:bg-neutral-100"
          >
            Ver cuenta regresiva
          </a>
*/