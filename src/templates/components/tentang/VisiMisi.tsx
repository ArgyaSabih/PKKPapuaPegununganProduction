const VisiMisi: React.FC = () => {
  const visiText =
    '"Terwujudnya Keluarga Sehat, Cerdas, Berdaya, Beriman dan Bertaqwa Menuju Indonesia Maju di Tahun 2024"';

  const misiList = [
    '"Membentuk Karakter Keluarga Melalui Pola Asuh yang Sesuai dengan Nilai Dasar Pancasila."',
    '"Meningkatkan Pendidikan dan Ekonomi Keluarga."',
    '"Memperkuat Ketahanan Keluarga melalui Pemenuhan Pangan, Sandang, Rumah Sehat Layak Huni serta Tata Laksana Rumah Tangga."',
    '"Meningkatkan Kesehatan, Kelestarian Lingkungan Hidup dan Perencanaan Sehat."',
    '"Modernisasi Organisasi PKK dengan Memanfaatkan Teknologi Informasi."',
  ];

  return (
    <div className="flex items-center justify-center bg-blue-500">
      <div className="mx-auto w-full p-16 text-white md:px-32">
        {/* Content Section */}
        <div className="mb-6 p-4 sm:mb-12">
          <h1 className="mb-6 rounded-lg p-2 text-center text-[2.1rem] font-semibold transition-all duration-300 hover:bg-white hover:text-blue-500 hover:shadow-md xs:text-4xl md:text-5xl">
            VISI
          </h1>
          <p className="text-justify text-[3.8vw] xs:text-lg md:text-xl xl:text-center">
            {visiText}
          </p>
        </div>
        <div className="p-4">
          <h1 className="mb-6 rounded-lg p-2 text-center text-[2.1rem] font-semibold transition-all duration-300 hover:bg-white hover:text-blue-500 hover:shadow-md xs:text-4xl md:text-5xl">
            MISI
          </h1>
          <ol className="list-inside list-decimal space-y-3">
            {misiList.map((misi, index) => (
              <li key={index} className="text-[3.8vw] xs:text-lg md:text-xl">
                {misi}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
