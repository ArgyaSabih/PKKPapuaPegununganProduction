import { PokjaLayout } from "@/templates/modules/pokja/PokjaLayout";
import { FamilyIconColoured } from "@/templates/components/icon/familyIconColoured";

const page = {
  struktur: [
    { nama: "drg. Indah Ayu Farahestin", jabatan: "Ketua Bidang Pembinaan Karakter Keluarga" },
    { nama: "Simon Makarios Aruan, S.IP., M.Si., M.H.", jabatan: "Ketua Pokja I" },
    { nama: "Aniek Anani Kurniadi, BA", jabatan: "Wakil Ketua Pokja I" },
    { nama: "Ade Anggeriani Massal, S.IP.", jabatan: "Sekretaris Pokja I" },
    { nama: "Tintin Riyanti", jabatan: "Anggota Pokja I" },
    { nama: "Redo Frandika, S.AP.", jabatan: "Anggota Pokja I" },
  ],
  program: "Pola Asuh Anak dan Remaja di Era Digital (PAAREDI)",
  programPrioritas: [
    "Keluarga Indonesia Sejahtera dan Harmonis (KISAH)",
    "Keluarga Indonesia Sehat Tanpa Narkoba (KRISAN)",
    "Keluarga Indonesia Sadar Administrasi Kependudukan (KISAK)",
    "Keluarga Indonesia Anti Trafficking (KIAT)",
    "Keluarga Indonesia Lindungi Anak Kekerasan Seksual (KILAS)",
    "Pembinaan Kesadaran Bela Negara (PKBN)",
  ],
};

export default function Pokja1() {
  return (
    <PokjaLayout PageIcon={FamilyIconColoured} name="Bidang Pembinaan Karakter Keluarga / Pokja I">
      <p>Struktur</p>
      <ul className="ml-6 list-decimal">
        {page.struktur.map((s, i) => (
          <li key={i}>
            {s.nama} – {s.jabatan}
          </li>
        ))}
      </ul>
      <p>Program Unggulan 2021 - 2024:</p>
      <p className="font-semibold">{page.program}, diwujudkan melalui:</p>
      <div>
        <p>Program Prioritas</p>
        <ul className="ml-6 list-decimal">
          {page.programPrioritas.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </PokjaLayout>
  );
}
