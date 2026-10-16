import { clinic } from "./site";

export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const generalMessage = "Olá! Gostaria de agendar um atendimento na Alvita.";

export const specialtyMessage = (specialty: string) =>
  `Olá! Gostaria de agendar uma consulta de ${specialty} na Alvita.`;

export const serviceMessage = (what: string) =>
  `Olá! Gostaria de agendar ${what} na Alvita.`;
