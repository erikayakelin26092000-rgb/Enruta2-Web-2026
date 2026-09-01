import { Bus, Building2, User, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const ACTORS = [
  {
    icon: User,
    title: "Pasajero",
    subtitle: "Paga y consulta con mayor claridad.",
    points: [
      "Recarga tu saldo por Pago Móvil o en efectivo en taquilla.",
      "Genera un ticket digital QR para cada viaje.",
      "Consulta tu historial y saldo en cualquier momento.",
      "Viaja con registro verificable de cada operación.",
    ],
    accent: "border-cyan-400/20 bg-cyan-400/[0.04] hover:border-cyan-400/35",
    iconBg: "bg-cyan-400/15 text-cyan-300",
  },
  {
    icon: Bus,
    title: "Conductor / Colector",
    subtitle: "Opera con herramientas diseñadas para el trabajo real.",
    points: [
      "Valida pasajes con QR sin recibir ni manejar efectivo.",
      "Tu jornada queda registrada digitalmente.",
      "Comisión del 10% liquidada automáticamente a las 7:00 PM.",
      "Funciona incluso cuando la señal falla.",
    ],
    accent: "border-emerald-400/20 bg-emerald-400/[0.04] hover:border-emerald-400/35",
    iconBg: "bg-emerald-400/15 text-emerald-300",
  },
  {
    icon: Building2,
    title: "Organización de transporte",
    subtitle: "Obtén una visión más ordenada de tu operación.",
    points: [
      "Administra conductores, unidades y rutas desde un solo lugar.",
      "Conoce tu recaudación real, unidad por unidad.",
      "Cierre de caja automático sin planillas manuales.",
      "Split 85/10/5 ejecutado sin conciliaciones.",
    ],
    accent: "border-violet-400/20 bg-violet-400/[0.04] hover:border-violet-400/35",
    iconBg: "bg-violet-400/15 text-violet-300",
  },
];

export default function ForWhom() {
  return (
    <section id="para-quien" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            ¿Para quién existe Enrutados?
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Un mismo sistema.{" "}
            <span className="text-gradient">Tres perspectivas.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            Cada actor del transporte urbano tiene preguntas distintas. Enrutados busca responderlas 
            con herramientas concretas, no con promesas genéricas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ACTORS.map((actor, i) => (
            <Reveal key={actor.title} delay={i * 120} variant={i === 0 ? "left" : i === 2 ? "right" : "zoom"}>
              <article className={`glass group h-full rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${actor.accent}`}>
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl ${actor.iconBg}`}>
                    <actor.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{actor.title}</h3>
                    <p className="text-xs font-semibold text-slate-500">{actor.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {actor.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center sm:p-8">
            <p className="text-sm font-medium text-slate-400">
              Un mismo sistema. Tres perspectivas. Una responsabilidad: que la información sea{" "}
              <span className="font-semibold text-white">útil, comprensible y verificable</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
