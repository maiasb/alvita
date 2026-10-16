import { asset } from "./asset";

export const clinic = {
  name: "Alvita",
  tagline: "A sua clínica",
  phoneDisplay: "(91) 3197-2525",
  phoneTel: "+559131972525",
  whatsapp: "559131972525",
  street: "Tv. Quintino Bocaiúva, 2334",
  district: "Centro",
  city: "Castanhal",
  state: "PA",
  zip: "68743-010",
  instagram: "https://instagram.com/alvitacastanhal",
  facebook: "https://facebook.com/alvitacastanhal",
  mapsQuery: "Alvita Clínica Tv. Quintino Bocaiúva 2334 Castanhal PA",
} as const;

export const addressLine = `${clinic.street} · ${clinic.district}, ${clinic.city} - ${clinic.state}`;

/** Horário de funcionamento. `day` segue Date#getDay (0 = domingo). Horas em minutos desde 00:00. */
export const hours = [
  { label: "Segunda a sexta", days: [1, 2, 3, 4, 5], open: 6 * 60 + 30, close: 18 * 60 + 30, text: "6h30 às 18h30" },
  { label: "Sábado", days: [6], open: 6 * 60 + 30, close: 12 * 60, text: "6h30 às 12h" },
  { label: "Domingo", days: [0], open: 0, close: 0, text: "Fechado" },
] as const;

export type SpecialtyGroup = { title: string; note: string; items: string[] };

export const specialtyGroups: SpecialtyGroup[] = [
  {
    title: "Clínica e família",
    note: "Para começar e acompanhar",
    items: ["Clínica Médica", "Medicina de Família", "Geriatria", "Pediatria"],
  },
  {
    title: "Saúde da mulher",
    note: "Da consulta de rotina ao pré-natal",
    items: ["Ginecologia", "Obstetrícia", "Mastologia"],
  },
  {
    title: "Coração e circulação",
    note: "Pressão, veias e sangue",
    items: ["Cardiologia", "Angiologia", "Hematologia"],
  },
  {
    title: "Digestão e metabolismo",
    note: "Do intestino ao hormônio",
    items: ["Gastroenterologia", "Proctologia", "Endocrinologia", "Nutrição"],
  },
  {
    title: "Pele, respiração e sentidos",
    note: "Pele, nariz, garganta e pulmão",
    items: ["Dermatologia", "Otorrinolaringologia", "Pneumologia"],
  },
  {
    title: "Movimento e mente",
    note: "Ossos, articulações e emoções",
    items: ["Ortopedia", "Reumatologia", "Fisioterapia", "Psicologia"],
  },
];

export const allSpecialties = specialtyGroups.flatMap((g) => g.items);

export type ServiceIcon =
  | "estetoscopio"
  | "microscopio"
  | "ultrassom"
  | "endoscopia"
  | "colonoscopia"
  | "dentista"
  | "fisioterapia"
  | "eletro";

export const services: { id: ServiceIcon; title: string; text: string; message: string }[] = [
  {
    id: "estetoscopio",
    title: "Consultas",
    text: "Médicos de 21 especialidades atendem no mesmo endereço, com hora marcada.",
    message: "uma consulta",
  },
  {
    id: "microscopio",
    title: "Exames laboratoriais",
    text: "Peça o seu exame de laboratório e saiba como agendar.",
    message: "um exame laboratorial",
  },
  {
    id: "ultrassom",
    title: "Ultrassonografia",
    text: "Inclui ultrassom 3D e 4D.",
    message: "uma ultrassonografia",
  },
  {
    id: "endoscopia",
    title: "Endoscopia",
    text: "Exame do aparelho digestivo alto, com agendamento pelo WhatsApp.",
    message: "uma endoscopia",
  },
  {
    id: "colonoscopia",
    title: "Colonoscopia",
    text: "Exame do intestino, com orientação de preparo antes de agendar.",
    message: "uma colonoscopia",
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    text: "Reabilitação e cuidado com o movimento, com profissionais da casa.",
    message: "fisioterapia",
  },
  {
    id: "dentista",
    title: "Odontologia",
    text: "Dentista, ortodontia e endodontia na própria clínica.",
    message: "uma consulta de odontologia",
  },
  {
    id: "eletro",
    title: "Eletrocardiograma",
    text: "Avaliação do ritmo do coração, sem precisar ir a outro lugar.",
    message: "um eletrocardiograma",
  },
];

