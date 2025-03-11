"use client";

import React from "react";
import Image from "next/image";

const ProgramPokok: React.FC = () => {
  const programData = [
    {
      icon: "/templates/components/icons/pancasila.svg",
      title: "Penghayatan dan Pengamalan Pancasila",
    },
    {
      icon: "/templates/components/icons/gotong-royong.svg",
      title: "Gotong Royong",
    },
    {
      icon: "/templates/components/icons/pangan.svg",
      title: "Pangan",
    },
    {
      icon: "/templates/components/icons/sandang.svg",
      title: "Sandang",
    },
    {
      icon: "/templates/components/icons/perumahan.svg",
      title: "Perumahan dan Tata Laksana Rumah Tangga",
    },
    {
      icon: "/templates/components/icons/pendidikan.svg",
      title: "Pendidikan dan Keterampilan",
    },
    {
      icon: "/templates/components/icons/kesehatan.svg",
      title: "Kesehatan",
    },
    {
      icon: "/templates/components/icons/koperasi.svg",
      title: "Pengembangan Kehidupan Berkoperasi",
    },
    {
      icon: "/templates/components/icons/lingkungan.svg",
      title: "Kelestarian Lingkungan Hidup",
    },
    {
      icon: "/templates/components/icons/perencanaan.svg",
      title: " Perencanaan Sehat",
    },
  ];

  return (
    <div className="mx-auto p-16 md:p-32">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-[5.7vw] font-bold text-blue1 xs:text-2xl md:text-4xl">
          10 Program Pokok PKK
        </h1>
        <Image
          src="/components/tentang/placement.png"
          alt="Placement"
          width={800}
          height={800}
          className="mx-auto mb-4 h-auto w-full sm:w-[400px] md:w-full xl:w-[800px]"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 xl:gap-x-64 2xl:gap-x-[25rem]">
        {programData.map((program, index) => (
          <div key={index} className="flex items-center p-4">
            <div className="mr-4 h-16 w-16 flex-shrink-0 lg:mr-12">
              <Image
                src={program.icon}
                alt={program.title}
                width={64}
                height={64}
                className="h-full w-full object-contain xl:scale-150"
              />
            </div>
            <div>
              <p className="text-[3.8vw] font-medium text-blue1 xs:text-lg md:text-xl xl:text-[1.65rem]">
                {program.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPokok;
