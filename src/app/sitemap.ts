import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/vinfast-vung-tau`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/mua-xe-vinfast-bien-vang-vung-tau`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/tu-van-ban-hang`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/dang-ky-green-sm`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/cap-phu-hieu-va-vao-htx`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/tin-tuc`,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/lien-he`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/tin-tuc/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