export const team: { name: string; role: string; photo: string }[] = [
  { name: "Dr. Ray Melo", role: "Ortodontia", photo: "ray-melo" },
  { name: "Dra. Juliana Galvão", role: "Dermatologia", photo: "juliana-galvao" },
  { name: "Dra. Eduarda de Carvalho", role: "Ginecologia e Obstetrícia", photo: "eduarda-carvalho" },
  { name: "Dr. Zacarias Farias", role: "Gastroenterologia", photo: "zacarias-farias" },
  { name: "Dr. Adriano Thiesen", role: "Ultrassonografia", photo: "adriano-thiesen" },
  { name: "Dra. Julimar Benedita", role: "Reumatologia", photo: "julimar-benedita" },
  { name: "Dra. Elis Begot", role: "Endocrinologia", photo: "elis-begot" },
  { name: "Dr. Bernardo Martins", role: "Ultrassonografia", photo: "bernardo-martins" },
  { name: "Dr. Jean Carlos", role: "Reumatologia", photo: "jean-carlos" },
  { name: "Dra. Carina Costa", role: "Clínica Geral", photo: "carina-costa" },
  { name: "Dra. Tayná Vale", role: "Ultrassonografia", photo: "tayna-vale" },
  { name: "Dra. Cristiane Natividade", role: "Pediatria", photo: "cristiane-natividade" },
  { name: "Dra. Evilin Fragoso", role: "Otorrinolaringologia", photo: "evilin-fragoso" },
  { name: "Dra. Dhara Hanna", role: "Clínica Geral", photo: "dhara-hanna" },
  { name: "Laís Barros", role: "Fisioterapia", photo: "lais-barros" },
  { name: "Dr. Murilo Botelho", role: "Ultrassonografia", photo: "murilo-botelho" },
  { name: "Lene Fernandes", role: "Fisioterapia", photo: "lene-fernandes" },
  { name: "Dra. Mylenna Reis", role: "Endodontia", photo: "mylenna-reis" },
  { name: "Dr. Reli Maders", role: "Ortopedia", photo: "reli-maders" },
  { name: "Dra. Giselle", role: "Odontopediatria", photo: "giselle" },
  { name: "Dr. Marcos Bruno", role: "Cirurgia dentária", photo: "marcos-bruno" },
  { name: "Dra. Jéssica Seibert", role: "Gastroenterologia", photo: "jessica-seibert" },
];

export const gallery = [
  { src: asset("/img/clinica/clinica-4.png"), alt: "Fachada da Alvita, verde e azul, com estacionamento na frente", w: 1010, h: 716 },
  { src: asset("/img/clinica/clinica-2.png"), alt: "Recepção ampla com cadeiras e TVs, com pacientes aguardando", w: 1009, h: 716 },
  { src: asset("/img/clinica/clinica-3.png"), alt: "Profissional do laboratório manuseando amostras", w: 675, h: 479 },
  { src: asset("/img/clinica/clinica-5.png"), alt: "Atendimento odontológico no consultório da clínica", w: 677, h: 480 },
  { src: asset("/img/clinica/consultorio-pediatrico.png"), alt: "Consultório pediátrico com mural colorido de sol e animais", w: 1010, h: 716 },
  { src: asset("/img/clinica/clinica-6.png"), alt: "Lanchonete da clínica com geladeira e vitrines de lanches", w: 675, h: 479 },
] as const;
