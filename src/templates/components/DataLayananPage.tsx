"use client";

import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const fakedata = [
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
  {
    judul: "Nama Layanan yang Disediakan",
    url: "https://datalayananyangdisediakan.com",
    kategori: "Kategori Layanan",
  },
];

const data = [...fakedata, ...fakedata, ...fakedata, ...fakedata, ...fakedata, ...fakedata];

function chunkData(data: any[], size: number) {
  const chunks = [];
  for (let i = 0; i < data.length; i = i + size) {
    chunks.push(data.slice(i, i + size));
  }
  return chunks;
}

function generatePagination(currentPage: number, totalPages: number) {
  const pagination = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pagination.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pagination.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pagination.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
  }
  return pagination;
}

export function DataLayananPage() {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredData = useMemo(() => {
    return search.trim() === ""
      ? null
      : data.filter((item) => {
          return item.judul.toLowerCase().includes(search.toLowerCase());
        });
  }, [search, data]);
  const paginatedData = chunkData(filteredData ?? data, 10);

  return (
    <section className="w-full space-y-6">
      <div className="flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Telusuri nama layanan"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex max-w-[90vw] items-center justify-center rounded border border-[#2B80FF] py-2 pl-12 pr-2 text-lg outline-[#2B80FF] lg:max-w-xl lg:pl-14 lg:pr-8"
          />
          <IoSearchOutline className="absolute left-4 top-3 text-xl text-[#2B80FF]" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="relative overflow-x-scroll whitespace-nowrap">
          <table className="min-w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-1 font-semibold">No</th>
                <th className="border border-gray-300 px-4 py-1 font-semibold">Judul</th>
                <th className="border border-gray-300 px-4 py-1 font-semibold">URL</th>
                <th className="border border-gray-300 px-4 py-1 font-semibold">Kategori</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData[currentPage] ? (
                paginatedData[currentPage].map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-1">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-1">{item.judul}</td>
                    <td className="border border-gray-300 px-4 py-1">
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="norefferer noopener"
                        className="italic text-[#2B80FF]"
                      >
                        {item.url}
                      </Link>
                    </td>
                    <td className="border border-gray-300 px-4 py-1">{item.kategori}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-4 py-1 text-center">
                    Tidak ada data yang ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <button
            disabled={currentPage === 0 || !paginatedData[currentPage]}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <MdArrowBackIos
              className={currentPage === 0 || !paginatedData[currentPage] ? "text-gray-400" : ""}
            />
          </button>
          {generatePagination(currentPage + 1, paginatedData.length).map((page, index) => {
            return (
              <button
                key={index}
                className={`w-6 rounded text-center ${currentPage + 1 === page ? "text-[#2B80FF] shadow-[0_1px_2px_#b0b0b0]" : ""}`}
                onClick={() => typeof page === "number" && setCurrentPage(page - 1)}
                disabled={typeof page !== "number"}
              >
                {page}
              </button>
            );
          })}
          <button
            disabled={currentPage === paginatedData.length - 1 || !paginatedData[currentPage]}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <MdArrowForwardIos
              className={
                currentPage === paginatedData.length - 1 || !paginatedData[currentPage]
                  ? "text-gray-400"
                  : ""
              }
            />
          </button>
        </div>
      </div>
    </section>
  );
}
