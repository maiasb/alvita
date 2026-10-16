import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { clinic } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/** Barra fixa só no celular: duas ações de conversão sempre ao alcance do polegar. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={`tel:${clinic.phoneTel}`}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand py-3 font-bold text-brand"
      >
        <PhoneIcon className="size-5" />
        Ligar
      </a>
      <a
        href={whatsappLink(generalMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-[1.6] items-center justify-center gap-2 rounded-full bg-lime py-3 font-bold text-ink"
      >
        <WhatsAppIcon className="size-5" />
        Agendar no WhatsApp
      </a>
    </div>
  );
}
