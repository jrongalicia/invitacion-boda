import Link from "next/link";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import ParallaxHero from "@/components/ParallaxHero";


const EVENT = {
  couple: "Diego & Estefanny",
  dateISO: "2026-03-21T16:00:00-06:00",
  dateLabel: "21.03.26",
  quote:
    "Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos...",
  ceremony: {
    name: "Ceremonia Religiosa",
    place: "Parroquia del Carmen",
    time: "5:00 PM",
    address: "Dirección completa aquí",
    maps: "https://www.google.com/maps?q=14.6349,-90.5069",
  },
  reception: {
    name: "Recepción",
    place: "Córdoba Club",
    time: "7:00 PM",
    address: "Dirección completa aquí",
    maps: "https://www.google.com/maps?q=14.6349,-90.5069",
  },
  dressCode: "Vestimenta formal",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-md px-6 py-10 sm:max-w-lg">
        {/*<img src="/hero.jpg" className="h-full w-full object-cover" alt="Hero" />*/}
        <section className="text-center">
          <Reveal>
            <div className="mx-auto w-14 text-neutral-900">
              <Monogram />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-neutral-900">
              {EVENT.couple}
            </h1>
            <p className="mt-2 text-sm tracking-[0.35em] text-neutral-700">
              {EVENT.dateLabel}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 overflow-hidden rounded-[28px] p-2 shadow-sm">
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[2/4] overflow-hidden rounded-2xl">
                  <Image src="/portada/portada_estefanny.png" alt="left" fill className="object-cover" priority/>
                </div>

                <div className="relative aspect-[2/4] overflow-hidden rounded-2xl">
                  <Image src="/portada/portada_centro.png" alt="center" fill className="object-cover" priority />
                </div>

                <div className="relative aspect-[2/4] overflow-hidden rounded-2xl">
                  <Image src="/portada/portada_diego.png" alt="right" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </Reveal>

        </section>

        {/* FRASE */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                Invitación
              </p>
              <p className="mt-5 text-sm leading-6 text-neutral-800">
                {EVENT.quote}
              </p>

              <div className="mt-7 h-px bg-neutral-200" />

              <div className="mt-7">
                
                <div className="mt-4">
                  <Countdown dateISO={EVENT.dateISO} />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CEREMONIA */}
        <section className="mt-10">
          <Reveal>
            <Card
              icon={<ChurchIcon />}
              title={EVENT.ceremony.place}
              subtitle={EVENT.ceremony.name}
              meta={[
                { k: "Hora", v: EVENT.ceremony.time },
                { k: "Dirección", v: EVENT.ceremony.address },
              ]}
              buttonLabel="Ver ubicación"
              buttonHref={EVENT.ceremony.maps}
            />
          </Reveal>
        </section>

        {/* RECEPCIÓN */}
        <section className="mt-6">
          <Reveal>
            <Card
              icon={<ToastIcon />}
              title={EVENT.reception.place}
              subtitle={EVENT.reception.name}
              meta={[
                { k: "Hora", v: EVENT.reception.time },
                { k: "Dirección", v: EVENT.reception.address },
              ]}
              buttonLabel="Ver ubicación"
              buttonHref={EVENT.reception.maps}
            />
          </Reveal>
        </section>

        {/* PROGRAMA */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 shadow-sm">
              <p className="text-center font-serif text-2xl font-semibold text-neutral-900">
                Programa de la boda
              </p>

              <div className="mt-6">
                <Timeline
                  items={[
                    { time: "5:00 PM", label: "Ceremonia religiosa", icon: "⛪" },
                    { time: "7:00 PM", label: "Recepción", icon: "🥂" },
                    { time: "9:00 PM", label: "Brindis", icon: "🍾" },
                    { time: "9:30 PM", label: "Vals esposos", icon: "💍" },
                    { time: "12:00 AM", label: "Cena", icon: "🍽️" },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* VESTIMENTA */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-neutral-900">
                Vestimenta
              </p>
              <p className="mt-2 text-sm text-neutral-700">{EVENT.dressCode}</p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-6 w-6 rounded-full bg-black" />
                <span className="h-6 w-6 rounded-full bg-neutral-200" />
                <span className="h-6 w-6 rounded-full bg-white ring-1 ring-neutral-200" />
              </div>

              <p className="mt-5 text-xs text-neutral-600">
                (Aquí puedes indicar colores a evitar / recomendados)
              </p>
            </div>
          </Reveal>
        </section>

        {/* CTA (por ahora sin RSVP) */}
        <section className="mt-10 pb-14">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-neutral-900">
                ¡Te esperamos!
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Gracias por acompañarnos en este momento tan importante.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/details"
                  className="rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
                >
                  Ver más detalles
                </Link>

                <a
                  className="rounded-2xl border border-neutral-900 bg-white px-6 py-3 text-neutral-900 shadow-sm transition hover:bg-neutral-100"
                  href={`https://wa.me/50200000000?text=${encodeURIComponent(
                    "Hola! Tengo una duda sobre la boda 🙂"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}

function Card({
  icon,
  title,
  subtitle,
  meta,
  buttonLabel,
  buttonHref,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  meta: { k: string; v: string }[];
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <div className="rounded-[28px] bg-white px-6 py-8 shadow-sm">
      <div className="flex items-center justify-center">{icon}</div>
      <p className="mt-4 text-center font-serif text-2xl font-semibold text-neutral-900">
        {title}
      </p>
      <p className="mt-1 text-center text-xs uppercase tracking-[0.35em] text-neutral-600">
        {subtitle}
      </p>

      <div className="mt-6 space-y-3">
        {meta.map((m) => (
          <div key={m.k} className="grid grid-cols-12 gap-3 text-sm">
            <div className="col-span-3 font-medium text-neutral-700">{m.k}</div>
            <div className="col-span-9 text-neutral-800">{m.v}</div>
          </div>
        ))}
      </div>

      <a
        href={buttonHref}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:opacity-90"
      >
        {buttonLabel}
      </a>
    </div>
  );
}

function Timeline({
  items,
}: {
  items: { time: string; label: string; icon: string }[];
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-1 h-full w-px bg-neutral-200" />
      <div className="space-y-5">
        {items.map((it) => (
          <div key={it.time} className="relative">
            <div className="absolute -left-[2px] top-2 h-4 w-4 rounded-full bg-neutral-900" />
            <div className="rounded-2xl bg-neutral-50 px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                  {it.time}
                </span>
                <span className="text-sm">{it.icon}</span>
              </div>
              <div className="mt-1 font-medium text-neutral-900">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Monogram() {
  return (
    <span className="font-script text-4xl leading-none text-neutral-900">
  ED
</span>

  );
}



function ChurchIcon() {
  return <div className="text-3xl">⛪</div>;
}
function ToastIcon() {
  return <div className="text-3xl">🥂</div>;
}
