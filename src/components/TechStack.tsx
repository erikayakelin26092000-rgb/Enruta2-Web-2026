import { BadgeCheck, Bell, Database, KeyRound, Map, Rocket, Server, Smartphone, Split, WifiOff } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const STACK = [
  {
    icon: Smartphone,
    name: "React Native + Expo",
    role: "Apps móviles",
    text: "Las tres apps —pasajero, colector y admin— comparten una base de código moderno.",
    tile: "bg-cyan-400/10 text-cyan-300",
  },
  {
    icon: Database,
    name: "Supabase",
    role: "PostgreSQL + PostGIS",
    text: "Datos, autenticación, Row Level Security, realtime GPS y edge functions.",
    tile: "bg-emerald-400/10 text-emerald-300",
  },
  {
    icon: Server,
    name: "Render",
    role: "Backend API",
    text: "API Node.js / Express donde vive la lógica del sistema, desplegada en la nube.",
    tile: "bg-orange-400/10 text-orange-300",
  },
  {
    icon: Bell,
    name: "Firebase Messaging",
    role: "Notificaciones push",
    text: "Avisos oportunos para pasajeros, conductores y administradores.",
    tile: "bg-amber-400/10 text-amber-300",
  },
  {
    icon: Map,
    name: "MapLibre + MapTiler",
    role: "Mapas en vivo",
    text: "Posición de la flota en tiempo real sobre mapas ligeros y abiertos.",
    tile: "bg-violet-400/10 text-violet-300",
  },
  {
    icon: KeyRound,
    name: "JWT (RS256)",
    role: "Tokens offline",
    text: "Firma digital y mecanismos anti-replay para validar pasajes sin conexión.",
    tile: "bg-fuchsia-400/10 text-fuchsia-300",
  },
];

export default function TechStack() {
  return (
    <Section
      id="tecnologia"
      label="Tecnología detrás del sistema"
      title={
        <>
          Ingeniería moderna, <span className="text-gradient">elegida con intención.</span>
        </>
      }
      lead="Cada pieza responde a una necesidad concreta del transporte venezolano, no a una moda."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((t, i) => (
          <Reveal key={t.name} delay={i * 70}>
            <article className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
              <div className="flex items-center gap-4">
                <span className={cn("grid h-11 w-11 place-items-center rounded-2xl", t.tile)}>
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-white">{t.name}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{t.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* highlights */}
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="relative h-full overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-7 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300">
              <WifiOff className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-white">Arquitectura offline-first</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Las apps están diseñadas para funcionar sin conexión: el colector precarga tokens y valida localmente
              verificando firmas RSA. Al recuperar señal, todo se sincroniza automáticamente.
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={110}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.08] to-transparent p-7 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300">
              <Split className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-white">Split 85/10/5 automático</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              La liquidación del día se ejecuta a las 7:00 PM sin intervención manual: 85% asociación, 10% conductor,
              5% plataforma. Sin planillas, sin conciliaciones a mano.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: BadgeCheck, label: "74 tests passing" },
            { icon: Rocket, label: "Desplegado en Render" },
            { icon: WifiOff, label: "Diseñado offline-first" },
          ].map((c) => (
            <span
              key={c.label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-slate-300"
            >
              <c.icon className="h-3.5 w-3.5 text-cyan-300" />
              {c.label}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
