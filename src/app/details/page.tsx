import Link from "next/link";

export default function DetailsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Detalles del evento
        </h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">Ceremonia</h2>
            <p className="mt-2 text-neutral-700">🕒 Hora: [HH:MM]</p>
            <p className="mt-1 text-neutral-700">📍 Lugar: [Nombre Iglesia]</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">Recepción</h2>
            <p className="mt-2 text-neutral-700">🕒 Hora: [HH:MM]</p>
            <p className="mt-1 text-neutral-700">📍 Lugar: [Nombre Salón]</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:col-span-2">
            <h2 className="text-xl font-semibold text-neutral-900">
              Código de vestimenta
            </h2>
            <p className="mt-2 text-neutral-700">👔 [Formal / Semi formal]</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:col-span-2">
            <h2 className="text-xl font-semibold text-neutral-900">Ubicación</h2>
            <p className="mt-2 text-neutral-700">
              Aquí pondremos un mapa de Google más adelante.
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          <Link
            href="/"
            className="rounded-2xl border border-neutral-900 bg-white px-6 py-3 text-neutral-900 shadow-sm transition hover:bg-neutral-100"
          >
            Volver
          </Link>

          <Link
            href="/rsvp"
            className="rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
          >
            Confirmar asistencia
          </Link>
        </div>
      </section>
    </main>
  );
}
