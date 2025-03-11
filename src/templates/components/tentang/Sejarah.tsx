"use client";

import React, { useState } from "react";
import Image from "next/image";

const Sejarah: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sejarahContent = [
    {
      id: 1,
      text: "PKK yang merupakan gerakan pembangunan masyarakat bermula dari Seminar Home Economic di Bogor pada tahun 1957, yang menghasilkan rumusan 10 Segi Kehidupan Keluarga.\n\nKemudian ditindaklanjuti oleh Kementrian Pendidikan, Pengajaran, dan Kebudayaan pada tahun 1961 yang menetapkan 10 Segi Kehidupan Keluarga sebagai Kurikulum Pendidikan Kesejahteraan Keluarga yang diajarkan di sekolah-sekolah. \n\nPada bulan Mei tahun 1962 di Desa Salaman Kabupaten Magelang, Provinsi Jawa Tengah, didirikan Pusat Latihan Pendidikan Masyarakat (PLPM) untuk menyebarluaskan 10 Segi Kehidupan Keluarga. \n\nSekitar tahun 1967 kehidupan sebagian masyarakat Jawa Tengah sangat menyedihkan, khususnya di daerah Dieng Kabupaten Wonosobo diantara mereka banyak yang menderita Honger Odeem (HO). Kondisi ini telah menyentuh hati Ibu Isriati Moenadi, sebagai Isteri Gubernur Jawa Tengah saat itu. Beliau merasa bertanggung jawab terhadap kesejahteraan masyarakatnya dan berinisiatif membentuk PKK di Jawa Tengah, dari tingkat Provinsi sampai ketingkat Desa dan Kelurahan, dengan susunan pengurus terdiri dari unsur-unsur Istri Pimpinan Daerah, Tokoh-tokoh masyarakat, perempuan, dan laki-laki untuk melaksanakan 10 Segi Pokok PKK secara intensif.",
    },
    {
      id: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quia maiores excepturi quidem! Minima aliquid nisi distinctio reprehenderit pariatur asperiores commodi eligendi omnis a deserunt dolor sapiente illum est mollitia enim quaerat dolores earum totam dolore reiciendis, ipsa nam, incidunt suscipit veniam. Dolorum impedit non commodi similique recusandae dignissimos esse beatae voluptate nemo delectus modi harum dolor excepturi architecto earum officia deserunt minus provident, quasi sed. Beatae eligendi nulla provident illum eius ut odio alias ad distinctio. Vitae atque magni praesentium rerum distinctio dignissimos dolorum. Voluptatibus sapiente sunt quasi, deserunt modi ea fugiat voluptates, eligendi dolores culpa minus? Aperiam repellendus dolorum error, rem, laudantium quaerat perspiciatis consequuntur dolor accusamus magnam commodi tempora, explicabo provident asperiores libero quidem ab. Vero eius laboriosam laudantium error quisquam porro a beatae quo optio illum quaerat, autem, quae quod esse. Soluta modi, iusto, facilis ipsam vero molestiae temporibus minima dignissimos hic nam cupiditate recusandae voluptatum quo possimus? Autem iste facilis molestiae cupiditate illo. Ut esse nulla accusantium nemo eaque aut consequuntur molestias, harum maiores doloremque quidem voluptatum laudantium inventore sapiente obcaecati numquam! Necessitatibus quisquam distinctio, hic quae quo iusto amet facilis autem nemo fugiat cumque dolores asperiores deserunt ipsum sapiente minus doloremque dolorem, alias tempora dolore? Qui vero laudantium, magni voluptatum necessitatibus temporibus. Qui temporibus quae deleniti quisquam voluptatibus odit totam recusandae velit architecto nobis? Minima dolore, quisquam temporibus laudantium fugiat rerum hic officia quia? Illo quas hic consequatur nisi praesentium eaque provident voluptatem blanditiis impedit quam. Deleniti, reprehenderit dignissimos ut quod temporibus nihil nobis deserunt veniam nisi itaque doloribus et tempore labore eveniet inventore neque voluptas ipsa asperiores odit impedit nulla distinctio fuga error? Libero totam neque a aperiam repellendus autem dicta corporis beatae, voluptate quae ipsa pariatur culpa similique repudiandae. Soluta maxime autem distinctio accusamus ut quos nisi qui accusantium, nesciunt quidem omnis incidunt perferendis! Ullam accusantium harum iure culpa optio, pariatur repellat quod? Sit facere quam ducimus qui, sequi suscipit eligendi beatae assumenda fugiat similique aut numquam laboriosam at esse delectus quos optio voluptates omnis, alias, ea recusandae. Eligendi alias sapiente, voluptate laudantium ad voluptas architecto perferendis temporibus, amet provident eum quo distinctio libero obcaecati? Provident dolorum similique, eos asperiores, accusamus, at enim doloremque laudantium eum aliquid voluptas minus. Eum consequatur, iusto sunt alias id voluptatem libero velit. Quibusdam harum vero eius dicta itaque quod magni officia, esse enim libero maxime quia accusamus sit? Veniam qui nemo ut in doloribus quisquam iusto accusamus dolores, porro illo autem deserunt perspiciatis repellat nesciunt maxime impedit rerum eos explicabo atque, eius a cumque vero quibusdam molestias? Voluptate ut pariatur inventore praesentium, iste illum ea nostrum dolorem, architecto quos, sunt vel itaque. Harum quam eum delectus. Est accusantium cum labore explicabo consequuntur vel illum natus. Excepturi expedita impedit quos totam quidem cupiditate voluptate eaque error recusandae earum tempora labore perferendis ab corrupti itaque, eligendi possimus nemo necessitatibus! Amet corporis dolore quidem. Labore odio eos est. Provident eum earum, eius consectetur facere totam blanditiis minima, rerum sapiente molestiae eos, illo cumque! Quasi cumque ab assumenda libero culpa.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum laboriosam debitis, at, aliquid quaerat voluptates, atque perspiciatis nulla vero quibusdam placeat odio doloribus temporibus harum et impedit iusto sunt veniam neque dolor quam aut saepe mollitia. Maxime aperiam nulla aut beatae pariatur repellendus laudantium, alias voluptatum mollitia debitis sapiente explicabo blanditiis dolorem tempore, fuga earum laboriosam repudiandae molestiae similique voluptates! Dicta modi ullam minus qui aperiam aliquam exercitationem officia quisquam alias id. Vel facere sint sunt ab veritatis omnis quaerat impedit illum! Magni sequi porro aspernatur et fuga neque maxime autem. Aliquid animi ullam corporis architecto repudiandae exercitationem? Culpa atque nihil ab dicta eum in molestias voluptate tempore cum inventore? Eum, id. Recusandae dicta iste voluptates harum officiis tenetur optio magni perferendis velit amet. Veniam odio sit rerum ipsum eligendi voluptatum pariatur corrupti, sunt perferendis recusandae quisquam distinctio, fugiat perspiciatis nihil nesciunt voluptatibus non dolorem repellendus laboriosam tenetur error voluptas, eveniet beatae accusantium? Deleniti officiis incidunt error, at animi sed maiores non vel eligendi magnam temporibus ratione facere delectus excepturi fuga beatae quod! Et porro praesentium eos incidunt illum, iure exercitationem sequi quaerat ipsum delectus, eius ducimus dolores magni expedita quas facilis assumenda aut. Iusto quia qui expedita tempore?",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis atque voluptates ea expedita, quae aliquid, aut tempora harum repudiandae quas deleniti! Repudiandae accusamus sapiente eaque excepturi reiciendis quaerat aliquid blanditiis recusandae. Voluptatibus, molestias eum nihil corrupti et, numquam deserunt qui nisi pariatur officia illo ex sed praesentium quaerat optio dolores a dicta accusamus commodi at aspernatur asperiores explicabo laborum! Molestias repellendus sit molestiae. Ipsum suscipit pariatur eum vel eius non minima repudiandae, molestiae soluta cupiditate blanditiis aliquid facilis ab dolore vitae id, perferendis aperiam assumenda. Harum vero, excepturi quibusdam fugit facere reprehenderit sint assumenda quos nihil maxime mollitia aperiam debitis architecto, quae eum laudantium deleniti sunt sequi praesentium, blanditiis ab itaque placeat? Voluptates at hic, accusamus consectetur illo aliquam repudiandae ipsam, impedit corporis laudantium, odio dolor nihil culpa voluptatibus dolorem suscipit ratione obcaecati? Ipsum impedit officiis eius porro dolores, quo minus rem iusto nesciunt maxime ex aut obcaecati non repudiandae blanditiis et minima fugiat autem itaque sint ea. Laboriosam quod adipisci dicta sunt ducimus quaerat magni placeat nihil cupiditate velit, perspiciatis veniam alias, doloremque eum voluptatem, voluptates id cumque explicabo? Nemo perferendis, itaque, aliquid sequi sint dolores inventore quibusdam doloremque officiis delectus dicta. Dolorem, et. Itaque a neque dolorum earum commodi nulla veritatis iusto in quaerat pariatur at fuga, id ipsam iste laboriosam eaque minima facilis cumque voluptatibus eveniet? Doloremque, velit, nam a fuga blanditiis rem voluptatum soluta voluptatibus unde porro distinctio eos labore ex quos reprehenderit, veritatis dolorem dolorum impedit laborum exercitationem facilis. Placeat, ut dolorum laudantium architecto id accusantium perspiciatis quas minus nulla maiores recusandae eum sit maxime reiciendis illum quidem quibusdam a eveniet minima, praesentium pariatur aliquam. Tenetur maxime facilis eveniet repellat? Consequatur, aspernatur a. Amet quis placeat fugit dolorum reprehenderit expedita consectetur cupiditate earum sit soluta magnam ad, enim, autem eaque natus pariatur fugiat. At!",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit eveniet culpa velit ea dolorum nesciunt odio exercitationem! Quasi ea suscipit minus enim, maxime omnis illum accusantium ratione in error. Impedit voluptatibus tenetur, in libero nihil quas deserunt, fugit eligendi commodi quibusdam ut debitis maiores consequuntur nulla voluptatum consequatur? Perferendis ut asperiores eius ducimus. Veritatis, repellendus perspiciatis soluta, dolor sed et maxime repudiandae earum excepturi laboriosam fugiat quas facilis voluptate non eligendi, ullam saepe suscipit impedit sunt repellat nesciunt quam! Ipsam aut omnis eligendi repellat perspiciatis corrupti, ipsum saepe recusandae. Ad non dolores sint laudantium ex aliquam accusantium tempore, veniam libero.",
    },
  ];

  const renderPaginationButtons = () => {
    const pageGroupSize = 5;
    const currentGroup = Math.ceil(currentPage / pageGroupSize);
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, sejarahContent.length);

    const pageButtons = [];

    // Left navigation button
    if (currentPage > 1) {
      pageButtons.push(
        <button
          key="prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 text-black hover:bg-gray-100"
        >
          &lt;
        </button>,
      );
    }

    // Page buttons
    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 ${
            currentPage === page ? "bg-white text-blue1 shadow-md" : "text-black"
          }`}
        >
          {page}
        </button>,
      );
    }

    // Right navigation button
    if (currentPage < sejarahContent.length) {
      pageButtons.push(
        <button
          key="next"
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 text-black hover:bg-gray-100"
        >
          &gt;
        </button>,
      );
    }

    return pageButtons;
  };

  const currentContent = sejarahContent.find((content) => content.id === currentPage);

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full p-16 text-white md:px-32">
        {/* Header */}
        <div className="mb-6 text-center lg:mb-12">
          <h1 className="mb-4 text-[5.7vw] font-bold text-blue1 xs:text-2xl md:text-4xl">
            Sejarah Singkat
          </h1>
          <Image
            src="/components/tentang/placement.png"
            alt="Placement"
            width={800}
            height={800}
            className="mx-auto mb-4 h-auto w-full sm:w-[400px] md:w-full xl:w-[800px]"
          />
        </div>

        {/* Content */}
        <div className="mb-8 text-justify">
          <p className="whitespace-pre-line text-[3.2vw] text-black xs:text-base md:text-xl">
            {currentContent?.text}
          </p>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center space-x-1 s:space-x-4">
          {renderPaginationButtons()}
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
