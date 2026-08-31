import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BadgeCheck,
  BatteryFull,
  Building2,
  Check,
  Clock,
  QrCode,
  RefreshCw,
  ScanLine,
  Signal,
  Smartphone,
  Split,
  TicketCheck,
  TrendingUp,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

/* ---------------- QR pattern (deterministic, with finder squares) ---------------- */
function QRPattern() {
  const size = 21;
  const cells: ReactNode[] = [];
  const inFinder = (i: number, j: number, r: number, c: number) => {
    const border =
      i >= r && i < r + 7 && j >= c && j < c + 7 && !(i > r && i < r + 6 && j > c && j < c + 6);
    const core = i >= r + 2 && i < r + 5 && j >= c + 2 && j < c + 5;
    return border || core;
  };
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const finder =
        inFinder(i, j, 0, 0) || inFinder(i, j, 0, 14) || inFinder(i, j, 14, 0);
      if (finder) {
        cells.push(<div key={`${i}-${j}`} className="bg-[#0b1120]" />);
        continue;
      }
      const pseudo = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
      const on = pseudo - Math.floor(pseudo) > 0.5;
      cells.push(<div key={`${i}-${j}`} className={on ? "bg-[#0b1120]" : "bg-transparent"} />);
    }
  }
  return (
    <div
      className="grid aspect-square w-full gap-px rounded-lg bg-[#0b1120]"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {cells}
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-slate-400">
      <span>08:15</span>
      <span className="flex items-center gap-1.5">
        <Signal className="h-3 w-3" />
        <Wifi className="h-3 w-3" />
        <BatteryFull className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

/* ---------------- Screens ---------------- */
function PassengerScreen() {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-2">
      <PhoneStatusBar />
      <div className="mt-3 flex items-center justify-between px-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">Enrutados</p>
          <p className="text-[13px] font-bold text-white">Hola, María</p>
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-[11px] font-extrabold text-white">M</span>
      </div>

      <div className="mt-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 p-4 text-slate-950 shadow-lg shadow-cyan-500/20">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Saldo disponible</p>
        <div className="mt-1 flex items-end justify-between">
          <span className="text-2xl font-extrabold">Bs. 84,00</span>
          <span className="rounded-full bg-slate-950/20 px-2.5 py-1 text-[10px] font-extrabold">5 viajes</span>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-white p-3 shadow-lg">
        <div className="rounded-lg border-4 border-[#0b1120] p-1.5">
          <QRPattern />
        </div>
        <p className="mt-2 text-center text-[10px] font-bold text-slate-600">
          Muestra este código al colector
        </p>
        <p className="text-center text-[9px] font-medium text-slate-400">
          Se renueva automáticamente
        </p>
      </div>

      <div className="mt-auto space-y-2 pt-4">
        <p className="px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Últimos viajes</p>
        {[
          { ruta: "Ruta 102 · Centro", hora: "07:42" },
          { ruta: "Ruta 102 · Casa", hora: "Ayer 18:05" },
        ].map((v) => (
          <div key={v.ruta} className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
            <Bus2 />
            <div className="flex-1">
              <p className="text-[11px] font-bold text-white">{v.ruta}</p>
              <p className="text-[9px] text-slate-500">1 viaje · {v.hora}</p>
            </div>
            <span className="text-[9px] font-bold text-emerald-400">−1</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bus2() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-400/10">
      <QrCode className="h-3.5 w-3.5 text-cyan-300" />
    </span>
  );
}

function ConductorScreen() {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-2">
      <PhoneStatusBar />
      <div className="mt-3 flex items-center justify-between px-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">Enrutados Colector</p>
          <p className="text-[13px] font-bold text-white">Unidad · GCB-74X</p>
        </div>
        <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 text-[9px] font-extrabold text-orange-300">
          Ruta 102
        </span>
      </div>

      <div className="relative mt-4 h-44 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <span className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-cyan-400/80" />
        <span className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-cyan-400/80" />
        <span className="absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-cyan-400/80" />
        <span className="absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-cyan-400/80" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-dashed border-white/30" />
        <div className="animate-scanline absolute h-0.5 w-3/4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
      </div>
      <p className="mt-2 text-center text-[10px] font-semibold text-slate-400">Apunta al QR del pasajero</p>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Viajes hoy</p>
          <p className="mt-1 text-xl font-extrabold text-white">34</p>
        </div>
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Recaudación</p>
          <p className="mt-1 text-xl font-extrabold text-white">Bs. 5.040</p>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2.5 rounded-2xl border border-orange-400/25 bg-orange-400/[0.07] px-3.5 py-3 pt-3">
        <WifiOff className="h-4 w-4 shrink-0 text-orange-300" />
        <div>
          <p className="text-[11px] font-bold text-orange-200">Modo offline activo</p>
          <p className="text-[9px] leading-snug text-slate-400">12 validaciones locales · se sincronizan al recuperar señal</p>
        </div>
      </div>
    </div>
  );
}

function AdminScreen() {
  const bars = [38, 62, 50, 76, 58, 90, 68];
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-2">
      <PhoneStatusBar />
      <div className="mt-3 flex items-center justify-between px-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">Enrutados Admin</p>
          <p className="text-[13px] font-bold text-white">Asociación 102</p>
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <Building2 className="h-4 w-4 text-white" />
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Cierre de caja</p>
          <span className="flex items-center gap-1 rounded-full bg-violet-400/10 px-2 py-0.5 text-[9px] font-extrabold text-violet-300">
            <Clock className="h-3 w-3" /> 7:00 PM
          </span>
        </div>
        <p className="mt-1 text-2xl font-extrabold text-white">Bs. 5.040,00</p>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className={cn("flex-1 rounded-t-sm", i === bars.length - 1 ? "bg-gradient-to-t from-violet-500 to-fuchsia-400" : "bg-white/10")}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[9px] text-slate-500">Recaudación por día · última semana</p>
      </div>

      <div className="mt-3 space-y-2">
        {[
          { icon: Users, label: "18 conductores activos", sub: "flota en línea ahora" },
          { icon: TicketCheck, label: "9 recargas acreditadas", sub: "Pago Móvil + taquilla" },
          { icon: TrendingUp, label: "224 viajes registrados", sub: "hasta ahora hoy" },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-violet-400/10">
              <r.icon className="h-3.5 w-3.5 text-violet-300" />
            </span>
            <div className="flex-1">
              <p className="text-[11px] font-bold text-white">{r.label}</p>
              <p className="text-[9px] text-slate-500">{r.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 rounded-xl border border-violet-400/25 bg-violet-400/[0.07] px-3 py-2.5">
        <Split className="h-3.5 w-3.5 text-violet-300" />
        <p className="text-[10px] font-bold text-violet-200">85/10/5 · liquidación automática</p>
      </div>
    </div>
  );
}

/* ---------------- Phone with 3D tilt ---------------- */
function Phone({ glow, children }: { glow: string; children: ReactNode }) {
  const inner = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = inner.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-py * 10).toFixed(2)}deg) rotateY(${(px * 14).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (inner.current) inner.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="[perspective:1400px]">
      <div className="animate-float-3">
        <div
          ref={inner}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          className="relative mx-auto w-[290px] transition-transform duration-300 ease-out will-change-transform sm:w-[310px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={cn("absolute -inset-12 rounded-full blur-[100px]", glow)} />
          <div className="relative rounded-[2.9rem] border border-white/15 bg-[#0d1526] p-2.5 shadow-[0_50px_90px_-24px_rgba(0,0,0,0.75)]">
            <div className="absolute -right-[2.5px] top-28 h-16 w-[3px] rounded-r bg-white/20" />
            <div className="absolute -left-[2.5px] top-32 h-10 w-[3px] rounded-l bg-white/20" />
            <div className="relative overflow-hidden rounded-[2.35rem] bg-[#0b1120]">
              <div className="absolute left-1/2 top-2.5 z-20 h-[20px] w-[92px] -translate-x-1/2 rounded-full border border-white/10 bg-black" />
              <div className="relative aspect-[9/19.2]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Section ---------------- */
const ACTORS = [
  {
    id: "pasajero",
    name: "Pasajero",
    tagline: "Tu viaje en tus manos.",
    icon: Smartphone,
    screen: <PassengerScreen />,
    glow: "bg-cyan-500/25",
    desc: "Saldo, recargas, historial y ticket digital: todo tu transporte en una sola app.",
    features: [
      "Saldo disponible en tiempo real",
      "Recargas por Pago Móvil o efectivo en taquilla",
      "Ticket QR dinámico para cada viaje",
      "Historial de viajes y operaciones",
    ],
    activeTab: "border-cyan-400/40 bg-cyan-400/[0.08]",
    activeText: "text-cyan-300",
    check: "text-cyan-400",
  },
  {
    id: "conductor",
    name: "Conductor / Colector",
    tagline: "Tu unidad bajo control.",
    icon: ScanLine,
    screen: <ConductorScreen />,
    glow: "bg-orange-500/25",
    desc: "Validación digital de pasajeros, registro de viajes y recaudación de la jornada. El colector valida el QR; el dispositivo viaja en la unidad del chofer.",
    features: [
      "Escaneo del QR del pasajero en ≤ 3 segundos",
      "Registro automático de cada viaje",
      "Recaudación del día visible en vivo",
      "Comisión liquidada al cierre de las 7:00 PM",
    ],
    activeTab: "border-orange-400/40 bg-orange-400/[0.08]",
    activeText: "text-orange-300",
    check: "text-orange-400",
  },
  {
    id: "asociacion",
    name: "Asociación",
    tagline: "Información para gestionar mejor.",
    icon: Building2,
    screen: <AdminScreen />,
    glow: "bg-violet-500/25",
    desc: "Conductores, recargas, unidades, rutas y estadísticas: el tablero de la asociación en una app de administración.",
    features: [
      "Conductores, flota y rutas registradas",
      "Acreditación de recargas de pasajeros",
      "Recaudación diaria real por unidad",
      "Cierre de caja y split 85/10/5 automáticos",
    ],
    activeTab: "border-violet-400/40 bg-violet-400/[0.08]",
    activeText: "text-violet-300",
    check: "text-violet-400",
  },
];

export default function Ecosystem() {
  const [idx, setIdx] = useState(0);
  const manual = useRef(false);

  useEffect(() => {
    if (manual.current) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % ACTORS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const select = (i: number) => {
    manual.current = true;
    setIdx(i);
  };

  const actor = ACTORS[idx];

  return (
    <Section
      id="ecosistema"
      label="El ecosistema"
      title={
        <>
          Un solo sistema. <span className="text-gradient">Tres perspectivas.</span>
        </>
      }
      lead="No son tres apps sueltas: es un sistema con tres perspectivas del mismo viaje. Selecciona un actor y mira su app."
      className="overflow-hidden"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        {/* left: tabs + detail */}
        <div>
          <div className="space-y-3">
            {ACTORS.map((a, i) => (
              <Reveal key={a.id} delay={i * 90} variant="left">
                <button
                  onClick={() => select(i)}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5",
                    i === idx
                      ? cn(a.activeTab, "shadow-lg")
                      : "glass hover:border-white/20 hover:bg-white/[0.06]"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors",
                      i === idx ? "border-transparent bg-white/10" : "border-white/10 bg-white/[0.04]"
                    )}
                  >
                    <a.icon className={cn("h-5 w-5", i === idx ? a.activeText : "text-slate-400")} />
                  </span>
                  <span className="flex-1">
                    <span className={cn("block text-sm font-extrabold sm:text-base", i === idx ? "text-white" : "text-slate-300")}>
                      {a.name}
                    </span>
                    <span className="block text-xs text-slate-500">{a.tagline}</span>
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-extrabold",
                      i === idx ? cn("bg-white/10", a.activeText) : "text-slate-600"
                    )}
                  >
                    APP {i + 1}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div key={actor.id} style={{ animation: "fade-up 0.5s ease both" }}>
            <p className="mt-7 text-[15px] leading-relaxed text-slate-300">{actor.desc}</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {actor.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", actor.check)} strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right: phone */}
        <Reveal variant="right" delay={150} className="relative">
          <div className="relative">
            <div
              key={actor.id}
              style={{ animation: "fade-up 0.5s ease both" }}
            >
              <Phone glow={actor.glow}>{actor.screen}</Phone>
            </div>
            <div className="glass absolute -left-2 top-10 hidden animate-float items-center gap-2 rounded-2xl px-3.5 py-2.5 md:flex">
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-bold text-white">Validación ≤ 3 s</span>
            </div>
            <div className="glass absolute -right-2 bottom-14 hidden animate-float-2 items-center gap-2 rounded-2xl px-3.5 py-2.5 md:flex">
              <RefreshCw className="h-4 w-4 text-emerald-300" />
              <span className="text-xs font-bold text-white">Offline-first</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
