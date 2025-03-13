"use client";

import React, { useState, useEffect } from "react";
import { ArticleCard } from "@/templates/components/ArticleCard";
import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import DefaultLayout from "@/templates/layouts/DefaultLayout";

async function fetchArticles() {
  const query = `
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      author->{
        name
      },
      tags[]->{
        _id,
        name
      },
      mainImage,
      body
    }
  `;

  const data = await client.fetch(query, {}, { next: { revalidate: 1 } });

  return data.map((item: any) => {
    const date = new Date(item.publishedAt);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return {
      title: item.title,
      description: item.body?.[0]?.children?.[0]?.text || "No description available",
      date: `${year}-${month}-${day}`,
      author: item.author?.name || "Unknown",
      image: urlFor(item.mainImage[0]).url(),
      url: `/artikel/${item.slug?.current}`,
    };
  });
}

interface ArticleListProps {
  pagination?: boolean;
  limit?: number;
}

export function ArticleList({ pagination = false, limit }: ArticleListProps) {
  const [articles, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 5 : 12);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    async function loadArticles() {
      const data = await fetchArticles();
      setArticles(data);
    }

    loadArticles();
  }, []);

  // Jika limit diset, potong daftar artikel
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  // Jika pagination aktif, hitung halaman
  const totalPages = pagination ? Math.ceil(displayedArticles.length / itemsPerPage) : 1;

  const getCurrentPageData = () => {
    if (!pagination) return displayedArticles;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return displayedArticles.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderPaginationButtons = () => {
    if (!pagination || totalPages <= 1) return null;

    const pageGroupSize = 5;
    const pageButtons = [];

    const currentGroup = Math.ceil(currentPage / pageGroupSize);
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

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

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 ${currentPage === page ? "bg-white text-blue1 shadow-md" : "text-black"}`}
        >
          {page}
        </button>,
      );
    }

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
    <DefaultLayout className="!h-fit !min-h-fit !px-0">
      {displayedArticles.length ? (
        <>
          <div className="grid w-full grid-cols-2 items-center justify-center gap-[2vw] text-black lg:grid-cols-3 lg:gap-[1vw]">
            {getCurrentPageData().map((item, index) => (
              <ArticleCard key={index} {...item} />
            ))}
          </div>
          {/* Pagination (Hanya muncul jika pagination true) */}
          {pagination && (
            <div className="mt-8 flex items-center justify-center space-x-1 s:space-x-4">
              {renderPaginationButtons()}
            </div>
          )}
        </>
      ) : (
        <div className="text-blue flex w-full flex-col items-center justify-center text-center text-sm font-[700] text-black lg:text-4xl">
          <span>Whoops! Artikel Tidak Ditemukan</span>
          <span className="text-sm font-[500] lg:text-3xl">Mohon periksa kembali nanti.</span>
        </div>
      )}
    </DefaultLayout>
  );
}
