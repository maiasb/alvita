"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/asset";
import { team } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { SectionHeader } from "./SectionHeader";

const FIRST = 8;

export function Team() {
  const [all, setAll] = useState(false);
  const list = all ? team : team.slice(0, FIRST);

  return (
    <section id="equipe" className="bg-mist/70 py-20 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <SectionHeader
          eyebrow="Equipe"
          title="Especialistas que cuidam de você"
          text="Médicos, dentistas e fisioterapeutas que atendem na clínica, com atendimento próximo e humano."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((p, idx) => (
            <li key={p.photo}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(14,35,71,.5)]">
                <div className="relative aspect-[4/4.3] overflow-hidden bg-mist">
                  <Image
                    src={asset(`/img/medicos/${p.photo}.png`)}
                    alt={`${p.name}, ${p.role}`}
                    fill
                    sizes="(min-width:1024px) 22vw, 46vw"
                    loading={idx < 4 ? "eager" : "lazy"}
                    className="origin-top scale-[1.18] object-cover object-top transition duration-500 group-hover:scale-[1.24]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">{p.name}</h3>
                  <p className="mt-1 flex-1 text-[0.95rem] text-muted">{p.role}</p>
                  <a
                    href={whatsappLink(`Olá! Gostaria de agendar com ${p.name} (${p.role}) na Alvita.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-bold text-brand"
                  >
                    Agendar <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {team.length > FIRST && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setAll((v) => !v)}
              aria-expanded={all}
              className="rounded-full border-2 border-brand px-7 py-3 font-bold text-brand transition hover:bg-brand hover:text-white"
            >
              {all ? "Mostrar menos" : `Ver toda a equipe (${team.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
