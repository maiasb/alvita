import Image from "next/image";
import { asset } from "@/lib/asset";
import { services, type ServiceIcon } from "@/lib/site";
import { serviceMessage, whatsappLink } from "@/lib/whatsapp";
import { EcgIcon, PhysioIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

const files: Partial<Record<ServiceIcon, string>> = {
  estetoscopio: "estetoscopio-1",
  microscopio: "microscopio-1",
  ultrassom: "ultrassom",
  endoscopia: "endoscopia",
  colonoscopia: "colonoscopia",
  dentista: "cadeira-de-dentista-3",
};

function Icon({ id }: { id: ServiceIcon }) {
  const file = files[id];
  return (
    <span className="grid size-12 place-items-center rounded-xl bg-ink" aria-hidden>
      {file ? (
        <Image src={asset(`/img/servicos/${file}.svg`)} alt="" width={30} height={30} className="size-[1.9rem]" />
      ) : id === "fisioterapia" ? (
        <PhysioIcon className="size-7 text-lime" strokeWidth={1.5} />
      ) : (
        <EcgIcon className="size-7 text-lime" strokeWidth={1.5} />
      )}
    </span>
  );
}

export function Services() {
  return (
    <section id="servicos" className="bg-mist/70 py-20 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title="Tudo que sua saúde precisa"
          text="Consulta e exame no mesmo endereço: do diagnóstico ao tratamento, aqui."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.id}>
              <a
                href={whatsappLink(serviceMessage(s.message))}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_40px_-28px_rgba(14,35,71,.5)]"
              >
                <Icon id={s.id} />
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand">
                  Agendar
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
