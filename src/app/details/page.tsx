import Link from "next/link";
import { Section } from "@/components/Section";

const EVENT = {
  couple: "Diego & Estefanny",
  dateISO: "2026-03-21T16:00:00-06:00",
  ceremony: {
    time: "4:00 PM",
    place: "[Iglesia / Lugar de ceremonia]",
    address: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    mapsUrl: "https://share.google/SrcTmKV6ILgIPr7dY", 
  },
  reception: {
    time: "6:00 PM",
    place: "[Salón / Recepción]",
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    mapsUrl: "https://share.google/SrcTmKV6ILgIPr7dY",
  },
  dressCode: "Formal / Semiformal",
  notes: [
    "Puntualidad: te recomendamos llegar 15 minutos antes.",
    "Parqueo: Si",
  ],
  gifts: {
    title: "Mesa de regalos",
    text: "Tu presencia es nuestro mejor regalo. Si deseas apoyarnos, aquí puedes encontrar opciones:",
    links: [
      { label: "Cemaco", url: "https://www.cemaco.com/televisor-smart-85---max-qled-2026-1193422b/p" },
      { label: "Transferencia bancaria", url: "https://example.com" },
    ],
  },
  contact: {
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappUrl: "https://wa.me/50258542180",
  },
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function DetailsPage() {
  const date = new Date(EVENT.dateISO);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Detalles del evento
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-neutral-900 sm:text-5xl">
            {EVENT.couple}
          </h1>
          <p className="mt-2 text-neutral-700">
            {date.toLocaleString("es-GT", { dateStyle: "full", timeStyle: "short" })}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-2xl border border-neutral-900 bg-white px-6 py-3 text-neutral-900 shadow-sm transition hover:bg-neutral-100"
            >
              Volver a inicio
            </Link>

            <a
              href={buildGoogleCalendarUrl({
                title: `Boda - ${EVENT.couple}`,
                details: "Celebración de boda",
                location: EVENT.reception.address,
                startISO: EVENT.dateISO,
                durationMinutes: 240,
              })}
              className="rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              Agregar a Google Calendar
            </a>
          </div>
        </div>
      </header>

      {/* Ceremonia */}
      <Section title="Ceremonia" subtitle="Información de la ceremonia">
        <InfoCard
          title={EVENT.ceremony.place}
          items={[
            { k: "Hora", v: EVENT.ceremony.time },
            { k: "Dirección", v: EVENT.ceremony.address },
          ]}
          actionLabel="Ver en Google Maps"
          actionUrl={EVENT.ceremony.mapsUrl}
        />
      </Section>

      {/* Recepción */}
      <Section title="Recepción" subtitle="Información de la recepción">
        <InfoCard
          title={EVENT.reception.place}
          items={[
            { k: "Hora", v: EVENT.reception.time },
            { k: "Dirección", v: EVENT.reception.address },
          ]}
          actionLabel="Ver en Google Maps"
          actionUrl={EVENT.reception.mapsUrl}
        />
      </Section>

      {/* Itinerario */}
      <Section title="Itinerario" subtitle="Horarios aproximados">
        <div className="grid gap-4 sm:grid-cols-2">
          <TimelineItem time={EVENT.ceremony.time} title="Ceremonia" desc={EVENT.ceremony.place} />
          <TimelineItem time="5:15 PM" title="Fotos" desc="Sesión de fotos (familia/amigos)" />
          <TimelineItem time={EVENT.reception.time} title="Recepción" desc={EVENT.reception.place} />
          <TimelineItem time="8:00 PM" title="Cena / Brindis" desc="Celebración" />
        </div>
      </Section>

      {/* Dress code */}
      <Section title="Código de vestimenta" subtitle="Para una noche elegante">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-neutral-800">
            <span className="font-medium">Dress code:</span> {EVENT.dressCode}
          </p>
          <p className="mt-2 text-neutral-700">
            Recomendación: colores neutros / evitar blanco (si aplica).
          </p>
        </div>
      </Section>

      {/* Notas */}
      <Section title="Recomendaciones" subtitle="Para que todo fluya perfecto">
        <ul className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
          {EVENT.notes.map((n) => (
            <li key={n} className="text-neutral-700">
              • {n}
            </li>
          ))}
        </ul>
      </Section>

      {/* Regalos */}
      <Section title={EVENT.gifts.title} subtitle={EVENT.gifts.text}>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row">
            {EVENT.gifts.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-900 bg-white px-6 py-3 text-neutral-900 shadow-sm transition hover:bg-neutral-100"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Contacto */}
      <Section title="Contacto" subtitle="¿Dudas? Escríbenos">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <a
            href={EVENT.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
          >
            {EVENT.contact.whatsappLabel}
          </a>
          <p className="mt-3 text-sm text-neutral-600">
            Cualquier duda acerca del evento puedes contactarnos por whatsapp
          </p>
        </div>
      </Section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center text-sm text-neutral-600">
          Con cariño, {EVENT.couple} 
        </div>
      </footer>
    </main>
  );
}

function InfoCard({
  title,
  items,
  actionLabel,
  actionUrl,
}: {
  title: string;
  items: { k: string; v: string }[];
  actionLabel: string;
  actionUrl: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="font-serif text-2xl font-semibold text-neutral-900">{title}</h3>
      <dl className="mt-4 space-y-2">
        {items.map((it) => (
          <div key={it.k} className="grid grid-cols-12 gap-3">
            <dt className="col-span-3 text-sm font-medium text-neutral-700">{it.k}</dt>
            <dd className="col-span-9 text-sm text-neutral-800">{it.v}</dd>
          </div>
        ))}
      </dl>
      <a
        href={actionUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
      >
        {actionLabel}
      </a>
    </div>
  );
}

function TimelineItem({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">{time}</p>
      <h4 className="mt-2 font-serif text-xl font-semibold text-neutral-900">{title}</h4>
      <p className="mt-1 text-neutral-700">{desc}</p>
    </div>
  );
}

function buildGoogleCalendarUrl(params: {
  title: string;
  details: string;
  location: string;
  startISO: string;
  durationMinutes: number;
}) {
  const start = new Date(params.startISO);
  const end = new Date(start.getTime() + params.durationMinutes * 60 * 1000);

  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z");

  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", params.title);
  url.searchParams.set("details", params.details);
  url.searchParams.set("location", params.location);
  url.searchParams.set("dates", `${fmt(start)}/${fmt(end)}`);
  return url.toString();
}
