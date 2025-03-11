"use client";

import React, { useState } from "react";
import Image from "next/image";

const TabelSusunanPengurus: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pengurusData = [
    { position: "Ketua", name: "Nama Lengkap dengan Gelarnya" },
    {
      position: "Ketua I Bidang Pembinaan Karakter Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua II Bidang Pendidikan dan Peningkatan Ekonomi Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua III Bidang Penguatan Ketahanan Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua IV Bidang Kesehatan Keluarga & Lingkungan",
      name: "Nama Lengkap dengan Gelarnya",
    },
    { position: "Penasehat I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Penasehat II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris III", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Bendahara", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Wakil Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "", name: "" },
    { position: "Ketua", name: "Nama Lengkap dengan Gelarnya" },
    {
      position: "Ketua I Bidang Pembinaan Karakter Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua II Bidang Pendidikan dan Peningkatan Ekonomi Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua III Bidang Penguatan Ketahanan Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua IV Bidang Kesehatan Keluarga & Lingkungan",
      name: "Nama Lengkap dengan Gelarnya",
    },
    { position: "Penasehat I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Penasehat II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris III", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Bendahara", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Wakil Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "", name: "" },
    { position: "Ketua", name: "Nama Lengkap dengan Gelarnya" },
    {
      position: "Ketua I Bidang Pembinaan Karakter Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua II Bidang Pendidikan dan Peningkatan Ekonomi Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua III Bidang Penguatan Ketahanan Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua IV Bidang Kesehatan Keluarga & Lingkungan",
      name: "Nama Lengkap dengan Gelarnya",
    },
    { position: "Penasehat I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Penasehat II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris III", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Bendahara", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Wakil Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "", name: "" },
    { position: "Ketua", name: "Nama Lengkap dengan Gelarnya" },
    {
      position: "Ketua I Bidang Pembinaan Karakter Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua II Bidang Pendidikan dan Peningkatan Ekonomi Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua III Bidang Penguatan Ketahanan Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua IV Bidang Kesehatan Keluarga & Lingkungan",
      name: "Nama Lengkap dengan Gelarnya",
    },
    { position: "Penasehat I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Penasehat II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris III", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Bendahara", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Wakil Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "", name: "" },
    { position: "Ketua", name: "Nama Lengkap dengan Gelarnya" },
    {
      position: "Ketua I Bidang Pembinaan Karakter Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua II Bidang Pendidikan dan Peningkatan Ekonomi Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua III Bidang Penguatan Ketahanan Keluarga",
      name: "Nama Lengkap dengan Gelarnya",
    },
    {
      position: "Ketua IV Bidang Kesehatan Keluarga & Lingkungan",
      name: "Nama Lengkap dengan Gelarnya",
    },
    { position: "Penasehat I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Penasehat II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris II", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris III", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Bendahara", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Wakil Ketua POKJA I", name: "Nama Lengkap dengan Gelarnya" },
    { position: "Sekretaris POKJA I", name: "Nama Lengkap dengan Gelarnya" },
  ];

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 5 : 12;
    }
    return 12;
  };

  const totalPages = Math.ceil(pengurusData.length / getItemsPerPage());

  const getCurrentPageData = () => {
    const itemsPerPage = getItemsPerPage();
    const startIndex = (currentPage - 1) * itemsPerPage;
    return pengurusData.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderPaginationButtons = () => {
    const pageGroupSize = 5;
    const pageButtons = [];

    const currentGroup = Math.ceil(currentPage / pageGroupSize);
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

    // Left navigation button
    if (currentPage > 1) {
      pageButtons.push(
        <button
          key="prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 text-black hover:bg-gray-100"
        >
          &lt;
        </button>,
      );
    }

    // Page buttons
    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 ${
            currentPage === page ? "bg-white text-blue1 shadow-md" : "text-black"
          }`}
        >
          {page}
        </button>,
      );
    }

    // Right navigation button
    if (currentPage < totalPages) {
      pageButtons.push(
        <button
          key="next"
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 text-black hover:bg-gray-100"
        >
          &gt;
        </button>,
      );
    }

    return pageButtons;
  };

  return (
    <div className="container mx-auto p-16 md:p-32">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-[5.7vw] font-bold text-blue1 xs:text-2xl md:text-4xl">
          Susunan Pengurus TP PKK Papua Pegunungan
        </h1>
        <Image
          src="/components/tentang/placement.png"
          alt="Placement"
          width={800}
          height={800}
          className="mx-auto mb-4 h-auto w-full sm:w-[400px] md:w-full xl:w-[800px]"
        />
      </div>

      {/* Desktop Table */}
      <div className="block">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-50">
              <th className="border p-3 text-left">Jabatan</th>
              <th className="border p-3 text-left">Nama</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageData().map((item, index) => (
              <tr key={index}>
                <td className="border p-3">{item.position}</td>
                <td className="border p-3">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center space-x-1 s:space-x-4">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default TabelSusunanPengurus;
