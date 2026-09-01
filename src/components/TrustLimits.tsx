import { Check, ShieldAlert, X } from "lucide-react";
import Reveal from "./Reveal";

const CAN = [
  "Registro de operaciones realizadas mediante nuestra plataforma.",
  "Herramientas digitales para gestionar cobro, validación y liquidación.",
  "Mecanismos de validación con firma digital y control anti-reutilización.",
  "Funcionamiento offline cuando la conectividad falla.",
  "Información operacional según las capacidades habilitadas para cada asociación.",
  "Soporte de los procesos definidos por el sistema.",
];

const CANNOT = [
  "Que podamos garantizar conectividad permanente en todo momento.",
  "Que podamos eliminar todos los problemas del transporte urbano.",
  "Que podamos garantizar que una operación bancaria externa fue ejecutada si no recibimos confirmación válida.",
  "Que la tecnología sustituya las responsabilidades de los operadores y conductores.",
  "Que un sistema digital sea infalible.",
];

export default function TrustLimits() {
  return (
    <section id="confianza" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Confianza con transparencia
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Lo que Enrutados puede garantizar{" "}
            <span className="text-gradient">— y lo que no.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            Preferimos ser claros sobre nuestros alcances antes que vender promesas que no podemos cumplir. 
            Esta transparencia no es una debilidad: es cómo construimos confianza.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* CAN */}
          <Reveal variant="left">
            <div className="glass h-full rounded-3xl border-emerald-400/15 bg-emerald-400/[0.03] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <h3 className="text-lg font-bold text-white">Lo que podemos ofrecer</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {CAN.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CANNOT */}
          <Reveal variant="right" delay={120}>
            <div className="glass h-full rounded-3xl border-orange-400/15 bg-orange-400/[0.03] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-400/15 text-orange-300">
                  <ShieldAlert className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-lg font-bold text-white">Lo que no afirmamos</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {CANNOT.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-400">
                    <X className="mt-1 h-4 w-4 shrink-0 text-orange-400/70" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Trazabilidad explicada en lenguaje humano */}
        <Reveal delay={200}>
          <div className="mt-8 rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-7 sm:p-9">
            <h3 className="text-lg font-extrabold text-white">Trazabilidad, en lenguaje humano</h3>
            <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-slate-300">
              <span className="font-semibold text-white">Trazabilidad significa poder reconstruir qué ocurrió con una operación dentro del sistema.</span>{" "}
              Desde su generación hasta su validación, Enrutados busca conservar la información necesaria 
              para comprender cada operación registrada. No prometemos una trazabilidad absoluta de aquello 
              que ocurre <span className="italic text-slate-400">fuera</span> del sistema.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
