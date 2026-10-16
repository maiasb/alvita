import Image from "next/image";
import { gallery } from "@/lib/site";

const cards = [
  { n: 0, title: "Fachada e estacionamento", text: "Estacionamento na frente, no centro de Castanhal." },
  { n: 1, title: "Recepção ampla", text: "Espaço confortável para aguardar o seu atendimento." },
  { n: 2, title: "Laboratório", text: "Coleta e análises feitas por profissionais da clínica." },
];

export function Clinic() {
  return (
    <section id="clinica" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.015em] text-ink sm:text-[2.6rem]">
          Conheça a clínica por dentro
        </h2>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c) => {
            const g = gallery[c.n];
            return (
              <li key={c.title} className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width:768px) 30vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-muted">{c.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
