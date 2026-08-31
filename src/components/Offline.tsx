import { AlertTriangle, BadgeCheck, CloudOff, RefreshCw, Satellite, ScanLine, KeyRound, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const ONLINE = [
  {
    icon: ScanLine,
    title: "Validación en tiempo real",
    text: "Cada escaneo consulta el servidor: saldo, vigencia del token y estado del pasajero, al instante.",
  },
  {
    icon: Satellite,
    title: "GPS de flota en vivo",
    text: "La posición de cada unidad se transmite en tiempo real para la app del pasajero y el panel admin.",
  },
  {
    icon: BadgeCheck,
    title: "Saldo siempre actualizado",
    text: "Recargas acreditadas y comisiones visibles sin esperar sincronización.",
  },
];

const OFFLINE = [
  {
    icon: WifiOff,
    step: "01",
    title: "El colector precarga su pack",
    text: "Al iniciar la jornada, la app del colector descarga un paquete de tokens firmados para validar sin conexión.",
  },
  {
    icon: KeyRound,
    step: "02",
    title: "Validación local con firma RSA",
    text: "Cada QR se verifica en el dispositivo comprobando su firma digital. El pasaje se valida aunque no haya señal.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Sincronización automática",
    text: "Cuando el dispositivo recupera conexión, todas las validaciones realizadas se sincronizan solas.",
  },
];

export default function Offline() {
  const [online, setOnline] = useState(true);

  return (
    <Section
      id="offline"
      label="Conectividad"
      title={
        <>
          ¿Qué pasa sin internet? <span className="text-gradient">Sigue funcionando.</span>
        </>
      }
      lead="Enrutados está diseñado para la conectividad variable de Venezuela: la validación no depende de estar en línea a cada rato."
    >
      <Reveal>
        <div className="glass rounded-3xl p-6 sm:p-10">
          {/* toggle */}
          <div className="mx-auto flex w-fit rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
            <button
              onClick={() => setOnline(true)}
              className={cn(
                "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300",
                online ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25" : "text-slate-400 hover:text-white"
              )}
            >
              <Wifi className="h-4 w-4" />
              Con conexión
            </button>
            <button
              onClick={() => setOnline(false)}
              className={cn(
                "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300",
                !online ? "bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/25" : "text-slate-400 hover:text-white"
              )}
            >
              <WifiOff className="h-4 w-4" />
              Sin conexión
            </button>
          </div>

          {/* panel */}
          <div className="mt-9">
            <div key={online ? "online" : "offline"} style={{ animation: "fade-up 0.5s ease both" }}>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-2xl",
                    online ? "bg-cyan-400/10 text-cyan-300" : "bg-orange-400/10 text-orange-300"
                  )}
                >
                  {online ? <Wifi className="h-5 w-5" /> : <CloudOff className="h-5 w-5" />}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    {online ? "Operación en línea" : "Operación sin conexión"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {online
                      ? "El modo ideal: todo en tiempo real."
                      : "El modo de campo: la unidad no se detiene."}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {(online ? ONLINE : OFFLINE).map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5",
                      online ? "border-cyan-400/15 bg-cyan-400/[0.04]" : "border-orange-400/15 bg-orange-400/[0.04]"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-xl",
                          online ? "bg-cyan-400/10 text-cyan-300" : "bg-orange-400/10 text-orange-300"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                      </span>
                      {"step" in item && (
                        <span className="text-2xl font-extrabold text-white/10">{(item as { step: string }).step}</span>
                      )}
                    </div>
                    <h4 className="mt-4 text-sm font-extrabold text-white">{item.title}</h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-6 flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-300">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-white">Limitaciones reales, explicadas con honestidad</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              La sincronización offline requiere que el colector haya precargado su pack de tokens antes de perder
              señal. Y el <span className="font-semibold text-slate-300">GPS en tiempo real sí requiere conexión constante</span> —
              aunque es independiente de la validación del pasaje: sin internet se puede cobrar, solo no se ve la unidad en el mapa.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
