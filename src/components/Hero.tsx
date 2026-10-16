import Image from "next/image";
import { asset } from "@/lib/asset";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { ClockIcon, ShieldIcon, WhatsAppIcon } from "./icons";
import { OpenStatus } from "./OpenStatus";

const stats = [
  { value: "21", label: "especialidades" },
  { value: "22", label: "profissionais" },
  { value: "6h30", label: "abertura, seg a sáb" },
];

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="topo" className="bg-paper">
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <p
            className="rise inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-sm font-semibold text-brand"
            style={i(0)}
          >
            <ShieldIcon className="size-4" />
            Clínica médica em Castanhal
          </p>

          <h1
            className="rise mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl xl:text-[4.25rem]"
            style={i(1)}
          >
            Sua saúde em boas mãos,{" "}
            <em className="font-medium text-brand">com atendimento humanizado em Castanhal.</em>
          </h1>

          <p className="rise mt-6 max-w-lg text-lg leading-relaxed text-muted" style={i(2)}>
            21 especialidades, exames, endoscopia e odontologia no mesmo endereço. Agende pelo WhatsApp e escolha o
            melhor horário.
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={i(3)}>
            <a
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-base font-bold text-ink shadow-[0_14px_30px_-14px_rgba(166,193,54,1)] transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
            >
              <WhatsAppIcon className="size-5" />
              Agendar consulta pelo WhatsApp
            </a>
            <a href="#especialidades" className="font-bold text-brand underline-offset-4 hover:underline">
              Conhecer especialidades &rarr;
            </a>
          </div>

          <dl className="rise mt-10 flex max-w-lg border-t border-ink/10 pt-6" style={i(4)}>
            {stats.map((s, n) => (
              <div key={s.label} className={`pr-6 ${n > 0 ? "border-l border-ink/10 pl-6" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-ink">{s.value}</dd>
                <dd className="text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative mx-auto w-full max-w-lg lg:max-w-none" style={i(2)}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-mist shadow-[0_40px_80px_-40px_rgba(14,35,71,.55)]">
            <Image
              src={asset("/img/clinica/consultorio-pediatrico.png")}
              alt="Consultório pediátrico da Alvita, com mural colorido de sol, elefante e zebra"
              fill
              priority
              sizes="(min-width:1024px) 45vw, 90vw"
              className="object-cover object-[25%_50%]"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-18px_rgba(14,35,71,.5)] sm:-left-6">
            <span className="grid size-11 place-items-center rounded-xl bg-mist text-brand">
              <ClockIcon className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Horário de hoje</p>
              <OpenStatus />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
