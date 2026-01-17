import { prisma } from "@/lib/prisma";

export const runtime = "nodejs"; 
export const dynamic = "force-dynamic"; // evita static rendering
export const revalidate = 0; // no cache

function formatDate(d: Date) {
  try {
    return new Intl.DateTimeFormat("es-GT", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Guatemala",
    }).format(d);
  } catch {
    return d.toISOString();
  }
}

export default async function AdminPage() {
  const rsvps = await prisma.rsvp.findMany({
    orderBy: { createdAt: "desc" },
  });

  const totalConfirmados = rsvps
    .filter((x) => x.attending)
    .reduce((acc, x) => acc + x.attendees, 0);

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Panel de Confirmaciones (Admin)
        </h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">Total RSVPs</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">
              {rsvps.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">Confirmaciones (Sí)</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">
              {rsvps.filter((x) => x.attending).length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">Total asistentes</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">
              {totalConfirmados}
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-100 text-neutral-700">
                <tr>
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Asiste</th>
                  <th className="px-4 py-3">Personas</th>
                  <th className="px-4 py-3">Mensaje</th>
                  <th className="px-4 py-3">Fecha</th>
                </tr>
              </thead>

              <tbody>
                {rsvps.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-10 text-center text-neutral-600"
                    >
                      No hay confirmaciones todavía.
                    </td>
                  </tr>
                ) : (
                  rsvps.map((r) => (
                    <tr key={r.id} className="border-t">
                      <td className="px-4 py-3 font-medium text-neutral-900">
                        {r.name}
                      </td>
                      <td className="px-4 py-3">
                        {r.attending ? "Sí" : "No"}
                      </td>
                      <td className="px-4 py-3">{r.attendees}</td>
                      <td className="px-4 py-3 text-neutral-700">
                        {r.note || "-"}
                      </td>
                      <td className="px-4 py-3 text-neutral-700">
                        {formatDate(r.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
