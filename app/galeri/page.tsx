"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { getUserPosts, Post } from "@/libs/instagram";
import { PageHeader } from "@/templates/components/PageHeader";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function GaleriPage() {
  const [display, setDisplay] = useState<Post[]>();
  const [allPosts, setAllPosts] = useState<Post[]>();
  const [start, setStart] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getUserPosts();
      setAllPosts(posts);
      setDisplay(posts?.slice(0, 12));
    }
    fetchPosts();
  }, []);

  function loadMorePosts() {
    setStart(start + 12);
    console.log(start);
    setDisplay(allPosts?.slice(0, start + 12)); // Display next set of posts
  }

  return (
    <main className="mb-24 mt-12 flex w-full flex-col items-center gap-y-8 px-4 lg:px-16">
      <PageHeader title="Galeri" />
      <section className="grid grid-cols-2 justify-center gap-x-4 gap-y-8 lg:grid-cols-4">
        {display && display?.length ? (
          display.map((photo, i) => (
            <Image
              key={i}
              src={photo.media_url}
              alt={photo.id}
              width={160}
              height={160}
              sizes="100%"
              className="rounded-lg object-contain lg:h-72 lg:w-72"
            />
          ))
        ) : (
          <p className="col-span-2 text-center lg:col-span-4">Memuat galeri...</p>
        )}
      </section>
      <div className="flex justify-center gap-x-6">
        <button
          className={`${allPosts?.length === display?.length ? "hidden" : ""} flex items-center gap-x-2 rounded border border-[#1A7AE3] px-6 py-1 font-semibold text-[#1A7AE3]`}
          onClick={loadMorePosts}
        >
          Muat Lebih Banyak
          <FaArrowRightLong />
        </button>
        <Link
          href="https://instagram.com/arachnova.id"
          target="_blank"
          rel="norefferer noopener"
          className="flex items-center gap-x-2 rounded border border-[#1A7AE3] bg-[#1A7AE3] px-6 py-1 font-semibold text-[#FAFAFA]"
        >
          <FaInstagram />
          Ikuti Kami di Instagram
        </Link>
      </div>
    </main>
  );
}
