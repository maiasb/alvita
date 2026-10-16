import { specialtyGroups } from "@/lib/site";
import { specialtyMessage, whatsappLink } from "@/lib/whatsapp";

const panels = [
  "bg-lime/30",
  "bg-sky/25",
  "bg-teal/30",
  "bg-sky/25",
  "bg-lime/30",
  "bg-teal/30",
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 xl:px-12">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <p className="font-display text-[7rem] font-extrabold leading-[0.8] tracking-[-0.06em] text-brand sm:text-[10rem]" aria-hidden>
            21
          </p>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.025em] text-ink sm:text-6xl">
              especialidades para a família inteira.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Toque na especialidade para abrir o WhatsApp com a mensagem já escrita. A equipe responde com os
              horários disponíveis.
            </p>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4">
          {specialtyGroups.map((g, idx) => (
            <div
              key={g.title}
              className={`break-inside-avoid rounded-[2rem] p-6 sm:p-7 ${panels[idx]} ${idx % 2 ? "rounded-tr-[4rem]" : "rounded-tl-[4rem]"}`}
            >
              <h3 className="font-display text-2xl font-extrabold text-ink">{g.title}</h3>
              <p className="mt-1 text-ink/70">{g.note}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <li key={item}>
                    <a
                      href={whatsappLink(specialtyMessage(item))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-white px-4 py-2.5 font-semibold text-ink shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
