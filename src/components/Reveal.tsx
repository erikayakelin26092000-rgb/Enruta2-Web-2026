import type { ReactNode } from "react";
import { useInView } from "../lib/hooks";
import { cn } from "../utils/cn";

type Variant = "up" | "left" | "right" | "zoom";

const initial: Record<Variant, string> = {
  up: "translate-y-10 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
  zoom: "scale-[0.92] opacity-0",
};

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "translate-x-0 translate-y-0 scale-100 opacity-100" : initial[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
