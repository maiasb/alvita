import Image from "next/image";
import { asset } from "@/lib/asset";
import { clinic } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper pb-28 pt-10 sm:pb-10">
      <div className="mx-auto grid max-w-[90rem] items-center gap-6 px-5 sm:px-8 md:grid-cols-3">
        <Image src={asset("/img/logo.svg")} alt="Alvita" width={530} height={163} className="h-9 w-auto" />
        <p className="text-sm leading-relaxed text-muted md:text-center">
          {clinic.street}, {clinic.district}, {clinic.city} - {clinic.state}
          <br />
          Seg a sex 6h30 às 18h30 · Sáb 6h30 às 12h
        </p>
        <div className="flex items-center gap-4 md:justify-end">
          <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Alvita" className="text-ink hover:text-brand">
            <InstagramIcon className="size-6" />
          </a>
          <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Alvita" className="text-ink hover:text-brand">
            <FacebookIcon className="size-6" />
          </a>
          <span className="text-sm text-muted">© 2026 Alvita</span>
        </div>
      </div>
    </footer>
  );
}
