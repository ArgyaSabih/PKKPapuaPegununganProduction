"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDateRange, MdPerson } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Article {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  url: string;
}

export default function FeaturedArticles({ articles }: { articles: Article[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-y-[1vw]">
      {/* Featured Article */}
      <Link href={articles[currentIndex]?.url || "#"}>
        <div className="group relative h-[32.872vw] w-[49.114vw] overflow-hidden rounded-[0.931vw] lg:h-[29.882vw] lg:w-[44.639vw] lg:rounded-[10.48px]">
          <Image
            src={articles[currentIndex]?.image || "/placeholder.jpg"}
            alt={articles[currentIndex]?.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 flex h-[40%] w-full flex-col items-center justify-center bg-gradient-to-t from-[#253AAB]">
            <h2 className="font-poppins text-center text-[1.972vw] font-semibold lg:text-[1.794vw]">
              {articles[currentIndex]?.title}
            </h2>
            <div className="font-poppins mt-1 flex items-center text-[1.111vw] text-white lg:text-[1.01vw]">
              <div className="mr-4 flex items-center">
                <MdDateRange style={{ fill: "#EEEE22" }} />
                {articles[currentIndex]?.date}
              </div>
              <div className="flex items-center">
                <MdPerson color="#EEEE22" />
                {articles[currentIndex]?.author}
              </div>
            </div>
            {/* Pagination Bullets */}
            <div className="mt-2 flex justify-center gap-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
