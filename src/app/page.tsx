import { Clinic } from "@/components/Clinic";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Specialties } from "@/components/Specialties";
import { Steps } from "@/components/Steps";
import { StickyCta } from "@/components/StickyCta";
import { Team } from "@/components/Team";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialties />
        <Team />
        <Steps />
        <Clinic />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
