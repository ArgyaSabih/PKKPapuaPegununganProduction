import { PokjaLayout } from "@/templates/modules/pokja/PokjaLayout";
import { FolderIconColoured } from "@/templates/components/icon/folderIconColoured";

const page = {
  struktur: [
    {
      nama: "Yane Ardian, S.E., M.Si.",
      jabatan: "Staf Ahli Bidang Penguatan Ketahanan Pangan Keluarga",
    },
    {
      nama: "Irjen Pol (Purn) Dra.Sri Handayani, M.H.",
      jabatan: "Staf Ahli Bidang Pendidikan Karakter",
    },
    { nama: "Dr. Yulia Zubir, M.Epid.", jabatan: "Staf Ahli Bidang Kesehatan" },
    { nama: "Niken Tomsi, S.H., M.H.", jabatan: "Staf Ahli Bidang Ketahanan Ekonomi Keluarga" },
    { nama: "Dra. Lusje Anncke Tabalujuan, M.Pd.", jabatan: "Sekretaris Umum TP PKK" },
    { nama: "Rahmania Lufitasari, S.S., M.Si.", jabatan: "Sekretaris I" },
    { nama: "Meydy DS.Malonda, S.STP.", jabatan: "Sekretaris II" },
    { nama: "Mey Rany Wahida Utami, S.STP., M.M.", jabatan: "Sekretaris III" },
    { nama: "drg. Linda Sutarjo", jabatan: "Sekretaris IV" },
    { nama: "Agnetha Rosari, S.Psi., M.Si.", jabatan: "Bendahara I" },
  ],
  program: "Modernisasi Organisasi PKK",
  programPrioritas: [
    "Penyusunan regulasi (Juknis/Panduan Kelembagaan PKK)",
    "Sinergitas Sistem Informasi Gerakan PKK melalui E-PKK",
    "Peningkatan kapasitas Kader PKK",
    "Pemberian bantuan kepada masyarakat",
    "Monitoring dan evaluasi",
  ],
};

export default function Sekretariat() {
  return (
    <PokjaLayout PageIcon={FolderIconColoured} name="Sekretariat">
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
