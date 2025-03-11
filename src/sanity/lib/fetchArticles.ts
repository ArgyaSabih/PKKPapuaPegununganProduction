import { urlFor } from "../../../sanity/lib/image";
import { client } from "../../../sanity/lib/client";

export async function fetchArticles() {
    const query = `
      *[_type == "blog"] | order(publishedAt desc) [0...21] {
        _id,
        title,
        slug,
        publishedAt,
        author->{
          name
        },
        tags[]->{
          _id,
          name
        },
        mainImage,
        body
      }
    `;
  
    const data = await client.fetch(query);
  
    if (!data || data.length === 0) {
      return { featured: [], others: [] };
    }
  
    const articles = data.map((item: any) => {
      const date = new Date(item.publishedAt);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
  
      return {
        title: item.title,
        description: item.body?.[0]?.children?.[0]?.text || "No description available",
        date: `${year}-${month}-${day}`,
        author: item.author?.name || "Unknown",
        image: urlFor(item.mainImage[0]).url(),
        url: `/artikel/${item.slug?.current}`,
      };
    });
  
    return {
      featured: articles.slice(0, 6),
      others: articles.slice(6, 21),
    };
  }
  