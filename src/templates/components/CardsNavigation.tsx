import React from "react";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Pokja I",
    link: "/pokja/1",
    image: "/components/homepage/pokja1.png",
  },
  {
    title: "Pokja II",
    link: "/pokja/2",
    image: "/components/homepage/pokja2.png",
  },
  {
    title: "Pokja III",
    link: "/pokja/3",
    image: "/components/homepage/pokja3.png",
  },
  {
    title: "Pokja IV",
    link: "/pokja/4",
    image: "/components/homepage/pokja4.png",
  },
  {
    title: "Sekretariat",
    link: "/pokja/sekretariat",
    image: "/components/homepage/sekretariat.png",
  },
];

export function CardsNavigation() {
  return (
    <section className="bg-white1 px-8 py-16">
      <div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[6.5vw] font-bold text-blue1 xs:text-[5.8vw] sm:text-[2.2rem] lg:text-[2.7rem]">
            Pokja & Sekretariat
          </h2>
          <Image
            src={"/components/homepage/placement.png"}
            alt="Placement"
            width={300}
            height={20}
            className="mx-auto w-[40vw] max-w-[300px] sm:w-full"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-8 xl:gap-20">
          {cards.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              data-gsap="flip"
              className="group flex w-[30vw] flex-col items-center rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl s:w-[25vw] sm:w-[22vw] md:w-[15vw] lg:w-[14vw] 2xl:w-[230px]"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="p-4 text-center text-lg font-semibold text-gray-800 md:text-xl">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
