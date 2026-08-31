import { useEffect, useState } from "react";
import { Menu, Route, X, ArrowRight } from "lucide-react";
import { useScrolled } from "../lib/hooks";
import { cn } from "../utils/cn";

const LINKS = [
  { id: "que-es", label: "Qué es" },
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "ecosistema", label: "Ecosistema" },
  { id: "dinero", label: "Dinero" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "hoja-de-ruta", label: "Hoja de ruta" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
      <div
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5",
          scrolled
            ? "glass shadow-[0_18px_50px_-12px_rgba(0,0,0,0.65)]"
            : "border border-transparent bg-transparent"
        )}
      >
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-cyan-500/25 transition-transform duration-300 group-hover:scale-105">
            <Route className="h-[18px] w-[18px] text-white" strokeWidth={2.5} />
          </span>
          <span className="leading-none">
            <span className="block text-[15px] font-extrabold tracking-wide text-white">ENRUTADOS</span>
            <span className="block text-[10px] font-medium tracking-[0.28em] text-cyan-300/80">VENEZUELA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                active === l.id ? "bg-white/[0.07] text-cyan-300" : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="group hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-2.5 text-[13px] font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-400/40 hover:brightness-110 sm:inline-flex"
          >
            Iniciar un piloto
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-500 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass flex flex-col gap-1 p-3">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-3 text-center text-sm font-bold text-slate-950"
          >
            Iniciar un piloto
          </a>
        </div>
      </div>
    </header>
  );
}
