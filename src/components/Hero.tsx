import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Clock, Quote, Smartphone, Split, Timer } from "lucide-react";
import Particles from "./Particles";
import Reveal from "./Reveal";

const STATS = [
  { icon: Smartphone, value: "3 apps", label: "un solo ecosistema conectado" },
  { icon: Timer, value: "≤ 3 s", label: "por validación de pasaje" },
  { icon: Split, value: "85 / 10 / 5", label: "asociación · colector · plataforma" },
  { icon: Clock, value: "7:00 PM", label: "cierre de caja automático" },
];

export default function Hero() {
  const orbA = useRef<HTMLDivElement>(null);
  const orbB = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (orbA.current) orbA.current.style.transform = `translateY(${y * 0.18}px)`;
        if (orbB.current) orbB.current.style.transform = `translateY(${y * -0.12}px)`;
        if (content.current) {
          const fade = Math.max(0, 1 - y / 650);
          content.current.style.transform = `translateY(${y * 0.08}px)`;
          content.current.style.opacity = fade.toFixed(3);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* background layers */}
      <div className="grid-bg mask-fade-y absolute inset-0" />
      <Particles className="absolute inset-0 h-full w-full opacity-70" />
      <div ref={orbA} className="absolute -left-36 -top-36 h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.16] blur-[130px]" />
      <div ref={orbB} className="absolute -right-44 top-1/4 h-[32rem] w-[32rem] rounded-full bg-violet-600/[0.15] blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-500/[0.08] blur-[120px]" />

      <div ref={content} className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-36 sm:px-8 sm:pt-40">
        <Reveal>
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-2 text-[11px] font-semibold tracking-wide text-cyan-200">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-400" />
            PROYECTO VENEZOLANO — PROTOTIPO FUNCIONAL DE GESTIÓN DE TRANSPORTE DIGITAL
          </div>
        </Reveal>

        <Reveal delay={110}>
          <h1 className="mt-7 max-w-4xl text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.2rem]">
            El transporte urbano,
            <br />
            <span className="text-gradient">conectado.</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-xl">
            Una plataforma digital que conecta pasajeros, conductores y asociaciones para
            transformar el pago y la gestión del transporte público.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#como-funciona"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/40"
            >
              Conoce cómo funciona
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#ecosistema"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              Explora el ecosistema
              <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex items-start gap-3 text-slate-400">
            <Quote className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70" />
            <p className="max-w-xl text-sm italic leading-relaxed sm:text-base">
              Un proyecto venezolano desarrollado para responder a una realidad venezolana.
            </p>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <div className="glass mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-4 bg-white/[0.015] px-5 py-5 sm:px-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <s.icon className="h-4.5 w-4.5 text-cyan-300" />
                </span>
                <div className="leading-tight">
                  <div className="text-lg font-extrabold text-white sm:text-xl">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-snug text-slate-500">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="relative flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-600/80 p-1.5">
            <div className="h-2 w-1 animate-bounce-soft rounded-full bg-cyan-400" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Desliza</span>
        </div>
      </div>
    </section>
  );
}
