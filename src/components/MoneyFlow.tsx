import { Banknote, Landmark, Smartphone, UserRound, WifiOff } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useInView } from "../lib/hooks";
import { cn } from "../utils/cn";

const SPLIT = [
  {
    pct: 85,
    who: "Asociación",
    detail: "Queda en su cuenta bancaria: el dinero nunca pasa por Enrutados.",
    bar: "from-cyan-400 to-teal-400",
    text: "text-cyan-300",
  },
  {
    pct: 10,
    who: "Conductor / Colector",
    detail: "Dispersión automática de su comisión al cierre de caja de las 7:00 PM.",
    bar: "from-emerald-400 to-teal-400",
    text: "text-emerald-300",
  },
  {
    pct: 5,
    who: "Plataforma",
    detail: "Reinvertido en mantenimiento del sistema y capacitación.",
    bar: "from-violet-400 to-fuchsia-400",
    text: "text-violet-300",
  },
];

function SplitBar({ pct, who, detail, bar, text, delay }: (typeof SPLIT)[number] & { delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="glass rounded-2xl p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={cn("text-2xl font-extrabold sm:text-3xl", text)}>{pct}%</span>
          <span className="text-sm font-bold text-white sm:text-base">{who}</span>
        </div>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-[1200ms] ease-out", bar)}
          style={{ width: inView ? `${pct}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{detail}</p>
    </div>
  );
}

export default function MoneyFlow() {
  return (
    <Section
      id="dinero"
      label="Flujo del dinero"
      title={
        <>
          El dinero va directo a la asociación. <span className="text-gradient">Enrutados no lo toca.</span>
        </>
      }
      lead="El pasajero paga por Pago Móvil directamente a la cuenta bancaria de su asociación — o recarga en efectivo en taquilla. La plataforma nunca toca la masa monetaria."
    >
      {/* flow diagram */}
      <Reveal>
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <UserRound className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-white">Pasajero</p>
                <p className="text-xs text-slate-500">Recarga su saldo</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-xs font-bold text-cyan-200">
                <Smartphone className="h-3.5 w-3.5" />
                Pago Móvil
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">o</div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-2 text-xs font-bold text-emerald-200">
                <Banknote className="h-3.5 w-3.5" />
                Efectivo en taquilla
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-violet-400/25 bg-violet-400/[0.06] p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-400/10 text-violet-300">
                <Landmark className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-white">Cuenta bancaria de la asociación</p>
                <p className="text-xs text-slate-500">El destino final del dinero</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-4 text-center">
            <WifiOff className="h-4 w-4 shrink-0 text-slate-500" />
            <p className="text-[13px] text-slate-400">
              <span className="font-bold text-slate-300">Enrutados queda fuera del circuito del dinero:</span>{" "}
              solo registra operaciones y calcula la liquidación 85/10/5.
            </p>
          </div>
        </div>
      </Reveal>

      {/* split */}
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {SPLIT.map((s, i) => (
          <SplitBar key={s.who} {...s} delay={i * 180} />
        ))}
      </div>

      {/* closed loop note */}
      <Reveal delay={150}>
        <div className="mt-8 rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
            Importante · Naturaleza del saldo
          </p>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-slate-300">
            El saldo en la app del pasajero es un{" "}
            <span className="font-bold text-white">Ticket / Pasaje Prepagado de Bucle Cerrado</span> — igual que la
            tarjeta del Metro de Caracas. <span className="font-semibold text-amber-200">No es dinero electrónico ni depósito bancario</span>,
            porque el dinero ya pertenece a la asociación desde la recarga. Por eso, el modelo no requiere licencia SUDEBAN.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
