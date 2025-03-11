"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDateRange, MdPerson } from "react-icons/md";

interface Article {
  url: string;
  image: string;
  title: string;
  date: string;
  author: string;
}

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const featuredArticles = articles.slice(0, 6); // 6 Artikel utama
  const otherArticles = articles.slice(6, 21); // 15 Artikel lainnya
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col justify-center gap-y-8 bg-[#1A7AE3] px-6 text-white md:px-20 lg:px-40">
      <h1 className="text-center text-3xl font-bold">Artikel Terkini</h1>

      {/* Featured Articles (Carousel) */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 rounded-full bg-gray-700 p-2 text-white"
        >
          ◀
        </button>

        <Link href={featuredArticles[currentSlide].url}>
          <div className="relative h-96 w-full max-w-2xl overflow-hidden rounded-lg">
            <Image
              src={featuredArticles[currentSlide].image}
              alt={featuredArticles[currentSlide].title}
              layout="fill"
              objectFit="cover"
              className="transition-transform hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black p-4 text-center">
              <h2 className="text-lg font-semibold">{featuredArticles[currentSlide].title}</h2>
              <div className="flex justify-center space-x-4 text-sm">
                <span className="flex items-center">
                  <MdDateRange className="mr-1" />
                  {featuredArticles[currentSlide].date}
                </span>
                <span className="flex items-center">
                  <MdPerson className="mr-1" />
                  {featuredArticles[currentSlide].author}
                </span>
              </div>
            </div>
          </div>
        </Link>

        <button
          onClick={handleNext}
          className="absolute right-0 rounded-full bg-gray-700 p-2 text-white"
        >
          ▶
        </button>
      </div>

      {/* Pagination Bullets */}
      <div className="flex justify-center space-x-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Other Articles List */}
      <div className="rounded-lg bg-[#1B3780] p-4">
        <h2 className="text-lg font-bold text-white">Artikel Lainnya</h2>
        <div className="overflow-y-auto">
          {otherArticles.length > 0 ? (
            otherArticles.map((article, index) => (
              <Link
                href={article.url}
                key={index}
                className="block border-b border-gray-500 p-3 hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white">{article.title}</h3>
                <p className="text-sm text-gray-300">
                  <MdDateRange className="mr-1 inline-block" />
                  {article.date} | <MdPerson className="mr-1 inline-block" />
                  {article.author}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-300">Belum ada artikel terbaru.</p>
          )}
        </div>
      </div>

      {/* Button to See All Articles */}
      <Link
        href="/artikel"
        className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
      >
        Lihat Semua Artikel
      </Link>
    </div>
  );
}
