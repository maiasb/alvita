"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { clinic } from "@/lib/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { asset } from "@/lib/asset";

const links = [
  { href: "#servicos", label: "Exames e serviços" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#clinica", label: "A clínica" },
  { href: "#contato", label: "Como chegar" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(14,35,71,.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[110rem] items-center justify-between gap-6 px-5 sm:px-8 xl:px-12">
        <a href="#topo" aria-label="Alvita, início" className="shrink-0">
          <Image src={asset("/img/logo.svg")} alt="Alvita" width={530} height={163} priority className="h-10 w-auto sm:h-11" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink/80 transition-colors hover:bg-mist hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${clinic.phoneTel}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-brand xl:flex"
          >
            <PhoneIcon className="size-4.5" />
            {clinic.phoneDisplay}
          </a>
          <a
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-[0.95rem] font-bold text-ink transition hover:brightness-95 active:scale-[.98] sm:inline-flex"
          >
            <WhatsAppIcon className="size-5" />
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-mist lg:hidden"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ink/10 bg-paper px-5 pb-6 pt-3 lg:hidden"
      >
        <nav aria-label="Menu móvel" className="flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-3.5 text-lg font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${clinic.phoneTel}`}
          className="mt-4 flex items-center gap-2 text-lg font-semibold text-brand"
        >
          <PhoneIcon className="size-5" />
          {clinic.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
