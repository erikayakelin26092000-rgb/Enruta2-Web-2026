import { Database, KeyRound, ShieldCheck, Sparkles, TicketCheck } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: TicketCheck,
    title: "Ticket de un solo uso",
    text: "Cada ticket queda invalidado después de su redención. Escanearlo otra vez no funciona.",
    tile: "bg-cyan-400/10 text-cyan-300",
  },
  {
    icon: KeyRound,
    title: "Tokens dinámicos firmados",
    text: "JWT firmado con RS256, anclado al pasajero y a su asociación, con expiración automática de corta duración.",
    tile: "bg-violet-400/10 text-violet-300",
  },
  {
    icon: ShieldCheck,
    title: "Mecanismos anti-replay",
    text: "La redención rechaza reusos y escaneos fuera de ventana (ALREADY_USED, FUTURE_SCAN, STALE_SCAN), reduciendo el riesgo de fraude.",
    tile: "bg-emerald-400/10 text-emerald-300",
  },
  {
    icon: Database,
    title: "Saldo y datos aislados",
    text: "El saldo real vive en el servidor, nunca en el dispositivo. Row Level Security aísla los datos entre asociaciones.",
    tile: "bg-orange-400/10 text-orange-300",
  },
];

export default function Security() {
  return (
    <Section
      id="seguridad"
      label="Seguridad y protección"
      title={
        <>
          Tokens dinámicos con anti-replay.{" "}
          <span className="text-gradient">Sin promesas absolutas.</span>
        </>
      }
      lead="Preferimos explicar exactamente qué protegemos y cómo — incluyendo lo que aún podemos mejorar."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 90}>
            <article className="glass h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-7">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${it.tile}`}>
                <it.icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-5 text-base font-extrabold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{it.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-8 rounded-3xl border border-dashed border-violet-400/30 bg-violet-400/[0.04] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="text-base font-extrabold text-white">Hardening futuro: proof-of-possession</h3>
          </div>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            Hoy, un QR capturado <span className="font-semibold text-white">antes</span> de su redención podría intentar
            usarse por otra persona — el impacto máximo documentado es{" "}
            <span className="font-semibold text-white">un viaje individual</span> (140–168 Bs). Vincular el token al
            dispositivo del pasajero (<span className="font-mono text-cyan-300">proof-of-possession</span>) es el
            siguiente paso de hardening para reducir aún más ese riesgo residual.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
