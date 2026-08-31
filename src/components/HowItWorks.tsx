import { ArrowRight, Bus, Download, ListChecks, QrCode, ScanLine, ShieldCheck, Smartphone, Timer, Wallet } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Download,
    title: "Descarga y registra",
    text: "Bajas la app, creas tu cuenta y listo. Sin trámites largos.",
  },
  {
    icon: Wallet,
    title: "Recarga tu saldo",
    text: "Por Pago Móvil a la cuenta de la asociación, o en efectivo en taquilla o kiosco.",
  },
  {
    icon: QrCode,
    title: "Genera tu ticket",
    text: "La app crea un QR dinámico firmado digitalmente, anclado a tu cuenta y tu asociación.",
  },
  {
    icon: Bus,
    title: "Aborda y viaja",
    text: "Muestras el QR al colector, él lo escanea y el viaje queda validado y registrado.",
  },
];

const STORY = [
  { icon: Smartphone, text: "María abre la app: tiene 5 viajes disponibles en su saldo." },
  { icon: Bus, text: "Llega la unidad y María muestra su código QR." },
  { icon: ScanLine, text: "El colector escanea: se descuenta 1 viaje, en ≤ 3 segundos." },
];

const BENEFITS = [
  { icon: Timer, title: "Rápido", text: "≤ 3 segundos por validación" },
  { icon: ShieldCheck, title: "Seguro", text: "Sin efectivo que perder o robar" },
  { icon: Wallet, title: "Bajo control", text: "Controlas exactamente tu gasto" },
  { icon: ListChecks, title: "Trazable", text: "Registro digital de cada viaje" },
];

export default function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      label="La propuesta"
      title={
        <>
          Cuatro pasos, <span className="text-gradient">un viaje más simple.</span>
        </>
      }
      lead="Para el pasajero, usar Enrutados es tan fácil como descargar una app, recargar saldo y mostrar un código."
    >
      {/* steps */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="glass group relative h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.06]">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-4xl font-extrabold text-white/[0.08] transition-colors group-hover:text-cyan-400/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-cyan-400/50 lg:block" />
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {/* María story */}
      <Reveal delay={150}>
        <div className="glass mt-8 rounded-3xl p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
            Un día con Enrutados — la historia de María
          </p>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {STORY.map((s, i) => (
              <div key={i} className="contents">
                <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <s.icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="text-sm leading-snug text-slate-300">{s.text}</p>
                </div>
                {i < STORY.length - 1 && (
                  <ArrowRight className="mx-auto hidden h-5 w-5 animate-pulse text-cyan-400/70 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* benefits */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 90} variant="zoom">
            <div className="glass flex h-full flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center">
              <b.icon className="h-5 w-5 text-cyan-300" />
              <div className="text-sm font-bold text-white">{b.title}</div>
              <div className="text-xs leading-snug text-slate-500">{b.text}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
