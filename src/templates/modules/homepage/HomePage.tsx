import { Hero } from "@/templates/components/Hero";
import { CardsNavigation } from "@/templates/components/CardsNavigation";
import AboutHomePage from "@/templates/components/AboutHomePage";
import ArtikelHomePage from "@/templates/components/ArtikelHomePage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CardsNavigation />
      <AboutHomePage />
      <ArtikelHomePage />
    </>
  );
}
