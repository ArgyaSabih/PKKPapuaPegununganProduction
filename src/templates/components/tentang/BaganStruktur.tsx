"use client";

import React from "react";
import Image from "next/image";

const BaganStruktur: React.FC = () => {
  const strukturKepengurusan = [
    "Ketua Umum.",
    "Sekretaris Umum.",
    "Ketua I, II, III dan IV.",
    "Sekretaris I, II, III dan IV.",
    "Bendahara I dan II",
    "Kelompok Kerja (POKJA) I, II, III dan IV.",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full p-16 text-black md:px-32">
        {/* Header */}
        <div className="mb-6 text-center lg:mb-12">
          <h1 className="mb-4 text-[5.7vw] font-bold text-blue1 xs:text-2xl md:text-4xl">
            Bagan Struktur Pengurus TP PKK Provinsi Papua Pegunungan
          </h1>
          <Image
            src="/components/tentang/placement.png"
            alt="Placement"
            width={800}
            height={800}
            className="mx-auto mb-4 h-auto w-full sm:w-[400px] md:w-full xl:w-[800px]"
          />
        </div>

        <div className="flex flex-col justify-around lg:flex-row">
          {/* Susunan Umum Kepengurusan */}
          <div className="mb-16 w-full lg:w-1/2">
            <h3 className="mb-8 text-[3.7vw] font-semibold leading-none xs:text-lg md:text-xl">
              Susunan Umum Kepengurusan:
            </h3>
            <ol className="list-inside list-decimal space-y-3">
              {strukturKepengurusan.map((item, index) => (
                <li key={index} className="text-[3.8vw] xs:text-lg md:text-xl">
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* Bagan Struktur */}
          <div className="mx-auto w-full lg:w-1/2">
            <div className="mx-auto w-full">
              <Image
                src="/components/tentang/bagan-struktur.png"
                alt="Bagan Struktur"
                width={800}
                height={800}
                className="mx-auto mb-4 h-auto w-full xl:w-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaganStruktur;
