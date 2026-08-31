import { Check, CircleDashed, FlaskConical, Telescope } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const PHASES = [
  {
    icon: FlaskConical,
    status: "HOY",
    title: "Prototipo funcional",
    statusClass: "bg-cyan-400 text-slate-950",
    line: "bg-cyan-400",
    dot: "bg-cyan-400 shadow-cyan-400/40",
    done: true,
    items: [
      "3 apps móviles (pasajero, colector, admin)",
      "Backend Node.js + Supabase con PostGIS",
      "74 tests passing · arquitectura offline-first",
      "Validado en entorno controlado",
    ],
  },
  {
    icon: CircleDashed,
    status: "SIGUIENTE",
    title: "Prueba piloto real",
    statusClass: "bg-orange-400 text-slate-950",
    line: "bg-gradient-to-b from-cyan-400 to-orange-400",
    dot: "bg-orange-400 shadow-orange-400/40",
    done: false,
    items: [
      "Operar con una asociación de transporte real",
      "Medir tiempos de abordaje y adopción",
      "Ajustar el soporte en campo con feedback real",
    ],
  },
  {
    icon: Telescope,
    status: "FUTURO",
    title: "Escala",
    statusClass: "bg-violet-400 text-slate-950",
    line: "bg-violet-400/60",
    dot: "bg-violet-400 shadow-violet-400/40",
    done: false,
    items: [
      "Más líneas, asociaciones y ciudades",
      "Hardening: proof-of-possession del token",
      "Nuevos canales de recarga (kioscos, taquillas)",
    ],
  },
];

export default function Roadmap() {
  return (
    <Section
      id="hoja-de-ruta"
      label="¿En dónde puede llegar?"
      title={
        <>
          De prototipo a piloto, <span className="text-gradient">con los pies en la tierra.</span>
        </>
      }
      lead="No prometemos revolucionar el transporte de un día para otro. Esta es la ruta honesta de crecimiento del proyecto."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* base line */}
        <div className="absolute bottom-6 left-[19px] top-6 w-px bg-white/10 sm:left-1/2" />

        <div className="space-y-10">
          {PHASES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <div className={cn("relative flex gap-6 sm:w-1/2", i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12")}>
                {/* dot */}
                <span
                  className={cn(
                    "absolute left-[12px] top-1.5 z-10 grid h-4 w-4 place-items-center rounded-full shadow-[0_0_18px] sm:left-auto",
                    i % 2 === 0 ? "sm:-right-2" : "sm:-left-2",
                    p.dot
                  )}
                >
                  {p.done ? <Check className="h-2.5 w-2.5 text-slate-950" strokeWidth={4} /> : <CircleDashed className="h-3 w-3 text-slate-950/70" />}
                </span>

                <div className="glass ml-10 w-full rounded-3xl p-6 sm:ml-0 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-white">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <span className={cn("rounded-full px-3 py-1 text-[10px] font-extrabold tracking-widest", p.statusClass)}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-white">{p.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-400">
                        <Check className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", p.done ? "text-cyan-400" : "text-slate-500")} strokeWidth={3} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-slate-500 sm:text-base">
          “Una propuesta tecnológica desarrollada para explorar una forma{" "}
          <span className="font-semibold text-slate-300">más sencilla, trazable y organizada</span> de gestionar el
          transporte urbano.”
        </p>
      </Reveal>
    </Section>
  );
}
