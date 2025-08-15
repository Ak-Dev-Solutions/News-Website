import { notFound } from 'next/navigation';
import Image from 'next/image';

const mockNews = [
  { id: 1, title: "Politics News 1", excerpt: "Summary of politics news 1", image: "/news-1.jpg" },
  { id: 2, title: "Politics News 2", excerpt: "Summary of politics news 2", image: "/news-2.jpg" },
  { id: 3, title: "Politics News 3", excerpt: "Summary of politics news 3", image: "/news-3.jpg" },
  { id: 4, title: "Politics News 4", excerpt: "Summary of politics news 4", image: "/news-4.jpg" },
  { id: 5, title: "Politics News 5", excerpt: "Summary of politics news 5", image: "/news-5.jpg" },
  { id: 6, title: "Politics News 6", excerpt: "Summary of politics news 6", image: "/news-6.jpg" },
  { id: 7, title: "Politics News 7", excerpt: "Summary of politics news 7", image: "/news-7.jpg" },
  { id: 8, title: "Politics News 8", excerpt: "Summary of politics news 8", image: "/news-8.jpg" },
  { id: 9, title: "Politics News 9", excerpt: "Summary of politics news 9", image: "/news-9.jpg" },
];

function getNewsById(id) {
  return mockNews.find((item) => item.id === Number(id));
}

export default function PoliticsNewsDetailPage({ params }) {
  const { id } = params;
  const newsItem = getNewsById(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 min-h-[70vh] sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">{newsItem.title}</h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <p className="text-lg text-gray-700">{newsItem.excerpt}</p>
    </main>
  );
}
