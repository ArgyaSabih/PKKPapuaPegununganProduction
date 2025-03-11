import DefaultLayout from "@/templates/layouts/DefaultLayout";
import FeaturedArticles from "@/templates/components/PaginationArticle"; // Import client component
import { fetchArticles } from "@/sanity/lib/fetchArticles"; // Import data fetching function
import Link from "next/link";
import { MdDateRange, MdPerson } from "react-icons/md";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export default async function ArticleHomePage() {
  const { featured, others } = await fetchArticles();

  return (
    <DefaultLayout className="flex flex-col justify-center gap-y-[4vw] bg-[#1A7AE3] px-[20px] text-white md:px-[100px] lg:gap-y-[3vw] lg:px-[140px] xl:px-[200px]">
      <h1 className="font-poppins self-center text-[5.556vw] font-bold text-white lg:text-[3.333vw]">
        Artikel Terkini
      </h1>
      <div className="flex items-center justify-center gap-x-[5vw] lg:gap-x-[3vw]">
        <div className="flex flex-col gap-y-[2vw]">
          {/* Featured Articles with Pagination */}
          <FeaturedArticles articles={featured} />
          <Link
            type="button"
            className="font-poppins hover:bg-lightblue hover:text-blue flex w-full flex-row justify-center gap-x-[1.5vw] self-center bg-[#FAFAFA] px-4 py-3 text-[2.419vw] font-[600] text-[#2B80FF] duration-300 md:text-[2vw] lg:rounded-[0.3vw] lg:px-6 lg:text-[1.316vw] lg:text-base"
            href="/artikel"
          >
            <h3>Lihat Semua Artikel</h3>
            <HiArrowNarrowRight
              style={{ fill: "#2B80FF" }}
              className="h-[3vw] w-[3vw] self-center lg:h-[1.5vw] lg:w-[1.5vw]"
            />
          </Link>
        </div>

        {/* Other Articles */}
        <div>
          <div className="h-full w-[34.722vw] rounded-lg bg-[#1B3780] text-white lg:w-[25vw]">
            <div className="flex items-center justify-center py-[0.5vw]">
              <h2 className="font-poppins text-[2.222vw] font-bold lg:text-[1.406vw]">
                Artikel Lainnya
              </h2>
            </div>
            <div className="h-full overflow-y-auto">
              {others.length > 0 ? (
                others.map(
                  (
                    article: {
                      url: string;
                      title: string;
                      date: string;
                      author: string;
                      image: string;
                    },
                    index: number,
                  ) => (
                    <Link key={index} href={article.url} className="flex flex-row">
                      <div className="relative h-[5.146vw] w-[6.979vw]">
                        <Image
                          src={article?.image || "/placeholder.jpg"}
                          alt={article.title}
                          fill={true}
                          className="absolute transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="items-right flex w-full flex-col justify-center border border-[#1B3780] bg-white p-[0.5vw] text-blue-900 shadow transition hover:bg-gray-200">
                        <h3 className="font-poppins text-[1.667vw] font-semibold text-[#112047] lg:text-[0.993vw]">
                          {article.title}
                        </h3>
                        <div className="mt-1 flex items-center text-[1.267vw] text-gray-600 lg:text-[0.872vw]">
                          <MdDateRange style={{ fill: "#1A7AE3" }} />
                          {article.date}
                          <MdPerson color="#1A7AE3" className="ml-4" />
                          {article.author}
                        </div>
                      </div>
                    </Link>
                  ),
                )
              ) : (
                <div className="text-center text-white">Belum ada artikel terbaru</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
