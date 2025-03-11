import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutHomePage = () => {
  return (
    <section className="w-full bg-white px-8 py-8 sm:py-16">
      <div data-gsap="up" className="mx-auto max-w-[95rem]">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-12">
          {/* Text Content */}
          <div data-gsap="right" className="flex flex-col justify-center md:w-1/2">
            <h2 className="mb-4 text-[6vw] font-bold text-blue-500 xs:text-[5vw] sm:mb-6 sm:text-3xl xl:text-4xl 2xl:text-5xl">
              Tentang PKK
            </h2>
            <p className="2xl:text-md mb-4 text-justify text-[2.6vw] leading-relaxed text-gray-700 xs:text-[2.3vw] sm:mb-6 sm:text-[2vw] md:text-[1.4vw] lg:text-[1.2vw] xl:text-base">
              TP-PKK adalah singkatan dari Tim Penggerak Pemberdayaan dan Kesejahteraan Keluarga.
              TP-PKK merupakan organisasi kemasyarakatan yang bertugas untuk memberdayakan perempuan
              dalam pembangunan Indonesia. TP-PKK berperan sebagai perencana, pelaksana, dan
              pengendali program-program PKK. TP-PKK juga bermitra dengan pemerintah dan organisasi
              kemasyarakatan lainnya. Dengan 10 Program Pokok nya yaitu Penghayatan dan Pengamalan
              Pancasila, Gotong Royong, Pangan, Sandang, Perumahan dan Tata Laksana Rumah Tangga,
              Pendidikan dan Keterampilan, Kesehatan, Pengembangan Kehidupan Berkoperasi, dan
              Perencanaan Sehat.
            </p>
            <Link
              href="/tentang"
              className="inline-flex w-fit items-center rounded-md bg-blue-500 px-[2.2vw] py-[1.2vw] text-[3.5vw] text-white transition-colors hover:bg-blue-600 xs:text-[3vw] sm:px-4 sm:py-2 sm:text-base lg:px-6 lg:py-2 2xl:px-8 2xl:py-4 2xl:text-lg"
            >
              Baca Selengkapnya
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Image Content */}
          <div data-gsap="left" className="relative my-auto w-full md:w-1/2">
            <div className="relative aspect-[16/9] max-w-2xl overflow-hidden rounded-2xl">
              <Image
                src="/components/homepage/tentang.jpeg"
                alt="Tim Penggerak PKK Provinsi Papua Pegunungan"
                fill
                sizes="50vw"
                className="aspect-video w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#2880FF] to-transparent md:h-[50%] lg:h-[40%]">
                <div className="absolute bottom-2 left-4 right-4 space-y-0 lg:bottom-4 xl:space-y-1 2xl:space-y-2">
                  <h3 className="text-[3.1vw] font-semibold text-white sm:text-[3.2vw] md:text-[1.6vw] lg:text-[1.5vw] 2xl:text-[1.6rem]">
                    Tim Penggerak PKK Provinsi Papua Pegunungan
                  </h3>
                  <p className="text-[2.2vw] leading-relaxed text-white/90 sm:leading-normal md:text-[1.1vw] 2xl:text-[1rem]">
                    Tim Penggerak PKK Provinsi Papua Pegunungan tampak sedang menghadiri HUT Puncak
                    HKG-G di Solo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomePage;
