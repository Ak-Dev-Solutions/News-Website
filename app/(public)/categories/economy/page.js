import Link from 'next/link';
import NewsCard from '@/components/NewsCard';

// Dummy sample data - replace with your real fetch logic
const economyNews = [
  {
    id: 1,
    title: "Economy Boosts Post Pandemic Recovery",
    excerpt: "Latest updates on economic growth and market trends.",
    image: "/news-1.jpg",
  },
  {
    id: 2,
    title: "Inflation Rate Steady This Quarter",
    excerpt: "What the inflation numbers mean for consumers and investors.",
    image: "/news-2.jpg",
  },
  {
    id: 3,
    title: "Government Announces New Economic Policies",
    excerpt: "Insights into fiscal and monetary policy changes.",
    image: "/news-3.jpg",
  },
  {
    id: 4,
    title: "Stock Markets Show Positive Trends",
    excerpt: "An overview of the latest stock market movements.",
    image: "/news-4.jpg",
  },
  {
    id: 5,
    title: "Unemployment Rate Declines",
    excerpt: "New jobs created in various sectors across the country.",
    image: "/news-5.jpg",
  },
  {
    id: 6,
    title: "Real Estate Market Gains Momentum",
    excerpt: "Housing prices and sales data for this quarter.",
    image: "/news-6.jpg",
  },
  {
    id: 7,
    title: "Tech Industry Driving Economic Growth",
    excerpt: "How technology companies are boosting the economy.",
    image: "/news-7.jpg",
  },
  {
    id: 8,
    title: "Export-Import Figures Improve",
    excerpt: "Trade balance and international market updates.",
    image: "/news-8.jpg",
  },
  {
    id: 9,
    title: "Consumer Spending Rises",
    excerpt: "Analysis of consumer behavior and spending patterns.",
    image: "/news-9.jpg",
  },
];

export default function EconomyPage() {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Economy News</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {economyNews.map(({ id, title, excerpt, image }) => (
          <Link key={id} href={`/categories/economy/${id}`} className="block">
            <NewsCard title={title} excerpt={excerpt} image={image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
