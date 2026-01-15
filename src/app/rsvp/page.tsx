"use client";

import { useState } from "react";

export default function RsvpPage() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("yes");
  const [attendees, setAttendees] = useState(1);
  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          attending: attending === "yes",
          attendees,
          note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Error al enviar RSVP.");
        return;
      }

      setMessage("¡Gracias! Tu confirmación fue enviada.");
      setName("");
      setAttending("yes");
      setAttendees(1);
      setNote("");
    } catch (err) {
      setMessage("Error de conexión.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Confirmar asistencia
        </h1>

        <p className="mt-3 text-neutral-700">
          Completa este formulario para confirmar tu asistencia.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm"
        >
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Nombre completo
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-800">
              ¿Asistirás?
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
            >
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
              max={20}
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-800">
              Mensaje (opcional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
              placeholder="Escribe un mensaje para los novios..."
              rows={4}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar confirmación"}
          </button>

          {message && (
            <p className="text-center text-sm text-neutral-700">{message}</p>
          )}
        </form>
      </section>
    </main>
  );
}
