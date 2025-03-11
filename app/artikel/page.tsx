import Image from "next/image";
import { ArticleList } from "@/templates/modules/artikel/ArtikelSection";

export default function Artikel() {
  return (
    <div className="container mx-auto p-16 md:p-32">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-[5.7vw] font-bold text-blue1 xs:text-2xl md:text-4xl">
          Artikel Terkini
        </h1>
        <Image
          src="/components/tentang/placement.png"
          alt="Placement"
          width={800}
          height={800}
          className="mx-auto mb-4 h-auto w-full sm:w-[400px] md:w-full xl:w-[800px]"
        />
      </div>
      <ArticleList pagination={true} />
    </div>
  );
}
