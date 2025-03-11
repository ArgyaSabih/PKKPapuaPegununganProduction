"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiUserGroup, HiPhone } from "react-icons/hi";

interface HeroProps {
  title?: string;
  backgroundImage?: string;
  logo?: string;
}

const scrollToFooter = () => {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero({
  title = "Tim Penggerak PKK\nProvinsi Papua Pegunungan",
  backgroundImage = "/components/homepage/bg-hero.webp",
  logo = "/templates/components/PKK.png",
}: HeroProps) {
  return (
    <div className="relative h-screen md:w-full">
      {/* Background Image*/}
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="Hero Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-blue4 opacity-45"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[20vw] max-h-[12vw] w-full">
        <Image
          src={"/components/homepage/wave.png"}
          alt="Wave"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      <div
        data-gsap="up"
        className="relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="PKK Logo"
          width={150}
          height={150}
          priority
          className="mb-6 h-[33vw] w-[33vw] xs:h-[27vw] xs:w-[27vw] sm:h-[180px] sm:w-[180px]"
        />

        {/* Title */}
        <h1 className="mb-8 px-4 text-[6vw] font-bold text-white xs:text-[5vw] sm:text-3xl lg:text-[2.7rem] lg:leading-[3.3rem]">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* Buttons */}
        <div className="flex gap-8 sm:gap-12">
          <Link
            href="/tentang"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-[5vw] py-[2.4vw] text-[2.8vw] text-white transition duration-200 hover:bg-blue-700 xs:text-[2.3vw] s:py-3 sm:text-base lg:px-[3rem]"
          >
            <HiUserGroup className="h-4 w-4 sm:h-5 sm:w-5" />
            Tentang Kami
          </Link>

          <button
            onClick={scrollToFooter}
            className="flex items-center gap-2 rounded-lg border bg-transparent bg-white px-[5vw] text-[2.8vw] text-black transition-all duration-200 hover:bg-slate-200 xs:text-[2.3vw] sm:text-base lg:px-[3rem]"
          >
            <HiPhone className="h-4 w-4 sm:h-5 sm:w-5" />
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
