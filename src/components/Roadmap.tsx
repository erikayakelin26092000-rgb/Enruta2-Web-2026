import { Check, CircleDashed, FlaskConical, Telescope, Mail, ArrowRight, UserPlus } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const PHASES = [
  {
    icon: FlaskConical,
    status: "HOY",
    title: "Prototipo funcional",
    statusClass: "bg-cyan-400 text-slate-950",
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
        <div className="absolute bottom-6 left-[19px] top-6 w-px bg-white/10 sm:left-1/2" />

        <div className="space-y-10">
          {PHASES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <div className={cn("relative flex gap-6 sm:w-1/2", i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12")}>
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
          "Una propuesta tecnológica desarrollada para explorar una forma{" "}
          <span className="font-semibold text-slate-300">más sencilla, trazable y organizada</span> de gestionar el
          transporte urbano."
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-center sm:p-12">
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Construyamos un transporte más verificable.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Enrutados comienza con problemas concretos, herramientas sencillas y una premisa fundamental: 
            la tecnología debe estar al servicio de las personas que utilizan y operan el transporte todos los días.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contacto@enrutados.ve"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/30"
            >
              <Mail className="h-4 w-4" />
              Contactar
            </a>
            <a
              href="#inicio"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <ArrowRight className="h-4 w-4 text-cyan-300" />
              Conocer el proyecto
            </a>
            <a
              href="mailto:contacto@enrutados.ve?subject=Interés%20en%20prueba%20piloto"
              className="group inline-flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] px-7 py-3.5 text-sm font-semibold text-emerald-200 backdrop-blur transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/[0.1]"
            >
              <UserPlus className="h-4 w-4" />
              Participar en una prueba piloto
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
