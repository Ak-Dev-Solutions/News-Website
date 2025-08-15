import { notFound } from 'next/navigation';
import Image from 'next/image';

// Same dummy data as in economy/page.js
const economyNews = [
  { id: 1, title: "Economy Boosts Post Pandemic Recovery", excerpt: "Latest updates on economic growth and market trends.", image: "/news-1.jpg" },
  { id: 2, title: "Inflation Rate Steady This Quarter", excerpt: "What the inflation numbers mean for consumers and investors.", image: "/news-2.jpg" },
  { id: 3, title: "Government Announces New Economic Policies", excerpt: "Insights into fiscal and monetary policy changes.", image: "/news-3.jpg" },
  { id: 4, title: "Stock Markets Show Positive Trends", excerpt: "An overview of the latest stock market movements.", image: "/news-4.jpg" },
  { id: 5, title: "Unemployment Rate Declines", excerpt: "New jobs created in various sectors across the country.", image: "/news-5.jpg" },
  { id: 6, title: "Real Estate Market Gains Momentum", excerpt: "Housing prices and sales data for this quarter.", image: "/news-6.jpg" },
  { id: 7, title: "Tech Industry Driving Economic Growth", excerpt: "How technology companies are boosting the economy.", image: "/news-7.jpg" },
  { id: 8, title: "Export-Import Figures Improve", excerpt: "Trade balance and international market updates.", image: "/news-8.jpg" },
  { id: 9, title: "Consumer Spending Rises", excerpt: "Analysis of consumer behavior and spending patterns.", image: "/news-9.jpg" },
];

// Helper function to get news item by id
function getEconomyNewsById(id) {
  return economyNews.find((item) => item.id === Number(id));
}

export default function EconomyNewsDetailPage({ params }) {
  const { id } = params;
  const newsItem = getEconomyNewsById(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-3xl sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">{newsItem.title}</h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
        />
      </div>
      <p className="text-lg text-gray-700">{newsItem.excerpt}</p>
      {/* You can add more detailed content here if available */}
    </div>
  );
}
