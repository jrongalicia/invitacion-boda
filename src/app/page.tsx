import Link from "next/link";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import ParallaxHero from "@/components/ParallaxHero";
import FloralsCorners from "@/components/FloralsCorners";
import FloralDivider from "@/components/FloralDivider";
import FloralsCornersNatural from "@/components/FloralsCornersNatural";
import PetalsRain from "@/components/PetalsRain";
import ScrollHint from "@/components/ScrollHint";




const EVENT = {
  couple: "Diego & Estefanny",
  dateISO: "2026-03-21T16:30:00-06:00",
  dateLabel: "21.03.26",
  quote: {
    highlight:
      "El amor nos unió y la vida nos regaló una historia que queremos celebrar.",
    text:
      "Nada nos haría más felices que compartir este día tan especial contigo, porque los momentos más hermosos se viven mejor junto a quienes amamos.",
  },
  weddingInvitation: {
    text: "Tenemos el honor de invitarles a nuestro enlace matrimonial con la bendición de Dios y el amor de nuestros padres, quienes han sido nuestro ejemplo y apoyo incondicional:"
  },
  ceremony: {
    name: "Ceremonia Religiosa",
    place: {
      main: "Hacienda los volcanes",
      detail: "Cúpula",
    },
    time: "5:00 PM",
    address: {
      main: "Hacienda los volcanes",
      detail:
        "km. 30, Granja #37, Ruta de Antigua Guatemala hacia Bárcenas, Santa Lucía Milpas Altas, Sacatepéquez",
    },
    maps: "https://maps.app.goo.gl/eULnkmWh2Uk85ch19",
  },
  reception: {
    name: "Recepción",
    place: {
      main: "Hacienda los volcanes",
      detail: "Salón volcán Acatenango",
    },
    time: "6:45 PM",
    address: {
      main: "Hacienda los volcanes",
      detail:
        "km. 30, Granja #37, Ruta de Antigua Guatemala hacia Bárcenas, Santa Lucía Milpas Altas, Sacatepéquez",
    },
    maps: "https://maps.app.goo.gl/eULnkmWh2Uk85ch19",
  },
  dressCode: "",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollHint />
      <PetalsRain />
      <FloralsCornersNatural />
      <div className="relative z-10 mx-auto max-w-md px-6 py-10 sm:max-w-lg">
        {/*<img src="/hero.jpg" className="h-full w-full object-cover" alt="Hero" />  mx-auto max-w-md px-6 py-10 sm:max-w-lg*/}
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
            <div className="mt-8 overflow-hidden rounded-[28px] p-4 shadow-sm">
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[2/4] overflow-hidden rounded-2xl">
                  <Image src="/portada/portada_estefanny.PNG" alt="left" fill className="object-cover" priority />
                </div>

                <div className="object-cover scale-[1.1] object-center overflow-hidden rounded-2xl">
                  <Image src="/portada/portada_centro.PNG" alt="center" fill className="object-cover" priority />
                </div>

                <div className="relative aspect-[2/4] overflow-hidden rounded-2xl">
                  <Image src="/portada/portada_diego.PNG" alt="right" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </Reveal>

        </section>

        {/* FRASE */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="mt-5 text-sm leading-6 text-neutral-800">
                <strong className="block font-semibold">
                  {EVENT.quote.highlight}
                </strong>
                <span className="block mt-2">
                  {EVENT.quote.text}
                </span>
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

        {/* INVITACIÓN */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="text-sm leading-6 text-neutral-800">
                <span className="block ">
                  {EVENT.weddingInvitation.text}
                </span>
              </p>

              <div className="mt-7 h-px bg-neutral-200" />

              <div className="mt-7 space-y-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    Padres del novio
                  </p>
                  <p className="font-serif font-medium text-base sm:text-lg text-neutral-900">
                    Edgar Rolando Ibañez Chávez
                  </p>
                  <p className="font-serif font-medium text-base sm:text-lg text-neutral-900">
                    Norma Edith Trujillo Peralta
                  </p>
                </div>

                <OrnateDivider className="my-5" stroke="#000000" />

                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    Padres de la novia
                  </p>
                  <p className="font-serif font-medium text-base sm:text-lg text-neutral-900">
                    Carlos Francisco Solís Ramírez
                  </p>
                  <p className="font-serif font-medium text-base sm:text-lg text-neutral-900">
                    Brenda Lissette Higueros Paz
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>


        {/* CEREMONIA */}
        <section className="mt-10">
          <Reveal>
            <VenueCard
              icon="⛪"
              title={EVENT.ceremony.place}
              subtitle={EVENT.ceremony.name}
              time={EVENT.ceremony.time}
              address={EVENT.ceremony.address}
              href={EVENT.ceremony.maps}
              buttonLabel="Ver ubicación"
            />
          </Reveal>
        </section>

        {/* RECEPCION */}
        <section className="mt-10">
          <Reveal>
            <VenueCard
              icon="🥂"
              title={EVENT.reception.place}
              subtitle={EVENT.reception.name}
              time={EVENT.reception.time}
              address={EVENT.reception.address}
              href={EVENT.reception.maps}
              buttonLabel="Ver ubicación"
            />
          </Reveal>
        </section>

        <section className="mt-10">
          <FloralDivider />
        </section>

        {/* COLLAGE DE FOTOS */}
        <section className="mt-12">
          <Reveal>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative h-[180px] overflow-hidden rounded-2xl">
                <Image src="/mosaico/mosaico9.JPG" alt="" fill className="object-cover" />
              </div>

              <div className="relative h-[240px] overflow-hidden rounded-2xl">
                <Image src="/mosaico/mosaico2.JPG" alt="" fill className="object-cover" />
              </div>

              <div className="relative h-[180px] overflow-hidden rounded-2xl">
                <Image src="/mosaico/mosaico3.JPG" alt="" fill className="object-cover" />
              </div>

              <div className="relative col-span-2 h-[220px] overflow-hidden rounded-2xl">
                <Image src="/mosaico/mosaico7.JPG" alt="" fill className="object-cover" />
              </div>

              <div className="relative h-[220px] overflow-hidden rounded-2xl">
                <Image src="/mosaico/mosaico11.JPG" alt="" fill className="object-cover" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ITINERARIO */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-10 shadow-sm">
              <p className="mb-10 text-center font-serif text-2xl font-semibold text-neutral-900">
                Itinerario
              </p>

              <TimelineVertical
                items={[
                  { time: "5:00 PM", label: "Ceremonia religiosa", icon: "⛪" },
                  { time: "6:00 PM", label: "Snack bar", icon: "🍸" },
                  { time: "7:00 PM", label: "Ingreso de los novios", icon: "💍" },
                  { time: "7:15 PM", label: "Brindis", icon: "🥂" },
                  { time: "7:30 PM", label: "Cena", icon: "🍽️" },
                  { time: "8:00 PM", label: "Hora loca", icon: "🎉" },
                  { time: "10:30 PM", label: "Pastel", icon: "🍰" },
                  { time: "11:00 PM", label: "Despedida de los novios", icon: "✨" },
                ]}
              />
            </div>
          </Reveal>
        </section>

        {/* VESTIMENTA */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-neutral-900">
                Vestimenta formal
              </p>

              <p className="mt-2 text-sm text-neutral-700">
                {EVENT.dressCode}
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-neutral-600">
                Con mucho amor, les pedimos <strong>evitar</strong> los siguientes colores para mantener la armonía y elegancia de este día tan especial.
              </p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-6 w-6 rounded-full bg-black" />
                <span className="h-6 w-6 rounded-full bg-neutral-300" />
                <span className="h-6 w-6 rounded-full bg-white ring-1 ring-neutral-300" />
                <span className="h-6 w-6 rounded-full bg-red-700" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* REGALOS */}
        <section className="mt-10">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-10 text-center shadow-sm">
              {/* Icono */}
              <div className="mt-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-50 text-2xl">
                  🎁
                </div>
              </div>

              <p className="font-serif text-2xl font-semibold text-neutral-900">
                Mesa de regalos
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-700">
                <span className="block">
                  Su presencia es nuestro mayor regalo y lo más valioso para nosotros.
                </span>
                <span className="block mt-2">
                  Si desean tener un detalle adicional, lo recibiremos con mucho cariño.
                </span>
              </p>

              {/* Botón Cemaco */}
              <a
                href="https://www.cemaco.com/list/BODADIEGOYESTEFANNY21032026"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-6 py-3 font-medium shadow-sm transition hover:bg-neutral-50 active:scale-[0.99]"
                style={{
                  borderColor: "#BFA76A", // dorado suave
                  color: "#6B5E2E",
                }}
              >
                <GiftIcon className="h-5 w-5" />
                Ver lista de regalos
              </a>
            </div>
          </Reveal>
        </section>



        {/* CONFIRMACION */}
        <section className="mt-10 pb-14">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-neutral-900">
                Confirmación
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Con mucho cariño, les pedimos confirmar su asistencia escribiéndonos por WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/50258542180?text=${encodeURIComponent(
                    "Hola 💕 Con mucha ilusión confirmo mi asistencia a la boda de Diego & Estefanny. ¡Gracias por hacernos parte de este día tan especial!"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border bg-white px-6 py-3 shadow-sm transition hover:bg-neutral-50 active:scale-[0.99]"
                  style={{ borderColor: "#25D366", color: "#25D366" }}
                >
                  <span className="inline-flex items-center justify-center gap-3">
                    <WhatsAppIcon className="h-5 w-5" />
                    Confirmar con Estefanny
                  </span>
                </a>
                <a
                  href={`https://wa.me/50230128382?text=${encodeURIComponent(
                    "Hola 💕 Con mucha ilusión confirmo mi asistencia a la boda de Diego & Estefanny. ¡Gracias por hacernos parte de este día tan especial!"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border bg-white px-6 py-3 shadow-sm transition hover:bg-neutral-50 active:scale-[0.99]"
                  style={{ borderColor: "#25D366", color: "#25D366" }}
                >
                  <span className="inline-flex items-center justify-center gap-3">
                    <WhatsAppIcon className="h-5 w-5" />
                    Confirmar con Diego
                  </span>
                </a>
              </div>

            </div>
          </Reveal>
        </section>

        {/* DESPEDIDA */}
        <section className="">
          <Reveal>
            <div className="rounded-[28px] bg-white px-6 py-8 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-neutral-900">
                ¡Te esperamos!
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                ¡Los esperamos con el corazón lleno de amor!
                Gracias por acompañarnos en este momento tan importante de nuestras vidas.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
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

function TimelineVertical({
  items,
}: {
  items: { time: string; label: string; icon: string }[];
}) {
  return (
    <div className="relative mx-auto max-w-md">
      {/* Línea central */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-300" />

      <div className="space-y-10">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={item.time} className="relative flex items-center">
              {/* Lado izquierdo */}
              <div className={`w-1/2 ${isLeft ? "pr-6 text-right" : "opacity-0"}`}>
                {isLeft && (
                  <div>
                    <p className="text-xs tracking-[0.25em] text-neutral-600">
                      {item.time}
                    </p>
                    <p className="mt-1 font-serif text-neutral-900">
                      {item.label}
                    </p>
                  </div>
                )}
              </div>

              {/* Punto central */}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                <span className="text-sm">{item.icon}</span>
              </div>

              {/* Lado derecho */}
              <div className={`w-1/2 ${!isLeft ? "pl-6 text-left" : "opacity-0"}`}>
                {!isLeft && (
                  <div>
                    <p className="text-xs tracking-[0.25em] text-neutral-600">
                      {item.time}
                    </p>
                    <p className="mt-1 font-serif text-neutral-900">
                      {item.label}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VenueCard({
  icon,
  title,
  subtitle,
  time,
  address,
  href,
  buttonLabel,
}: {
  icon: string;
  title: { main: string; detail: string };
  subtitle: string;
  time: string;
  address: { main: string; detail: string };
  href: string;
  buttonLabel: string;
}) {
  return (
    <div className="rounded-[28px] bg-white px-6 py-10 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-50 text-2xl">
        {icon}
      </div>

      {/* LUGAR (negrita + salto) */}
      <p className="mt-5 font-serif text-2xl text-neutral-900">
        <span className="block font-semibold">{title.main}</span>
        <span className="block mt-1 text-base font-normal text-neutral-700">
          {title.detail}
        </span>
      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-600">
        {subtitle}
      </p>

      <div className="mx-auto mt-7 max-w-sm space-y-4">
        <div className="rounded-2xl bg-neutral-50 px-5 py-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-600">
            Hora
          </p>
          <p className="mt-1 font-serif text-lg text-neutral-900">{time}</p>
        </div>

        <div className="rounded-2xl bg-neutral-50 px-5 py-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-600">
            Dirección
          </p>

          {/* DIRECCIÓN (negrita + salto) */}
          <p className="mt-1 text-sm leading-6 text-neutral-800">
            <span className="block font-medium">{address.main}</span>
            <span className="block mt-1 text-neutral-700">{address.detail}</span>
          </p>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-6 py-3 font-medium shadow-sm transition hover:bg-neutral-50 active:scale-[0.99]"
        style={{ borderColor: "#BFA76A", color: "#6B5E2E" }}
      >
        {icon === "⛪" ? (
          <ChurchLocationIcon className="h-5 w-5" />
        ) : (
          <ReceptionIcon className="h-5 w-5" />
        )}
        {buttonLabel}
      </a>
    </div>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="#25D366"
    >
      <path d="M19.11 17.44c-.28-.14-1.64-.81-1.89-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.91.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.59.59.67.21 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.54-.32z" />
      <path d="M26.67 5.33C24.01 2.67 20.52 1.2 16.76 1.2 9.1 1.2 2.87 7.43 2.87 15.09c0 2.45.64 4.84 1.86 6.94L2.76 30.8l8.97-1.93c2.04 1.11 4.34 1.69 6.7 1.69h.01c7.66 0 13.89-6.23 13.89-13.89 0-3.76-1.47-7.25-4.13-9.91zM18.43 28.2h-.01c-2.13 0-4.21-.57-6.02-1.64l-.43-.25-5.33 1.15 1.13-5.19-.28-.45c-1.18-1.88-1.8-4.04-1.8-6.23 0-6.33 5.15-11.49 11.49-11.49 3.07 0 5.95 1.2 8.12 3.37 2.17 2.17 3.37 5.05 3.37 8.12 0 6.33-5.15 11.49-11.24 11.61z" />
    </svg>
  );
}


function GiftIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M3 12h18" />
      <path d="M12 8v13" />
      <path d="M7.5 8c-1.5 0-2.5-1-2.5-2.2C5 4.2 6.3 3 8 3c2 0 4 2.5 4 5" />
      <path d="M16.5 8c1.5 0 2.5-1 2.5-2.2C19 4.2 17.7 3 16 3c-2 0-4 2.5-4 5" />
    </svg>
  );
}

function ChurchLocationIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v6" />
      <path d="M9 5h6" />
      <path d="M5 10l7-5 7 5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function ReceptionIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3v6a4 4 0 0 0 8 0V3" />
      <path d="M6 3h12" />
      <path d="M12 13v7" />
      <path d="M8 20h8" />
    </svg>
  );
}

function OrnateDivider({
  className = "my-6",
  stroke = "#BFA76A",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 120"
        className="mx-auto h-7 w-72 sm:w-96"
        fill="none"
      >
        {/* Línea principal */}
        <path
          d="M180 60 H1020"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* Ornamento central (tipo flor/diamante) */}
        <path
          d="M600 46
             C608 54, 608 66, 600 74
             C592 66, 592 54, 600 46 Z"
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <path
          d="M586 60
             C594 52, 606 52, 614 60
             C606 68, 594 68, 586 60 Z"
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* Ornamentos laterales pequeños */}
        {[
          { x: 390 },
          { x: 810 },
        ].map((o, i) => (
          <g key={i} opacity="0.95">
            <path
              d={`M${o.x} 52 L${o.x + 8} 60 L${o.x} 68 L${o.x - 8} 60 Z`}
              stroke={stroke}
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <path
              d={`M${o.x - 14} 60 H${o.x - 8}`}
              stroke={stroke}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d={`M${o.x + 8} 60 H${o.x + 14}`}
              stroke={stroke}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Rizo izquierdo (como la imagen) */}
        <path
          d="M180 60
             C150 40, 120 40, 120 60
             C120 80, 150 80, 180 60"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <path
          d="M150 60
             C130 50, 130 30, 155 28
             C140 38, 145 52, 160 56"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <path
          d="M150 60
             C130 70, 130 90, 155 92
             C140 82, 145 68, 160 64"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* Rizo derecho (espejo) */}
        <path
          d="M1020 60
             C1050 40, 1080 40, 1080 60
             C1080 80, 1050 80, 1020 60"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <path
          d="M1050 60
             C1070 50, 1070 30, 1045 28
             C1060 38, 1055 52, 1040 56"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <path
          d="M1050 60
             C1070 70, 1070 90, 1045 92
             C1060 82, 1055 68, 1040 64"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}



