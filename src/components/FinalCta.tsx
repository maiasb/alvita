import { addressLine, clinic } from "@/lib/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { CheckIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

const perks = ["Atendimento a partir das 6h30", "Consulta e exames no mesmo endereço", "Estacionamento na frente da clínica"];

export function FinalCta() {
  return (
    <section id="contato" className="bg-paper px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-[90rem] gap-10 rounded-[2rem] bg-brand p-8 text-white sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="max-w-lg font-display text-3xl font-semibold leading-[1.1] tracking-[-0.015em] sm:text-[2.8rem]">
            Cuide da sua saúde ainda esta semana.
          </h2>
          <ul className="mt-6 space-y-2.5">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-white/90">
                <CheckIcon className="size-5 shrink-0 text-lime" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 font-bold text-ink transition hover:brightness-95"
          >
            <WhatsAppIcon className="size-5" />
            Agendar pelo WhatsApp
          </a>
        </div>

        <address className="space-y-5 rounded-3xl bg-white/10 p-6 not-italic ring-1 ring-white/20 sm:p-7">
          <div className="flex gap-3.5">
            <PinIcon className="mt-0.5 size-6 shrink-0 text-lime" />
            <p className="leading-relaxed">
              {clinic.street}
              <br />
              {clinic.district}, {clinic.city} - {clinic.state}, {clinic.zip}
              <br />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-bold text-lime underline underline-offset-4"
              >
                Ver rota no mapa
              </a>
            </p>
          </div>
          <div className="flex gap-3.5">
            <PhoneIcon className="mt-0.5 size-6 shrink-0 text-lime" />
            <p>
              <a href={`tel:${clinic.phoneTel}`} className="font-display text-2xl font-semibold">
                {clinic.phoneDisplay}
              </a>
              <br />
              <span className="text-white/75">Ligação e WhatsApp</span>
            </p>
          </div>
          <p className="sr-only">{addressLine}</p>
        </address>
      </div>
    </section>
  );
}
