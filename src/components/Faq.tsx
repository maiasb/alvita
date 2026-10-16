import { clinic } from "@/lib/site";
import { PlusIcon } from "./icons";

const faqs = [
  {
    q: "Vocês atendem convênios?",
    a: `Pergunte à recepção pelo WhatsApp ou ligue para ${clinic.phoneDisplay} para saber se o seu convênio é aceito.`,
  },
  {
    q: "Preciso de jejum para os exames?",
    a: "Depende do exame. Ao agendar pelo WhatsApp, peça a orientação de preparo do exame que você vai fazer.",
  },
  {
    q: "Qual o horário de funcionamento?",
    a: "Segunda a sexta, das 6h30 às 18h30. Sábado, das 6h30 às 12h. Domingo fechado.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-mist/70 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.015em] text-ink sm:text-[2.6rem]">
          Dúvidas frequentes
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-ink/10 bg-white open:shadow-[0_18px_36px_-26px_rgba(14,35,71,.5)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <PlusIcon className="size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
