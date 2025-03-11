import React from "react";
import Image from "next/image";
import { ArticleList } from "@/templates/modules/artikel/ArtikelSection";
import { MdDateRange } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { PortableText } from "@portabletext/react";
import DefaultLayout from "../layouts/DefaultLayout";

export function ArticleSlug({ title = "", date = "", author = "", images = [], body }) {
  return (
    // <div className={cn("flex flex-col gap-y-[1.6vw] lg:gap-y-[1vw] lg:px-4", className)} {...props}>
    <DefaultLayout>
      <HeaderSlug title={title} date={date} author={author} />
      <ContentSlug body={body} />
      <GallerySlug images={images} />
      <ArticleListSlug />
    </DefaultLayout>
    // </div>
  );
}

export function HeaderSlug({ title, date, author }) {
  return (
    <div className="mb-[1.5vw] flex flex-col items-center justify-center gap-y-[2vw] lg:gap-y-[2vw]">
      <h1 className="font-poppins text-[6.667vw] font-semibold text-[#1A7AE3] lg:text-[3.333vw]">
        {title}
      </h1>
      <div className="flex flex-row items-center justify-center gap-2">
        <MdDateRange style={{ fill: "#1A7AE3" }} />
        <p className="font-poppins text-[2.222vw] lg:text-[1.098vw]">{date}</p>
        <MdPerson color="#1A7AE3" />
        <p className="font-poppins text-[2.222vw] lg:text-[1.098vw]">{author}</p>
      </div>
    </div>
  );
}

export function ContentSlug({ body }) {
  return (
    <article className="prose-p:font-poppins prose-headings:font-poppins prose-a:font-poppins prose-ol:font-poppins prose-ul:font-poppins prose-li:font-poppins prose prose-lg prose-blue mt-[1vw] w-full justify-center gap-y-3 lg:prose-2xl prose-p:text-justify lg:max-w-none">
      <PortableText value={body} />
    </article>
  );
}

export function GallerySlug({ images }) {
  return (
    <div className="mt-[3vw] flex w-full flex-col items-center justify-center gap-y-[3vw] lg:mt-[1.5vw] lg:gap-y-[1.5vw]">
      <div className="flex w-full flex-row items-center justify-center gap-x-[28px]">
        <h2 className="font-poppins text-[4.444vw] font-semibold text-[#1A7AE3] lg:text-[52px]">
          Gallery
        </h2>
        <div className="h-[0.5vw] w-full bg-[#1A7AE3] lg:h-[5px]"></div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[25.664vw] w-full self-start overflow-hidden rounded-[0.931vw] lg:h-[327.16px] lg:rounded-[10.48px]"
          >
            <Image src={image} alt={`Article image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArticleListSlug({}) {
  return (
    <div className="mt-[3vw] flex w-full flex-col items-center justify-center gap-y-[3vw] lg:mt-[1.5vw] lg:gap-y-[1.5vw]">
      <div className="flex w-full flex-row items-center justify-center gap-x-[28px]">
        <div className="h-[0.5vw] w-full bg-[#1A7AE3] lg:h-[5px]" />
        <h2 className="font-poppins whitespace-nowrap text-[4.444vw] font-semibold text-[#1A7AE3] lg:text-[52px]">
          Artikel Lainnya
        </h2>
      </div>
      <ArticleList limit={3} />
    </div>
  );
}
