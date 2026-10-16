"use client";

import { useState } from "react";
import { allSpecialties, clinic } from "@/lib/site";
import { generalMessage, specialtyMessage, whatsappLink } from "@/lib/whatsapp";
import { SearchIcon } from "./icons";

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function Specialties() {
  const [q, setQ] = useState("");
  const list = allSpecialties.filter((s) => norm(s).includes(norm(q.trim())));

  return (
    <section id="especialidades" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand">Especialidades</p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
            Encontre o especialista certo
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Digite o que procura e agende direto com nossa equipe.
          </p>

          <label htmlFor="busca-especialidade" className="sr-only">
            Buscar especialidade
          </label>
          <div className="relative mt-6 max-w-md">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" />
            <input
              id="busca-especialidade"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ex.: cardiologia"
              autoComplete="off"
              className="w-full rounded-full border border-ink/15 bg-white py-3.5 pl-12 pr-4 text-base text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
            />
          </div>
        </div>

        <div aria-live="polite">
          {list.length > 0 ? (
            <ul className="flex flex-wrap content-start gap-2.5">
              {list.map((s) => (
                <li key={s}>
                  <a
                    href={whatsappLink(specialtyMessage(s))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-ink/15 bg-white px-4 py-2.5 font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">
              Não encontramos &ldquo;{q}&rdquo; na lista.{" "}
              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand underline underline-offset-4"
              >
                Pergunte pelo WhatsApp
              </a>{" "}
              ou ligue para {clinic.phoneDisplay}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
