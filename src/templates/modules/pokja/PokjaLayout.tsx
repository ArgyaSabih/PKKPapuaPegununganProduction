import { JSX, ReactNode, SVGProps } from "react";
import Image from "next/image";

export function PokjaLayout({
  PageIcon,
  name,
  children,
}: {
  PageIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
  children: ReactNode[];
}) {
  return (
    <main className="mb-24 mt-6 flex flex-col items-center gap-y-8">
      <PageIcon data-gsap="flip" className="h-32 w-32" />
      <div className="w-full space-y-6 px-4 lg:px-16">
        <h1 data-gsap="up" className="text-center text-3xl font-semibold text-[#1A7AE3]">
          {name}
        </h1>
        <div className="relative h-14 space-y-2 py-6">
          <div className="h-1 bg-[#1A7AE3]" />
          <div className="mx-6 h-1 bg-[#EEEE22] lg:mx-12" />
          <div className="absolute left-1/2 top-0 -translate-x-12 -translate-y-1 bg-white px-6">
            <Image
              src="/templates/components/PKK.png"
              className="h-14 w-14"
              alt="Logo PKK"
              sizes="100%"
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className="mt-8 space-y-4 text-xl">{children}</div>
      </div>
    </main>
  );
}
