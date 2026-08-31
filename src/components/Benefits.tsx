import { Building2, Check, ScanLine, Smartphone } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const ACTORS = [
  {
    icon: Smartphone,
    name: "Para el pasajero",
    tagline: "Viaja con respaldo",
    tile: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    check: "text-cyan-400",
    items: [
      "Saldo disponible en todo momento",
      "Recargas por Pago Móvil o en efectivo (taquilla / kiosco)",
      "Ticket digital QR para cada viaje",
      "Historial de viajes y registro de operaciones",
      "Seguimiento de unidades en tiempo real",
    ],
  },
  {
    icon: ScanLine,
    name: "Para el conductor / colector",
    tagline: "Valida, no administra caja",
    tile: "bg-orange-400/10 text-orange-300 border-orange-400/20",
    check: "text-orange-400",
    items: [
      "Validación digital: no recibe ni maneja efectivo",
      "Registro automático de cada viaje",
      "Control de recaudación de la jornada",
      "Reporte de la ruta al final del día",
      "10% de comisión liquidado automáticamente al cierre de las 7 PM",
    ],
  },
  {
    icon: Building2,
    name: "Para la asociación",
    tagline: "Gestionar con información",
    tile: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    check: "text-violet-400",
    items: [
      "Conductores, unidades y rutas registradas",
      "Recaudación diaria real, unidad por unidad",
      "Acreditación de recargas a pasajeros",
      "Cierre de caja automático a las 7:00 PM",
      "Split 85/10/5 sin conciliaciones manuales",
    ],
  },
];

export default function Benefits() {
  return (
    <Section
      id="beneficios"
      label="¿Qué gana cada actor?"
      title={
        <>
          No vendemos tecnología. <span className="text-gradient">Vendemos utilidad.</span>
        </>
      }
      lead="QR, tokens y servidores son detalles para quien quiera profundizar. Lo importante es: ¿qué gano yo?"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {ACTORS.map((a, i) => (
          <Reveal key={a.name} delay={i * 110}>
            <article className="glass group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
              <div className="flex items-center gap-4">
                <span className={cn("grid h-12 w-12 place-items-center rounded-2xl border", a.tile)}>
                  <a.icon className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-white">{a.name}</h3>
                  <p className="text-xs font-medium text-slate-500">{a.tagline}</p>
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3.5">
                {a.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", a.check)} strokeWidth={3} />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
