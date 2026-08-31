import { Coins, EyeOff, MapPin, ReceiptText, Timer, Wallet } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const PROBLEMS = [
  {
    icon: Wallet,
    title: "Efectivo, siempre",
    text: "Llevar billetes sueltos para pagar el pasaje es una carga diaria del pasajero.",
    tag: "Pasajero",
    tagClass: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    iconClass: "bg-cyan-400/10 text-cyan-300",
  },
  {
    icon: Coins,
    title: "Cambio exacto",
    text: "Buscar suelto demora el abordaje y genera fricción dentro de la unidad.",
    tag: "Pasajero",
    tagClass: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    iconClass: "bg-cyan-400/10 text-cyan-300",
  },
  {
    icon: Timer,
    title: "Tiempo perdido",
    text: "Cada cobro manual hace el abordaje más lento para todos los que esperan.",
    tag: "Operación",
    tagClass: "bg-orange-400/10 text-orange-300 border-orange-400/20",
    iconClass: "bg-orange-400/10 text-orange-300",
  },
  {
    icon: ReceiptText,
    title: "Sin comprobante",
    text: "El pasajero viaja sin registro ni respaldo digital ante cualquier reclamo.",
    tag: "Pasajero",
    tagClass: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    iconClass: "bg-cyan-400/10 text-cyan-300",
  },
  {
    icon: EyeOff,
    title: "Recaudación opaca",
    text: "La asociación no sabe con certeza cuánto se recauda realmente en cada unidad.",
    tag: "Asociación",
    tagClass: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    iconClass: "bg-violet-400/10 text-violet-300",
  },
  {
    icon: MapPin,
    title: "Unidades invisibles",
    text: "No hay forma simple de saber dónde está la unidad ni cuánto falta para que llegue.",
    tag: "Ecosistema",
    tagClass: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    iconClass: "bg-emerald-400/10 text-emerald-300",
  },
];

export default function Problem() {
  return (
    <Section
      id="problema"
      label="El problema cotidiano"
      title={
        <>
          El problema no es solo del pasajero. <span className="text-gradient">Es del ecosistema completo.</span>
        </>
      }
      lead="Cada día, pasajeros, conductores y asociaciones pierden tiempo, dinero e información por operar en efectivo y papel."
      className="before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-2/3 before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
              <div className="flex items-start justify-between">
                <span className={cn("grid h-11 w-11 place-items-center rounded-2xl", p.iconClass)}>
                  <p.icon className="h-5 w-5" />
                </span>
                <span className={cn("rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider", p.tagClass)}>
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <p className="mt-10 text-center text-sm text-slate-500 sm:text-base">
          Pasajero, conductor y asociación: <span className="font-semibold text-slate-300">tres actores, el mismo problema</span> — y ninguna herramienta digital para resolverlo juntos.
        </p>
      </Reveal>
    </Section>
  );
}
