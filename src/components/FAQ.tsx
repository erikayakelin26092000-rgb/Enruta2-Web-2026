import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "¿Enrutados es una app de pagos? ¿Necesita licencia SUDEBAN?",
    a: "No. El dinero viaja directo del pasajero a la cuenta de la asociación mediante Pago Móvil; Enrutados no toca la masa monetaria. El saldo funciona como un pasaje prepagado de bucle cerrado — igual que la tarjeta del Metro de Caracas — no como dinero electrónico ni depósito bancario.",
  },
  {
    q: "¿Qué pasa si el colector no tiene señal?",
    a: "La unidad sigue operando: el colector precarga un pack de tokens offline al iniciar su jornada y valida cada QR localmente verificando la firma RSA. Al recuperar conexión, todo se sincroniza automáticamente. El GPS en tiempo real sí requiere conexión constante, pero es independiente del cobro.",
  },
  {
    q: "¿Se puede copiar o reutilizar el QR?",
    a: "Los tickets usan tokens dinámicos de corta duración y mecanismos anti-replay para reducir el riesgo de reutilización, y cada ticket queda invalidado tras su redención. Existe un riesgo residual documentado: capturar un QR antes de su redención tendría un impacto máximo de un viaje individual. El hardening futuro (proof-of-possession) busca reducirlo aún más.",
  },
  {
    q: "¿El pasajero necesita banca digital?",
    a: "No obligatoriamente. Puede recargar por Pago Móvil o en efectivo en taquilla o kiosco. El efectivo no desaparece del ecosistema: solo sale del vehículo.",
  },
  {
    q: "¿Qué gana el conductor o colector?",
    a: "No recibe ni administra efectivo: solo valida el QR. Su 10% de comisión se liquida automáticamente al cierre de caja de las 7:00 PM, y toda su jornada queda registrada digitalmente.",
  },
  {
    q: "¿Las asociaciones tienen que pagar?",
    a: "En la etapa de piloto, no. A escala, el modelo contempla un plan de mantenimiento: el 5% de la plataforma se reinvierte en mantenimiento y capacitación.",
  },
  {
    q: "¿Funciona en cualquier teléfono?",
    a: "Las apps están optimizadas para Android 7.0 o superior — un estándar accesible en el parque de teléfonos de Venezuela. No se necesita infraestructura especial, solo un smartphone común.",
  },
  {
    q: "¿Cuándo estará disponible la app del pasajero?",
    a: "Pronto en Google Play, alineada con la prueba piloto. Si representas a una asociación de transporte, puedes contactarnos para adelantar el proceso.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      label="Preguntas frecuentes"
      title={
        <>
          Lo que todos preguntan, <span className="text-gradient">respondido con honestidad.</span>
        </>
      }
    >
      <div className="mx-auto max-w-3xl space-y-3.5">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="faq glass group rounded-2xl transition-colors duration-300">
              <summary className="flex items-center gap-4 p-5 sm:p-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <MessageCircleQuestion className="h-4.5 w-4.5" />
                </span>
                <span className="flex-1 text-[15px] font-bold text-white">{f.q}</span>
                <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-slate-500" />
              </summary>
              <div className="px-5 pb-6 pl-[4.25rem] sm:px-6 sm:pl-[4.75rem]">
                <p className="text-sm leading-relaxed text-slate-400">{f.a}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
