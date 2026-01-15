export default function RsvpPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Confirmar asistencia
        </h1>

        <p className="mt-3 text-neutral-700">
          Completa este formulario para confirmar tu asistencia.
        </p>

        <form className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Nombre completo
            </label>
            <input
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-800">
              ¿Asistirás?
            </label>
            <select className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900">
              <option value="yes">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-800">
              Cantidad de personas
            </label>
            <input
              type="number"
              min={1}
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
              placeholder="Ej: 2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-800">
              Mensaje (opcional)
            </label>
            <textarea
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
              placeholder="Escribe un mensaje para los novios..."
              rows={4}
            />
          </div>

          <button
            type="button"
            className="w-full rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
          >
            Enviar confirmación
          </button>
        </form>
      </section>
    </main>
  );
}
