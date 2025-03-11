import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { ArticleSlug } from "@/templates/components/ArticleSlug";

export async function generateStaticParams() {
  const query = `
    *[_type == "blog"] {
      "slug": slug.current
    }
  `;
  const slugs = await client.fetch(query);

  return slugs.map((slug: { slug: string }) => ({
    slug: slug.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      title,
      publishedAt,
      author->{
        name
      },
      body,
      mainImage[]
    }
  `;

  const article = await client.fetch(query, { slug: (await params).slug });

  if (!article) {
    return (
      <div>
        <h1>Article Not Found</h1>
      </div>
    );
  }

  const date = new Date(article.publishedAt);
  const formattedDate = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;

  const imageUrls = article.mainImage.map((image: any) => urlFor(image).url());

  return (
    <div className="flex flex-col items-center justify-center bg-white p-[8vw] text-black lg:p-[5vw]">
      <ArticleSlug
        title={article.title}
        date={formattedDate}
        author={article.author?.name || "Unknown"}
        images={imageUrls} // Multiple images passed
        body={article.body}
      />
    </div>
  );
}
