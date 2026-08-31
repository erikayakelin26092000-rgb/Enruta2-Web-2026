import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function Section({
  id,
  label,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-20 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-400" />
            {label}
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.7rem] lg:leading-[1.08]">
            {title}
          </h2>
        </Reveal>
        {lead ? (
          <Reveal delay={170}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{lead}</p>
          </Reveal>
        ) : null}
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
