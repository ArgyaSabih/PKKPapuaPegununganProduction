import { PokjaLayout } from "@/templates/modules/pokja/PokjaLayout";
import { EducationIconColoured } from "@/templates/components/icon/educationIconColoured";

const page = {
  struktur: [
    {
      nama: "Triwijaya Darwis, S.E., M.Tr.I.P",
      jabatan: "Ketua Bidang Pendidikan & Peningkatan Ekonomi Keluarga",
    },
    { nama: "Nurlailawati, S.Ag., M.Si.", jabatan: "Ketua Pokja II" },
    { nama: "Nyak Yasir Muammar, S.STP.", jabatan: "Wakil Ketua Pokja II" },
    { nama: "Siti Anisah, S.IP.", jabatan: "Sekretaris Pokja II" },
    { nama: "Natalia Kristiani", jabatan: "Anggota Pokja II" },
    { nama: "Meiliana Ail, S.Psi., M.M.", jabatan: "Anggota Pokja II" },
  ],
  program:
    "Gerakan Keluarga Indonesia dalam Peningkatan Kualitas Pendidikan dan Pengelolaan Ekonomi (GELARI PELANGI)",
  programPrioritas: [
    "Gerakan/Kampanye Wajib Membaca dengan memanfaatkan Taman Bacaan Masyarakat/Perpustakaan Desa/Kelurahan",
    "Tambahan Ekstra Kurikuler/Integrasi dalam Kurikulum/Mata Pelajaran Anak Usia Sekolah dengan materi Keluarga Berkualitas menjadi Alternatif",
    "Penguatan Ekonomi Keluarga Melalui Pemanfaatan Potensi Sumber Daya yg dimiliki",
    "Pengembangan Usaha Peningkatan Pendapatan Keluarga (UP2KPKK)",
    "Pembentukan/Pengembangan Toko PKK",
  ],
};

export default function Pokja2() {
  return (
    <PokjaLayout
      PageIcon={EducationIconColoured}
      name="Bidang Pendidikan dan Peningkatan Ekonomi Keluarga / Pokja II"
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
