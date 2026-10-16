import Image from "next/image";
import { team } from "@/lib/site";

const rings = ["ring-lime", "ring-sky", "ring-teal"];

export function Team() {
  return (
    <section id="equipe" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 xl:px-12">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.025em] text-ink sm:text-6xl">
            Quem cuida de você na Alvita.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Médicos, dentistas e fisioterapeutas que atendem na clínica. Para marcar com um deles, chame a recepção
            pelo WhatsApp.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-7 gap-y-10 pb-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {team.map((p, idx) => (
            <li key={p.photo} className="group xl:odd:translate-y-10">
              <div
                className={`relative aspect-square overflow-hidden rounded-t-full rounded-b-[1.5rem] bg-mist ring-4 ring-offset-4 ring-offset-paper transition duration-300 group-hover:-translate-y-1.5 ${rings[idx % 3]}`}
              >
                <Image
                  src={`/img/medicos/${p.photo}.png`}
                  alt={`${p.name}, ${p.role}`}
                  fill
                  sizes="(min-width:1280px) 14vw, (min-width:1024px) 22vw, (min-width:640px) 30vw, 45vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-display text-lg font-bold leading-tight text-ink">{p.name}</p>
              <p className="text-[0.95rem] text-muted">{p.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
