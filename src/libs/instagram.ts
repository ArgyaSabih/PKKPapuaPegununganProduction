import dotenv from "dotenv";
dotenv.config();

export interface Post {
  media_type: string;
  media_url: string;
  permalink: string;
  id: string;
}

export async function getUserPosts() {
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.NEXT_PUBLIC_INSTAGRAM_ID;

  if (!ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
    throw new Error("Missing Instagram credentials in environment variables.");
  }

  console.log("Using access token:", ACCESS_TOKEN);

  const url = new URL(`https://graph.instagram.com/v18.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`);
  url.searchParams.append("fields", "media_type,media_url,permalink");
  url.searchParams.append("access_token", ACCESS_TOKEN);

  try {
    const res = await fetch(url.toString());

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.data?.filter(
      (post: any) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM",
    ) as Post[];
  } catch (e) {
    console.error("Error fetching posts:", e);
    return [];
  }
}
