import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  FileText,
  FlaskConical,
  Mail,
  Route,
  Send,
  Smartphone,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <footer id="contacto" className="relative scroll-mt-20 overflow-hidden pt-20 sm:pt-28">
      {/* backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.04] to-violet-600/[0.06]" />
      <div className="grid-bg mask-fade-edges absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              ¿Y ahora, qué sigue?
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              ¿Quieres implementar <span className="text-gradient">Enrutados</span> en tu línea?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Cuéntanos tu caso y exploramos juntos un piloto con tu asociación.
            </p>
          </div>
        </Reveal>

        {/* audience cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal delay={80}>
            <div className="glass flex h-full flex-col rounded-3xl border-cyan-400/20 bg-cyan-400/[0.04] p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                <Building2 className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-white">Asociaciones de transporte</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                Iniciemos un piloto con tus unidades: medimos tiempos, adopción y recaudación real en campo.
              </p>
              <a
                href="mailto:contacto@enrutados.com.ve?subject=Quiero%20iniciar%20un%20piloto%20con%20Enrutados"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 hover:shadow-cyan-400/40"
              >
                <Mail className="h-4 w-4" />
                Contactar al equipo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="glass flex h-full flex-col rounded-3xl border-orange-400/20 bg-orange-400/[0.04] p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-400/15 text-orange-300">
                <Smartphone className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-white">Pasajeros</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Pronto disponible en Google Play. Déjanos tu correo y recibe actualizaciones del lanzamiento.
              </p>
              {sent ? (
                <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3.5 text-sm font-bold text-emerald-300">
                  <Check className="h-4 w-4" strokeWidth={3} />
                  ¡Listo! Te avisaremos del lanzamiento.
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/50"
                  />
                  <button
                    type="submit"
                    aria-label="Suscribirse"
                    className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 text-slate-950 shadow-lg shadow-orange-500/25 transition-all hover:brightness-110"
                  >
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="glass flex h-full flex-col rounded-3xl border-violet-400/20 bg-violet-400/[0.04] p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-400/15 text-violet-300">
                <FileText className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-white">Evaluadores técnicos</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                Arquitectura offline-first, tokens JWT RS256, split automático y 74 tests. Solicita acceso a la
                documentación técnica del proyecto.
              </p>
              <a
                href="mailto:contacto@enrutados.com.ve?subject=Solicitud%20de%20documentaci%C3%B3n%20t%C3%A9cnica"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-violet-400/30 bg-violet-400/10 px-5 py-3.5 text-sm font-bold text-violet-200 transition-all hover:-translate-y-0.5 hover:bg-violet-400/20"
              >
                <FlaskConical className="h-4 w-4" />
                Ver documentación
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* bottom bar */}
        <div className="mt-16 border-t border-white/[0.07] py-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-cyan-500/25">
                <Route className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-extrabold tracking-wide text-white">ENRUTADOS VENEZUELA</p>
                <p className="text-[11px] text-slate-500">
                  El transporte urbano, conectado.
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
              <a href="#como-funciona" className="transition-colors hover:text-cyan-300">Cómo funciona</a>
              <a href="#ecosistema" className="transition-colors hover:text-cyan-300">Ecosistema</a>
              <a href="#dinero" className="transition-colors hover:text-cyan-300">Flujo del dinero</a>
              <a href="#seguridad" className="transition-colors hover:text-cyan-300">Seguridad</a>
              <a href="#historia" className="transition-colors hover:text-cyan-300">Historia</a>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <a href="/Enruta2-Web-2026/legal/terminos.html" className="transition-colors hover:text-cyan-300">Términos</a>
              <a href="/Enruta2-Web-2026/legal/privacidad.html" className="transition-colors hover:text-cyan-300">Privacidad</a>
              <a href="/Enruta2-Web-2026/legal/menores.html" className="transition-colors hover:text-cyan-300">Menores</a>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold text-slate-400">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-400" />
              Prototipo funcional — pendiente piloto real
            </span>
          </div>

          <p className="mt-8 text-center text-[11px] text-slate-600">
            © 2026 Enrutados Venezuela — Hecho en Venezuela, para responder a una realidad venezolana.
          </p>
        </div>
      </div>
    </footer>
  );
}
