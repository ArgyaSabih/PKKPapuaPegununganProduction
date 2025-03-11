import { PokjaLayout } from "@/templates/modules/pokja/PokjaLayout";
import { MedicalIconColoured } from "@/templates/components/icon/medicalIconColoured";

const page = {
  struktur: [
    {
      nama: "Safriati Syafrizal, S.Si. M.Si",
      jabatan: "Ketua Bidang Kesehatan Keluarga & Lingkungan",
    },
    { nama: "Marlina La Ode Ahmad", jabatan: "Ketua Pokja IV" },
    { nama: "Nurjannah, SKM, M.Kes", jabatan: "Wakil Ketua Pokja IV" },
    { nama: "Sitti Hadijah Koedoeboen, S.STP, M.Si.", jabatan: "Sekretaris Pokja IV" },
    { nama: "Sarma Christina Evalytha Simanullang, S.IP", jabatan: "Anggota Pokja IV" },
    { nama: "Antonius Fredian HK, S.T., M.Si.", jabatan: "Anggota Pokja IV" },
  ],
  program: "Keluarga Sehat Tanggap dan Tangguh Bencana",
  programPrioritas: [
    "Peningkatan kesadaran gizi keluarga untuk pencegahan dan penurunan angka stunting",
    "Peningkatan kesehatan masyarakat Desa/Kelurahan dengan perubahan Perilaku Hidup Bersih dan Sehat (PHBS) Keluarga",
    "Pencegahan dan penurunan angka kematian Ibu, Bayi dan Balita",
    "Mewujudkan Keluarga yang tanggap dan tangguh terhadap bencana Rumah Tangga",
    "Mewujudkan Desa/Keluarga yang tanggap dan tangguh dalam tata laksanaan penanganan darurat bencana alam",
    "Meningkatkan komitmen masyarakat guna menjaga kelestarian lingkungan hidup untuk mewujudkan Desa/Kelurahan yang aman, nyaman, bersih dan sehat",
    "Peningkatan Keluarga Berencana menuju Keluarga yang sehat dan berkualitas",
    "Keluarga yang tangguh dalam perencanaan keuangan sehat",
    "Peningkatan Kesehatan Pasangan Usia Subur (PUS)",
  ],
};

export default function Pokja3() {
  return (
    <PokjaLayout
      PageIcon={MedicalIconColoured}
      name="Bidang Kesehatan Keluarga dan Lingkungan / Pokja IV"
    >
      <p>Struktur</p>
      <ul className="ml-6 list-decimal">
        {page.struktur.map((s, i) => (
          <li key={i}>
            {s.nama} – {s.jabatan}
          </li>
        ))}
      </ul>
      <p>Program Unggulan 2021 - 2024:</p>
      <p className="font-semibold">
        {page.program} Diwujudkan melalui Pilot Project sebagai berikut:
      </p>
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
