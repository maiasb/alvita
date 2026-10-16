import Image from "next/image";
import { services, type ServiceIcon } from "@/lib/site";
import { serviceMessage, whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon, EcgIcon, PhysioIcon } from "./icons";

const files: Partial<Record<ServiceIcon, string>> = {
  estetoscopio: "estetoscopio-1",
  microscopio: "microscopio-1",
  ultrassom: "ultrassom",
  endoscopia: "endoscopia",
  colonoscopia: "colonoscopia",
  dentista: "cadeira-de-dentista-3",
};

/** Cada serviço tem cor, tamanho e (quando há foto real) imagem própria. */
const looks: Record<ServiceIcon, { tile: string; bg: string; text: string; photo?: string }> = {
  estetoscopio: { tile: "sm:col-span-2 lg:row-span-2", bg: "bg-lime", text: "text-ink" },
  microscopio: { tile: "", bg: "bg-ink", text: "text-white", photo: "/img/clinica/clinica-3.png" },
  ultrassom: { tile: "", bg: "bg-sky", text: "text-ink" },
  endoscopia: { tile: "", bg: "bg-white", text: "text-ink" },
  colonoscopia: { tile: "", bg: "bg-teal", text: "text-ink" },
  fisioterapia: { tile: "", bg: "bg-white", text: "text-ink" },
  dentista: { tile: "sm:col-span-2 lg:row-span-2", bg: "bg-ink", text: "text-white", photo: "/img/clinica/clinica-5.png" },
  eletro: { tile: "lg:row-span-2", bg: "bg-brand", text: "text-white" },
};

function Icon({ id }: { id: ServiceIcon }) {
  const file = files[id];
  const chip = "grid size-12 shrink-0 place-items-center rounded-2xl bg-ink";
  return (
    <span className={chip} aria-hidden>
      {file ? (
        <Image src={`/img/servicos/${file}.svg`} alt="" width={36} height={36} className="size-8" />
      ) : id === "fisioterapia" ? (
        <PhysioIcon className="size-8 text-lime" strokeWidth={1.5} />
      ) : (
        <EcgIcon className="size-8 text-lime" strokeWidth={1.5} />
      )}
    </span>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl">
              Consulta e exame no mesmo endereço.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Você faz a consulta e, se o médico pedir, o exame sai da mesma clínica. Menos deslocamento, menos espera.
            </p>
          </div>

          <ul className="grid auto-rows-[15rem] gap-4 xl:auto-rows-[18rem] xl:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const l = looks[s.id];
              const big = s.id === "estetoscopio" || s.id === "dentista";
              return (
                <li key={s.id} className={l.tile}>
                  <a
                    href={whatsappLink(serviceMessage(s.message))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(14,35,71,.6)] ${l.bg} ${l.text} ${
                      l.bg === "bg-white" ? "ring-1 ring-ink/10" : ""
                    }`}
                  >
                    {l.photo && (
                      <>
                        <Image
                          src={l.photo}
                          alt=""
                          fill
                          sizes="(min-width:1024px) 40vw, 100vw"
                          className="-z-20 object-cover transition duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" aria-hidden />
                      </>
                    )}
                    {s.id === "estetoscopio" && (
                      <svg viewBox="0 0 100 100" className="absolute -right-[18%] -top-[14%] -z-10 w-[85%] text-ink/15" aria-hidden>
                        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="50" cy="50" r="22" fill="currentColor" fillOpacity=".5" />
                      </svg>
                    )}
                    <Icon id={s.id} />
                    <div>
                      <h3 className={`font-display font-extrabold tracking-tight ${big ? "text-4xl sm:text-5xl" : "text-2xl"}`}>
                        {s.title}
                      </h3>
                      <p className={`mt-2 max-w-sm leading-snug ${big ? "text-lg" : ""} opacity-85`}>{s.text}</p>
                      <span className="mt-4 inline-flex items-center gap-2 font-bold">
                        Agendar
                        <ArrowIcon className="size-5 transition-transform group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
