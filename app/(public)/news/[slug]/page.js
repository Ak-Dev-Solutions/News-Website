// app/news/[slug]/page.jsx
import Image from "next/image";

const newsData = [
  { id: 1, slug: "sample-news-headline-1", title: "Sample News Headline 1", excerpt: "Brief summary 1", image: "/news-1.jpg", content: "Full content of news 1..." },
  { id: 2, slug: "sample-news-headline-2", title: "Sample News Headline 2", excerpt: "Brief summary 2", image: "/news-2.jpg", content: "Full content of news 2..." },
  // ... baki news items
];

// Next.js function to generate metadata or prefetch data for all slugs
export async function generateStaticParams() {
  return newsData.map(news => ({
    slug: news.slug,
  }));
}

export default function NewsDetailPage({ params }) {
  const { slug } = params;

  // Find the news data matching the slug
  const newsItem = newsData.find(news => news.slug === slug);

  if (!newsItem) {
    return <p>News not found</p>;
  }

  return (
    <div className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">{newsItem.title}</h1>
      <div className="relative w-full mb-6 overflow-hidden rounded-lg shadow-lg h-96">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <p className="text-lg text-gray-700">{newsItem.content}</p>
    </div>
  );
}
