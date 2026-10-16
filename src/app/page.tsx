import { Clinic } from "@/components/Clinic";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Specialties } from "@/components/Specialties";
import { StickyCta } from "@/components/StickyCta";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialties />
        <Team />
        <Clinic />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
