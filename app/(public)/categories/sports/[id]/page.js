import Image from "next/image";

// Same sportsNews data, or better to import from a shared file
const sportsNews = [
  { id: "1", title: "Local Team Wins Championship", excerpt: "Highlights from the thrilling final match.", image: "/news-1.jpg", content: "Full detailed content about how the local team won the championship..." },
  { id: "2", title: "Star Player Injured Ahead of Season", excerpt: "Update on recovery and expected return time.", image: "/news-2.jpg", content: "Detailed info about the star player's injury and recovery timeline..." },
  { id: "3", title: "Upcoming Sports Events This Month", excerpt: "Don't miss these exciting games and tournaments.", image: "/news-3.jpg", content: "Details about upcoming sports events in the region this month." },
  { id: "4", title: "Interview with the Champion Coach", excerpt: "Exclusive insights from the winning coach.", image: "/news-4.jpg", content: "Interview transcript and insights shared by the champion coach." },
  { id: "5", title: "Youth Sports Development Programs", excerpt: "How young athletes are being trained for future success.", image: "/news-5.jpg", content: "Information about youth training programs and their impact." },
  { id: "6", title: "Top 10 Moments in Recent Sports History", excerpt: "A look back at some unforgettable events.", image: "/news-6.jpg", content: "Highlights of the top memorable sports moments recently." },
  { id: "7", title: "Fitness Tips for Aspiring Athletes", excerpt: "Stay in shape with these expert recommendations.", image: "/news-7.jpg", content: "Expert fitness advice for athletes of all levels." },
  { id: "8", title: "Women in Sports Breaking Barriers", excerpt: "Celebrating female athletes' achievements.", image: "/news-8.jpg", content: "Stories of inspiring female athletes and their journeys." },
  { id: "9", title: "Sports Technology Advancements", excerpt: "How tech is changing the game.", image: "/news-9.jpg", content: "An overview of the latest technology in sports." },
];

export default function SportsNewsDetail({ params }) {
  const { id } = params;
  const newsItem = sportsNews.find((item) => item.id === id);

  if (!newsItem) {
    return <p className="mt-10 text-center text-red-500">News not found.</p>;
  }

  return (
    <div className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{newsItem.title}</h1>
      <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg shadow-lg sm:h-96">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <p className="text-lg text-gray-700">{newsItem.content}</p>
    </div>
  );
}
