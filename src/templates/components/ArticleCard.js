"use client";

import Image from "next/image";
import { cn } from "@/libs/utils";
import { MdDateRange } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { urlFor } from "../../../sanity/lib/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export function ArticleCard({
  className = "",
  title = "",
  description = "",
  date = "",
  author = "",
  image = "",
  url = "",
  ...props
}) {
  return (
    <div
      className={cn(
        "flex h-fit w-full flex-col rounded-[0.931vw] bg-white drop-shadow-lg duration-300 hover:scale-[1.05] hover:bg-gray-100 lg:rounded-[10.86px]",
        className,
      )}
      {...props}
    >
      <HeaderPhoto image={image} />
      <FooterDetails title={title} author={author} date={date} url={url} />
    </div>
  );
}

export function HeaderPhoto({ image, className, ...props }) {
  return (
    <div
      className={cn(
        "relative h-[24.664vw] w-full self-start overflow-hidden rounded-[0.931vw] lg:h-[288px] lg:rounded-[10.48px]",
        className,
      )}
      {...props}
    >
      <Image src={image} alt="Article image" layout="fill" objectFit="cover" />
    </div>
  );
}

export function FooterDetails({ title, author, date, className, url, ...props }) {
  return (
    <div
      className={cn(
        "flex h-fit w-full flex-col items-center justify-center gap-y-[2.333vw] p-[2px] lg:gap-y-[10px] lg:p-[3vw]",
        className,
      )}
      {...props}
    >
      <h3 className="font-poppins text-center text-[2.222vw] font-bold text-gray-900 lg:text-lg">
        {title}
      </h3>
      <div className="font-poppins flex flex-row items-center justify-center max-lg:gap-2 lg:flex-row lg:gap-x-[10px]">
        <div className="flex flex-row gap-2">
          <MdDateRange style={{ fill: "#1A7AE3" }} className="h-4 w-4" />
          <p className="font-poppins self-center text-[1.3vw] text-sm font-medium leading-snug text-black lg:text-sm">
            {date}
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <MdPerson color="#1A7AE3" className="h-4 w-4" />
          <p className="font-poppins self-center text-[1.3vw] font-medium leading-snug text-black lg:text-sm">
            {author}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="font-poppins hover:bg-lightblue hover:text-blue mt-2 flex rounded-[0.5vw] bg-[#1A7AE3] p-[1.111vw] text-[1.364vw] font-bold text-white duration-300 lg:px-[27px] lg:py-[12px] lg:text-[0.729vw]"
      >
        <Link href={url} className="flex items-center justify-center gap-2">
          <h3>Baca Selengkapnya</h3>
          <HiArrowNarrowRight style={{ fill: "#FFFFFF" }} className="h-4 w-4" />
        </Link>
      </button>
    </div>
  );
}
