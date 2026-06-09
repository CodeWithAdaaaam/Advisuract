import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://advisuract.net", lastModified: new Date() },
    { url: "https://advisuract.net/about", lastModified: new Date() },
    { url: "https://advisuract.net/services", lastModified: new Date() },
    { url: "https://advisuract.net/contact", lastModified: new Date() },
    { url: "https://advisuract.net/careers", lastModified: new Date() },
    { url: "https://advisuract.net/insights", lastModified: new Date() },
  ];
}