"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProfilePage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const profileData = {
    name: "Herwin Meiliantina Wanggai, S.IP.M.Pd",
    title: "PJ Ketua TP PKK Papua Pegunungan",
    servicePeriod: "Masa Bakti Tahun 2024 - 2029",
    imageUrl: "/components/tentang/pj-ketua-pkk.png",
  };

  const handleMouseLeave = () => {
    setIsClosing(true);
    const timer = setTimeout(() => {
      setIsHovered(false);
      setIsClosing(false);
    }, 400);
    return () => clearTimeout(timer);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-16">
      <div
        data-gsap="up"
        className="flex w-full max-w-[90rem] flex-col-reverse items-center gap-16 lg:flex-row lg:gap-32"
      >
        {/* Text Content */}
        <div className="w-full leading-none md:w-[65%]">
          <div className="flex w-full justify-center lg:justify-start">
            <div className="mb-8 inline-block rounded-md bg-blue-500 px-4 py-2 text-[3vw] text-white s:text-base">
              {profileData.title}
            </div>
          </div>
          <h1 className="mb-8 w-full text-center text-[6vw] font-bold text-gray-800 xs:text-[5.2vw] s:text-[4.5vw] lg:text-left lg:text-5xl xl:text-6xl">
            {profileData.name}
          </h1>
          <p className="text-center text-[4vw] text-gray-600 xs:text-[3.2vw] s:text-[3.7vw] md:text-xl lg:text-left xl:text-2xl">
            {profileData.servicePeriod}
          </p>
        </div>

        {/* Image Content */}
        <div className="relative w-[90%] xs:w-[70%] s:w-[50%] md:w-[35%]">
          <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative z-20 rounded-xl p-8 shadow-md shadow-slate-400">
              <Image
                src={profileData.imageUrl}
                alt={profileData.name}
                width={800}
                height={700}
                className="rounded-xl object-cover"
                priority
              />
              {/* Hover Overlay */}
              {(isHovered || isClosing) && (
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div
                    className={`absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#2880FF] to-transparent md:h-[50%] lg:h-[40%] ${isClosing ? "animate-curtain-down" : "animate-curtain-up"}`}
                  >
                    <div className="absolute bottom-2 left-4 right-4 space-y-0 lg:bottom-4 xl:space-y-1 2xl:space-y-2">
                      <h3 className="text-[3.1vw] font-semibold text-white sm:text-[3.2vw] md:text-[1.6vw] lg:text-[1.5vw] 2xl:text-[1.6rem]">
                        {profileData.title}
                      </h3>
                      <p className="text-[2.2vw] leading-relaxed text-white/90 sm:leading-normal md:text-[1.1vw] 2xl:text-[1rem]">
                        {profileData.name}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
