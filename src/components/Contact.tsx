"use client";

import { useState } from "react";
import { clinic, hours } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { OpenStatus } from "./OpenStatus";

const subjects = ["Agendar consulta", "Agendar exame", "Informações gerais", "Outro assunto"];

const field =
  "mt-1.5 w-full rounded-2xl border-2 border-white/15 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-white/45 focus:border-lime focus:outline-none";

export function Contact() {
  const [error, setError] = useState("");

  return (
    <section id="contato" className="bg-brand py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-[110rem] gap-12 px-5 sm:px-8 xl:px-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
            Venha nos visitar ou fale com a gente agora.
          </h2>

          <address className="mt-8 space-y-6 not-italic">
            <div className="flex gap-4">
              <PinIcon className="mt-1 size-6 shrink-0 text-lime" />
              <p className="text-lg leading-relaxed">
                {clinic.street}
                <br />
                {clinic.district}, {clinic.city} - {clinic.state}, {clinic.zip}
                <br />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-lime underline underline-offset-4"
                >
                  Abrir rota no mapa
                </a>
              </p>
            </div>

            <div className="flex gap-4">
              <PhoneIcon className="mt-1 size-6 shrink-0 text-lime" />
              <p className="text-lg">
                <a href={`tel:${clinic.phoneTel}`} className="font-display text-3xl font-extrabold">
                  {clinic.phoneDisplay}
                </a>
                <br />
                <span className="text-white/70">Ligação e WhatsApp, no mesmo número.</span>
              </p>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-5">
              <OpenStatus tone="dark" />
              <table className="mt-3 w-full text-left text-[1.02rem]">
                <caption className="sr-only">Horário de atendimento</caption>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.label} className="border-t border-white/10 first:border-0">
                      <th scope="row" className="py-2 pr-4 font-medium text-white/80">
                        {h.label}
                      </th>
                      <td className="py-2 text-right font-semibold">{h.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-3">
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Alvita"
                className="grid size-12 place-items-center rounded-full border border-white/20 transition hover:border-lime hover:text-lime"
              >
                <InstagramIcon className="size-6" />
              </a>
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Alvita"
                className="grid size-12 place-items-center rounded-full border border-white/20 transition hover:border-lime hover:text-lime"
              >
                <FacebookIcon className="size-6" />
              </a>
            </div>
          </address>
        </div>

        <div className="space-y-6">
          <form
            noValidate
            className="rounded-[2rem] bg-white/[0.06] p-6 ring-1 ring-white/12 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = String(data.get("nome") ?? "").trim();
              const subject = String(data.get("assunto") ?? "");
              const message = String(data.get("mensagem") ?? "").trim();
              if (!name) {
                setError("Escreva seu nome para a equipe saber com quem falar.");
                return;
              }
              setError("");
              const text = [
                `Olá! Meu nome é ${name}.`,
                `Assunto: ${subject}.`,
                message,
              ]
                .filter(Boolean)
                .join("\n");
              window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
            }}
          >
            <h3 className="font-display text-2xl font-bold">Envie uma mensagem</h3>
            <p className="mt-1 text-white/70">Ao enviar, abrimos o WhatsApp com o texto pronto para você confirmar.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="font-semibold">
                  Seu nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "nome-erro" : undefined}
                  className={field}
                  placeholder="Como podemos te chamar?"
                />
                {error && (
                  <p id="nome-erro" role="alert" className="mt-2 text-sm font-medium text-lime">
                    {error}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="assunto" className="font-semibold">
                  Assunto
                </label>
                <select id="assunto" name="assunto" className={field}>
                  {subjects.map((s) => (
                    <option key={s} value={s} className="text-ink">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="font-semibold">
                  Mensagem <span className="font-normal text-white/60">(opcional)</span>
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className={field}
                  placeholder="Conte o que você precisa"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-lime px-7 py-4 text-lg font-bold text-ink transition hover:brightness-95 active:scale-[.99]"
            >
              <WhatsAppIcon className="size-6" />
              Enviar pelo WhatsApp
            </button>
          </form>

          <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/12">
            <iframe
              title="Mapa com a localização da Alvita em Castanhal"
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
