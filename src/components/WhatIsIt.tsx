import { Check, Quote, X } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const IS = [
  "Una plataforma de gestión de transporte urbano que usa el pago digital como punto de interacción.",
  "Un sistema que convierte la operación de cobro en un proceso digital y trazable.",
  "Diseñada para la realidad venezolana: Pago Móvil interbancario, el colector como validador y conectividad inestable.",
];

const IS_NOT = [
  "Una aplicación de pagos (tipo Mercado Pago).",
  "Un sistema que exige banca digital: existe canal en efectivo vía taquilla o kiosco.",
  "Un sistema donde el colector recibe efectivo o administra caja: solo valida el QR.",
  "Una solución lista para producción a gran escala: hoy es un prototipo en fase piloto.",
];

export default function WhatIsIt() {
  return (
    <Section
      id="que-es"
      label="¿Qué es y qué resuelve?"
      title={
        <>
          Un sistema de gestión del transporte, <span className="text-gradient">no una app de pagos.</span>
        </>
      }
      lead="Enrutados conecta a tres actores —pasajero, colector y asociación— con apps móviles que convierten cada viaje en información. Esto es lo que somos, y lo que no."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="glass h-full rounded-3xl border-emerald-400/20 bg-emerald-400/[0.04] p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              <h3 className="text-lg font-bold text-white">Lo que Enrutados es</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {IS.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-300">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <div className="glass h-full rounded-3xl p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-400/10 text-slate-400">
                <X className="h-5 w-5" strokeWidth={3} />
              </span>
              <h3 className="text-lg font-bold text-white">Lo que no es</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {IS_NOT.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-400">
                  <X className="mt-1 h-4 w-4 shrink-0 text-slate-500" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <figure className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.08] via-transparent to-violet-600/[0.08]" />
          <Quote className="absolute -top-2 left-6 h-16 w-16 text-white/[0.05]" />
          <blockquote className="relative max-w-3xl text-center text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
            “Lo que hoy ocurre en efectivo y papel, mañana puede convertirse en{" "}
            <span className="text-gradient font-extrabold">información</span>.”
          </blockquote>
          <figcaption className="relative mt-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Filosofía del modelo — Visión de producto v1.1
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
