"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const slides = [
  { src: "/img/banner/clinica.png", alt: "Alvita: a sua clínica de especialidades médicas e odontológicas. Agende sua consulta" },
  { src: "/img/banner/estacionamento.webp", alt: "Fachada da Alvita com estacionamento próprio, na Trav. Quintino Bocaiúva, 2334, Centro, Castanhal" },
  { src: "/img/banner/odontologia.png", alt: "Odontologia na Alvita: especialistas em sorrisos, com o Dr. Ray Melo e a Dra. Mylenna Reis" },
];

const INTERVAL_MS = 6000;

/** Faixa de banners em rotação, como no site original. Só aparece de md para cima: no celular o texto embutido ficaria ilegível. */
export function HeroBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((n) => (n + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Destaques da Alvita"
      className="relative hidden bg-[#ebecf0] md:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-[2560/500] w-full max-w-[160rem] overflow-hidden">
        {slides.map((s, n) => (
          <Image
            key={s.src}
            src={asset(s.src)}
            alt={s.alt}
            fill
            priority={n === 0}
            sizes="100vw"
            aria-hidden={n !== active}
            className={`object-cover transition-opacity duration-700 ${n === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {slides.map((s, n) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Mostrar banner ${n + 1} de ${slides.length}`}
            aria-current={n === active}
            onClick={() => setActive(n)}
            className={`h-2.5 rounded-full transition-all ${n === active ? "w-7 bg-brand" : "w-2.5 bg-brand/35 hover:bg-brand/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
