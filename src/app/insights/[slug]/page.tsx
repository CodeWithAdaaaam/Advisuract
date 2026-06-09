import { insights } from "@/data/insights";

export async function generateStaticParams() {
  return Object.keys(insights).map((slug) => ({ slug }));
}

export { default } from "./ArticleClient";