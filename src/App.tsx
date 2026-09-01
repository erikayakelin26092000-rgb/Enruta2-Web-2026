import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import WhatIsIt from "./components/WhatIsIt";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Ecosystem from "./components/Ecosystem";
import Benefits from "./components/Benefits";
import MoneyFlow from "./components/MoneyFlow";
import Offline from "./components/Offline";
import TrustLimits from "./components/TrustLimits";
import Security from "./components/Security";
import TechStack from "./components/TechStack";
import Roadmap from "./components/Roadmap";
import History from "./components/History";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useScrollProgress } from "./lib/hooks";

export default function App() {
  const progress = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-ink font-sans text-slate-300">
      {/* scroll progress */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500"
        style={{ transform: `scaleX(${progress})` }}
      />

      <Navbar />

      <main>
        {/* BLOQUE 1: ¿De qué se trata esto? */}
        <Hero />

        {/* BLOQUE 2: ¿Para quién es? */}
        <ForWhom />

        {/* BLOQUE 3: ¿Qué es y qué no es? */}
        <WhatIsIt />

        {/* BLOQUE 4: ¿Qué problema resuelve? */}
        <Problem />

        {/* BLOQUE 5: ¿Cómo funciona? */}
        <HowItWorks />

        {/* BLOQUE 6: El ecosistema */}
        <Ecosystem />

        {/* BLOQUE 7: ¿Qué gana cada actor? */}
        <Benefits />

        {/* BLOQUE 8: Flujo del dinero */}
        <MoneyFlow />

        {/* BLOQUE 9: Conectividad */}
        <Offline />

        {/* BLOQUE 10: ¿Qué garantizan? (Confianza + límites) */}
        <TrustLimits />

        {/* BLOQUE 11: ¿Cómo está construido? (Tecnología) */}
        <Security />
        <TechStack />

        {/* BLOQUE 12: ¿Cuál es el siguiente paso? (CTA) */}
        <Roadmap />

        {/* BLOQUE 13: Historia + FAQ */}
        <History />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
