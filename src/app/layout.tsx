import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { addressLine, clinic } from "@/lib/site";
import "./globals.css";
import { asset } from "@/lib/asset";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const title = "Alvita | Clínica médica em Castanhal, com 21 especialidades";
const description =
  "Consultas, exames, ultrassonografia, endoscopia, odontologia e fisioterapia no centro de Castanhal. Abrimos às 6h30. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "pt_BR", type: "website" },
  icons: { icon: asset("/img/favicon.png"), apple: asset("/img/favicon.png") },
};

export const viewport: Viewport = {
  themeColor: "#2354a1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  telephone: clinic.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.street,
    addressLocality: clinic.city,
    addressRegion: clinic.state,
    postalCode: clinic.zip,
    addressCountry: "BR",
  },
  description: addressLine,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "18:30",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "06:30", closes: "12:00" },
  ],
  sameAs: [clinic.instagram, clinic.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${bricolage.variable} h-full`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
