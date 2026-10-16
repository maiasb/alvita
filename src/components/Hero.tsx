"use client";

import Image from "next/image";
import { useState } from "react";
import { allSpecialties, clinic } from "@/lib/site";
import { generalMessage, specialtyMessage, whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { OpenStatus } from "./OpenStatus";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

function Portrait({ photo, alt, className, sizes }: { photo: string; alt: string; className: string; sizes: string }) {
  return (
    <div className={`absolute overflow-hidden bg-mist ${className}`}>
      <Image src={`/img/medicos/${photo}.png`} alt={alt} fill sizes={sizes} priority className="origin-top scale-[1.32] object-cover object-top" />
    </div>
  );
}

function Tag({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span
      className={`absolute z-20 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] font-bold text-ink shadow-[0_12px_30px_-10px_rgba(14,35,71,.6)] sm:text-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function Hero() {
  const [specialty, setSpecialty] = useState("");

  return (
    <section id="topo">
      <div className="relative isolate overflow-hidden rounded-b-[2.5rem] bg-brand text-white sm:rounded-b-[4.5rem]">
        {/* Anéis do logotipo ao fundo */}
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -right-[20%] -top-[30%] -z-10 w-[85%] max-w-[60rem]"
          aria-hidden
        >
          <circle cx="50" cy="50" r="47" fill="none" stroke="#5EA6DE" strokeOpacity=".35" strokeWidth=".6" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#5EA6DE" strokeOpacity=".25" strokeWidth=".6" />
          <circle cx="50" cy="50" r="29" fill="#2f66b8" fillOpacity=".5" />
        </svg>
        <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-teal/25 blur-2xl" aria-hidden />

        <div className="grid gap-12 px-6 pb-12 pt-10 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10 lg:pb-20 lg:pl-[max(2.5rem,calc((100vw-110rem)/2+2rem))] lg:pr-[3vw] lg:pt-14">
          <div className="lg:max-w-[40rem]">
            <p
              className="rise inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/25"
              style={i(0)}
            >
              <span className="size-2 rounded-full bg-lime" aria-hidden />
              Clínica médica no centro de Castanhal
            </p>

            <h1
              className="rise mt-6 font-display text-[2.55rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl xl:text-[5rem]"
              style={i(1)}
            >
              Sua saúde em boas mãos, com atendimento humanizado em Castanhal.
            </h1>

            <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl" style={i(2)}>
              21 especialidades, exames e odontologia no mesmo endereço. Abrimos às 6h30, de segunda a sábado.
            </p>

            <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={i(3)}>
              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-lime px-7 py-4 text-lg font-bold text-ink shadow-[0_14px_34px_-12px_rgba(166,193,54,.9)] transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
              >
                <WhatsAppIcon className="size-6" />
                Agendar consulta pelo WhatsApp
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-7 py-4 text-lg font-bold transition hover:bg-white hover:text-brand"
              >
                Conhecer especialidades
              </a>
            </div>

            <form
              className="rise mt-8 max-w-xl rounded-3xl bg-white p-4 text-ink shadow-[0_24px_60px_-24px_rgba(0,0,0,.6)]"
              style={i(4)}
              onSubmit={(e) => {
                e.preventDefault();
                if (!specialty) return;
                window.open(whatsappLink(specialtyMessage(specialty)), "_blank", "noopener,noreferrer");
              }}
            >
              <label htmlFor="hero-specialty" className="px-1 font-display text-base font-bold">
                Já sabe a especialidade? Escolha e agende.
              </label>
              <div className="mt-2.5 flex gap-2">
                <select
                  id="hero-specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="min-w-0 flex-1 rounded-2xl border-2 border-mist bg-paper px-4 py-3 text-base font-medium focus:border-brand focus:outline-none"
                >
                  <option value="">Escolha na lista</option>
                  {allSpecialties.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={!specialty}
                  className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-brand px-5 font-bold text-white transition enabled:hover:bg-ink disabled:opacity-40"
                >
                  <span className="hidden sm:inline">Agendar</span>
                  <ArrowIcon className="size-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Colagem: as pessoas da clínica em formas orgânicas */}
          <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[34rem] lg:aspect-[1/0.92] lg:max-w-none" style={i(2)}>
            <svg viewBox="0 0 100 100" className="pointer-events-none absolute -left-[6%] top-[4%] z-0 w-[62%]" aria-hidden>
              <circle cx="50" cy="50" r="47" fill="none" stroke="#A6C136" strokeWidth="2.2" strokeLinecap="round" pathLength={1} className="ring-draw" transform="rotate(-60 50 50)" />
            </svg>

            <Portrait
              photo="carina-costa"
              alt="Dra. Carina Costa, clínica geral da Alvita"
              className="rise left-[4%] top-[8%] z-10 h-[64%] w-[52%] rounded-t-full rounded-b-[2rem] shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]"
              sizes="(min-width:1024px) 22vw, 50vw"
            />
            <Portrait
              photo="cristiane-natividade"
              alt="Dra. Cristiane Natividade, pediatra da Alvita"
              className="rise right-[2%] top-0 z-10 size-[40%] rounded-full shadow-[0_24px_50px_-26px_rgba(0,0,0,.7)]"
              sizes="(min-width:1024px) 16vw, 40vw"
            />
            <div className="rise absolute bottom-[3%] right-0 z-10 h-[42%] w-[47%] overflow-hidden rounded-[2rem] rounded-br-[5rem] ring-4 ring-lime" style={i(4)}>
              <Image
                src="/img/clinica/consultorio-pediatrico.png"
                alt="Consultório pediátrico da Alvita, com mural colorido de sol, elefante e zebra"
                fill
                priority
                sizes="(min-width:1024px) 24vw, 56vw"
                className="object-cover"
              />
            </div>
            <Portrait
              photo="juliana-galvao"
              alt="Dra. Juliana Galvão, dermatologista da Alvita"
              className="rise bottom-[4%] left-[24%] z-20 size-[27%] rounded-full ring-4 ring-sky"
              sizes="(min-width:1024px) 12vw, 28vw"
            />

            <Tag className="left-0 top-[1%] hidden sm:block">Clínica Geral</Tag>
            <Tag className="right-[8%] top-[41%]">Pediatria</Tag>
            <Tag className="bottom-[0%] left-[2%]">Dermatologia</Tag>
          </div>
        </div>

        <dl className="relative border-t border-white/20 bg-ink/25">
          <div className="mx-auto grid max-w-[110rem] gap-x-8 gap-y-4 px-6 py-6 text-[0.95rem] sm:px-10 md:grid-cols-[1.2fr_1.2fr_1fr_auto] md:items-center">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-lime" />
              <div>
                <dt className="sr-only">Endereço</dt>
                <dd className="font-medium">{clinic.street}, {clinic.district}, {clinic.city} - {clinic.state}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 size-5 shrink-0 text-lime" />
              <div>
                <dt className="sr-only">Horário</dt>
                <dd className="font-medium">Seg a sex, 6h30 às 18h30. Sáb, 6h30 às 12h.</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-5 shrink-0 text-lime" />
              <div>
                <dt className="sr-only">Telefone e WhatsApp</dt>
                <dd className="font-semibold">
                  <a href={`tel:${clinic.phoneTel}`} className="underline-offset-4 hover:underline">
                    {clinic.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div>
              <OpenStatus tone="dark" />
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
