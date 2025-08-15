import Link from 'next/link';
import NewsCard from '@/components/NewsCard';

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

export default function PoliticsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 min-h-[70vh]">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Politics News</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mockNews.map(({ id, title, excerpt, image }) => (
          <Link key={id} href={`/categories/politics/${id}`} className="block">
            <NewsCard title={title} excerpt={excerpt} image={image} />
          </Link>
        ))}
      </div>
    </section>
  );
}
