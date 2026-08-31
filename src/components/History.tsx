import { FileText, FlaskConical, GraduationCap, Quote, Rocket } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const MILESTONES = [
  {
    icon: GraduationCap,
    tag: "Origen",
    title: "Iniciativa académica",
    text: "Nace como proyecto de feria estudiantil: una pregunta simple sobre el cobro del pasaje y el efectivo.",
  },
  {
    icon: FileText,
    tag: "Diseño",
    title: "El modelo toma forma",
    text: "Se define la visión de producto: la naturaleza del token, el flujo del dinero y el rol real de cada actor.",
  },
  {
    icon: FlaskConical,
    tag: "Construcción",
    title: "Prototipo funcional",
    text: "Tres apps, backend, 74 tests y arquitectura offline-first — validado en entorno controlado.",
  },
  {
    icon: Rocket,
    tag: "Siguiente",
    title: "El capítulo del piloto",
    text: "La prueba con una asociación real: el paso que separa un prototipo de un sistema de campo.",
  },
];

export default function History() {
  return (
    <Section
      id="historia"
      label="La historia del proyecto"
      title={
        <>
          Nació en un aula. <span className="text-gradient">Evolucionó hacia un prototipo real.</span>
        </>
      }
      lead="Ser un proyecto en evolución no es una debilidad: es la razón de cada decisión de diseño."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MILESTONES.map((m, i) => (
          <Reveal key={m.title} delay={i * 100}>
            <article className="glass relative h-full rounded-3xl p-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-cyan-300/70">
                {m.tag}
              </span>
              <span className="mt-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-300">
                <m.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-extrabold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.text}</p>
              {i < MILESTONES.length - 1 && (
                <span className="absolute right-5 top-6 hidden text-white/15 lg:block">→</span>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <div className="glass mt-8 flex flex-col items-center gap-4 rounded-3xl px-8 py-10 text-center sm:flex-row sm:text-left">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-400/10 text-violet-300">
            <Quote className="h-5 w-5" />
          </span>
          <p className="text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
            Nació como una iniciativa académica y evolucionó hacia un prototipo funcional —{" "}
            <span className="font-bold text-white">y eso es una fortaleza, no una debilidad.</span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
