import Image from "next/image";
import { gallery } from "@/lib/site";

export function Clinic() {
  const [facade, ...rest] = gallery;
  return (
    <section id="clinica" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 xl:px-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
            Um lugar pensado para você ficar à vontade.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Recepção ampla, consultórios equipados, laboratório, odontologia e uma lanchonete para a espera. Tem
            estacionamento na frente.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[2rem] rounded-tl-[7rem] md:col-span-4 md:row-span-2 md:aspect-auto md:min-h-[26rem]">
            <Image
              src={facade.src}
              alt={facade.alt}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-lime px-4 py-2 font-bold text-ink shadow-lg">
              Estacionamento na frente
            </figcaption>
          </figure>
          {rest.slice(0, 2).map((g, n) => (
            <figure key={g.src} className={`relative aspect-[16/10] overflow-hidden md:col-span-2 md:aspect-auto ${["rounded-[2rem] rounded-tr-[5rem]", "rounded-[2rem] rounded-br-[5rem]"][n]}`}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.04]"
              />
            </figure>
          ))}
          {rest.slice(2).map((g, n) => (
            <figure key={g.src} className={`relative aspect-[16/10] overflow-hidden md:col-span-2 ${["rounded-[2rem] rounded-bl-[5rem]", "rounded-[2rem] rounded-tl-[5rem]", "rounded-[2rem] rounded-br-[5rem]"][n]}`}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
