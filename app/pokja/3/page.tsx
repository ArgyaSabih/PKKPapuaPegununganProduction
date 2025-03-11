import { PokjaLayout } from "@/templates/modules/pokja/PokjaLayout";
import { BudgetIconColoured } from "@/templates/components/icon/budgetIconColoured";

const page = {
  struktur: [
    { nama: "Nurniyati Nyoto", jabatan: "Wakil Ketua Pokja III" },
    { nama: "Victor P.Polnaya, S.STP, M.Si.", jabatan: "Sekretaris Pokja III" },
    { nama: "Wilda Rica Rahayu Putri, S.STP, M.Si.", jabatan: "Anggota Pokja III" },
    { nama: "Tri Ade Sulistyo, A.Md.", jabatan: "Anggota Pokja III" },
  ],
  program:
    "Gerakan Amalkan dan Kukuhkan Halaman Asri, Teratur, Indah dan Nyaman (AKU HATINYA) PKK mendukung penanggulangan Covid 19 dan Penurunan Angka Stunting",
  programPrioritas: [
    "Pengembangan Kampung AKU HATINYA PKK Berciri Khas Daerah dengan Tanaman Unggulan Bernilai Ekonomi Tinggi",
    "Kampanye dan Memasyarakatkan Program Diversifikasi Pangan dan Pemanfaatan Pangan Lokal sebagai Upaya Mengurangi Angka Stunting",
    "Kampanye Aku Cinta Produk Indonesia (dalam rangka pengembangan kain dan pakaian khas daerah)",
    "Mendorong Pengembangan Rumah Sehat Layak Huni dan Tata Laksana Rumah Tangga",
  ],
};

export default function Pokja3() {
  return (
    <PokjaLayout
      PageIcon={BudgetIconColoured}
      name="Bidang Penguatan Ketahanan Keluarga / Pokja III"
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
      <p className="font-semibold">{page.program}:</p>
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
