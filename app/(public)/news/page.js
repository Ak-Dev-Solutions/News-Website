// app/news/page.jsx
import Link from "next/link";
import Image from "next/image";

const newsData = [
  { id: 1, slug: "sample-news-headline-1", title: "Sample News Headline 1", excerpt: "Brief summary 1", image: "/news-1.jpg", content: "Full content of news 1..." },
  { id: 2, slug: "sample-news-headline-2", title: "Sample News Headline 2", excerpt: "Brief summary 2", image: "/news-2.jpg", content: "Full content of news 2..." },
  // ... more news items
];

export default function NewsPage() {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center text-gray-900">
        Latest News
      </h1>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {newsData.map(({ id, slug, title, excerpt, image }) => (
          <article
            key={id}
            className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative w-full h-64 md:h-72">
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-xl" />
            </div>

            <div className="p-5">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                {title}
              </h3>
              <p className="mb-4 text-gray-600">{excerpt}</p>
              <Link
                href={`/news/${slug}`}
                className="inline-block px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
 