import Image from "next/image";
import { addressLine, clinic } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-paper pb-28 pt-12 sm:pb-12">
      <div className="mx-auto flex max-w-[110rem] flex-col gap-6 px-5 sm:px-8 xl:px-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image src="/img/logo.svg" alt="Alvita" width={530} height={163} className="h-9 w-auto" />
        </div>
        <p className="text-muted">
          {addressLine}
          <br />
          <a href={`tel:${clinic.phoneTel}`} className="font-semibold text-ink">
            {clinic.phoneDisplay}
          </a>
        </p>
        <p className="text-sm text-muted">Alvita, a sua clínica.</p>
      </div>
    </footer>
  );
}
