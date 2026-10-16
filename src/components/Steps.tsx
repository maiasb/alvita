import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

const steps = [
  { title: "Chame no WhatsApp", text: "Diga a especialidade ou o exame que você precisa." },
  { title: "Escolha o horário", text: "A equipe responde com os horários disponíveis." },
  { title: "Seja atendido", text: "Consulta e exames no mesmo endereço, no centro de Castanhal." },
];

export function Steps() {
  return (
    <section id="como-agendar" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.015em] sm:text-[2.6rem]">Agendar é simples assim</h2>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, n) => (
            <li key={s.title} className="rounded-3xl border border-white/15 p-7">
              <p className="font-display text-5xl font-medium text-lime" aria-hidden>
                {String(n + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>

        <a
          href={whatsappLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 font-bold text-ink transition hover:brightness-95"
        >
          <WhatsAppIcon className="size-5" />
          Começar agora
        </a>
      </div>
    </section>
  );
}
