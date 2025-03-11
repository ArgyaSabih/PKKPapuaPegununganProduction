import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  images: {
    remotePatterns: [
       {
           protocol: 'https',
           hostname: "cdn.sanity.io",
           port: "",
       } 
    ]
},
};

export default nextConfig;
