import Link from 'next/link';
import NewsCard from '@/components/NewsCard';

// Dummy data - 9 sports news items
const sportsNews = [
  { id: 1, title: "Sports News 1", excerpt: "Summary of sports news 1", image: "/news-1.jpg" },
  { id: 2, title: "Sports News 2", excerpt: "Summary of sports news 2", image: "/news-2.jpg" },
  { id: 3, title: "Sports News 3", excerpt: "Summary of sports news 3", image: "/news-3.jpg" },
  { id: 4, title: "Sports News 4", excerpt: "Summary of sports news 4", image: "/news-4.jpg" },
  { id: 5, title: "Sports News 5", excerpt: "Summary of sports news 5", image: "/news-5.jpg" },
  { id: 6, title: "Sports News 6", excerpt: "Summary of sports news 6", image: "/news-6.jpg" },
  { id: 7, title: "Sports News 7", excerpt: "Summary of sports news 7", image: "/news-7.jpg" },
  { id: 8, title: "Sports News 8", excerpt: "Summary of sports news 8", image: "/news-8.jpg" },
  { id: 9, title: "Sports News 9", excerpt: "Summary of sports news 9", image: "/news-9.jpg" },
];

export default function SportsPage() {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Sports News</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sportsNews.map(({ id, title, excerpt, image }) => (
          <Link key={id} href={`/categories/sports/${id}`} className="block">
            <NewsCard title={title} excerpt={excerpt} image={image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
