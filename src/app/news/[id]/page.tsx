import { Metadata } from "next";
import News from "../../pages/IndvidualNewsPage";
import newsData from "../../lib/news";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params since it's a Promise in App Router
  const { id } = await params;
  const article = newsData.find(news => news.id === id);

  return {
    title: `Summit News - ${article?.title ?? "Article"}`,
    description: article?.content.slice(0, 150) ?? "News article on ACDS 2025",
    openGraph: {
      title: article?.title ?? "Summit News | ACDS 2025",
      description: article?.content.slice(0, 150) ?? "Latest updates from the summit.",
      url: `https://acdss.com.ng/news/${id}`,
      siteName: "ACDS 2025",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: article?.title ?? "Summit News | ACDS 2025",
      description: article?.content.slice(0, 150) ?? "Latest updates from the summit."
    },
    alternates: {
      canonical: `https://acdss.com.ng/news/${id}`
    }
  };
}

const NewsPage = async ({ params }: Props) => {
  return <News />;
};

export default NewsPage;