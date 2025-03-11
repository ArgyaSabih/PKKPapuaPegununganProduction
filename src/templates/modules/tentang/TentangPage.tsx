import BaganStruktur from "@/templates/components/tentang/BaganStruktur";
import HeroTentang from "@/templates/components/tentang/HeroTentang";
import ProgramPokok from "@/templates/components/tentang/ProgramPokok";
import Sejarah from "@/templates/components/tentang/Sejarah";
import TabelSusunanPengurus from "@/templates/components/tentang/TabelSusunanPengurus";
import VisiMisi from "@/templates/components/tentang/VisiMisi";

export default function About1() {
  return (
    <>
      <HeroTentang />
      <TabelSusunanPengurus />
      <VisiMisi />
      <BaganStruktur />
      <Sejarah />|
      <ProgramPokok />
    </>
  );
}
