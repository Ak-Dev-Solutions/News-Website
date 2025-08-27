import Image from "next/image";
import Link from "next/link";

const editorsPick = [
  {
    id: 1,
    title: "Magical World of Bioluminescence: Unlocking the Secrets of Nature’s Light",
    category: "Environment & Wildlife",
    image: "/editor-main.jpg",
  },
  {
    id: 2,
    title: "How Dire Wolf that had become extinct 13,000 years ago have been brought back to life",
    category: "Environment & Wildlife",
    image: "/editor1.jpg",
  },
  {
    id: 3,
    title: "Importance of Butterflies – what would happen if they suddenly vanish?",
    category: "Environment & Wildlife",
    image: "/editor2.jpg",
  },
];

const crimeNews = [
  { id: 1, title: "Unveiling Steganography: The Dark Side of Digital Media", image: "/crime1.jpg" },
  { id: 2, title: "Policemen dismissed for links with narco-terrorists in J&K", image: "/crime2.jpg" },
  { id: 3, title: "The imposter who worked for 9 years in ITBP on the basis of fake...", image: "/crime3.jpg" },
  { id: 4, title: "Clash of the Uniforms: Why army and police don’t see eye to eye", image: "/crime4.jpg" },
];

const travelNews = [
  { id: 1, title: "Kerala - nature’s paradise on earth", image: "/travel1.jpg" },
  { id: 2, title: "Mind your business in my space", image: "/travel2.jpg" },
  { id: 3, title: "The biggest palaces in the world!!", image: "/travel3.jpg" },
  { id: 4, title: "Top 12 most romantic honeymoon destinations in the World", image: "/travel4.jpg" },
];

const entertainmentNews = [
  { id: 1, title: "The most expensive cars in the market", image: "/ent1.jpg" },
  { id: 2, title: "Political tailoring: how Modi and other Indian leaders dress to impress", image: "/ent2.jpg" },
  { id: 3, title: "Dick Tracy: The iconic Comic-book detective and the fight against crime", image: "/ent3.jpg" },
  { id: 4, title: "Phantom - the Ghost who walks", image: "/ent4.jpg" },
];

const dontMiss = [
  {
    id: 1,
    title: "Winston Churchill and the British rule in India",
    excerpt: "Winston Churchill was a Victorian imperialist who viewed non-European peoples through a paternalistic, often derogatory lens.",
    category: "Lifestyle",
    image: "/dontmiss1.jpg",
  },
  {
    id: 2,
    title: "How did American bombs destroy Iran’s three nuclear plants?",
    category: "Defence",
  },
  {
    id: 3,
    title: "Bail or Jail: Why should someone be forced to seek bail?",
    category: "Legal",
  },
  {
    id: 4,
    title: "The dark, hidden and ugly side of banks in India – Part 4",
    category: "Business",
  },
  {
    id: 5,
    title: "PMs & Presidents of Pakistan who couldn’t complete a full term",
    category: "News",
  },
  {
    id: 6,
    title: "10 most beautiful and unexploited islands in India",
    category: "Travel",
  },
];

export default function Home() {
  return (
    <div className="px-4 py-6 mx-auto max-w-7xl bg-gray-50 md:px-6">

      {/* Editors Pick */}
      <section className="mt-8">
        <h2 className="relative pl-4 mb-6 text-lg font-bold text-gray-900 uppercase md:text-xl">
          <span className="absolute top-0 left-0 w-1 h-full bg-red-700 rounded"></span>
          Top Headlines
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {editorsPick.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="relative overflow-hidden shadow-lg rounded-xl group"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-semibold uppercase">{item.category}</span>
                <h3 className="mt-1 text-base font-bold leading-snug group-hover:underline">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Crime / Travel / Entertainment Above Don't Miss */}
      <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        {/* Crime */}
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="mb-4 text-xs font-bold text-red-700 uppercase border-b-2 border-red-200">Crime</h3>
          {crimeNews.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-4 space-x-3 group">
              <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded-lg" />
              <p className="text-sm group-hover:text-red-700">{news.title}</p>
            </Link>
          ))}
        </div>

        {/* Travel */}
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="mb-4 text-xs font-bold text-blue-700 uppercase border-b-2 border-blue-200">Travel</h3>
          {travelNews.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-4 space-x-3 group">
              <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded-lg" />
              <p className="text-sm group-hover:text-blue-700">{news.title}</p>
            </Link>
          ))}
        </div>

        {/* Entertainment */}
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="mb-4 text-xs font-bold text-purple-700 uppercase border-b-2 border-purple-200">Entertainment</h3>
          {entertainmentNews.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-4 space-x-3 group">
              <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded-lg" />
              <p className="text-sm group-hover:text-purple-700">{news.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Don't Miss */}
      <section className="grid grid-cols-1 gap-6 pt-10 mt-10 border-t border-gray-300 md:grid-cols-12">
        <h2 className="col-span-12 mb-6">
          <span className="inline-block px-4 py-1.5 text-sm md:text-base font-bold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-red-700 to-red-500 shadow-md">
            Don&apos;t Miss
          </span>
        </h2>

        {/* Left big story */}
        <Link
          href={`/news/${dontMiss[0].id}`}
          className="col-span-12 md:col-span-7 group"
        >
          <div className="relative overflow-hidden shadow-lg rounded-xl">
            <Image
              src={dontMiss[0].image}
              alt={dontMiss[0].title}
              width={700}
              height={400}
              className="object-cover w-full transition-transform duration-500 h-72 md:h-96 group-hover:scale-105"
            />
            <span className="absolute px-2 py-1 text-xs font-bold text-white uppercase rounded bottom-3 left-3 bg-black/60">
              {dontMiss[0].category}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-red-700">
            {dontMiss[0].title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {dontMiss[0].excerpt}
          </p>
        </Link>

        {/* Right-hand list */}
        <div className="col-span-12 space-y-4 md:col-span-5">
          {dontMiss.slice(1).map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="flex items-center p-2 space-x-3 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={60}
                  className="object-cover rounded-md"
                />
              ) : (
                <div className="w-20 h-16 bg-gray-200 rounded" />
              )}
              <div>
                <span className="inline-block px-1.5 py-0.5 mb-1 text-[10px] font-bold uppercase text-white bg-gray-700 rounded">
                  {item.category}
                </span>
                <p className="text-sm leading-snug text-gray-900 hover:text-red-700">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Horror Story / Top personalities / Country Above Join Us */}
        <section className="grid grid-cols-1 col-span-12 gap-6 mt-10 md:grid-cols-3">
          {/* Horror Story */}
          <div className="p-4 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xs font-bold text-red-700 uppercase border-b-2 border-red-200">Horror Story</h3>
            {crimeNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-4 space-x-3 group">
                <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded-lg" />
                <p className="text-sm group-hover:text-red-700">{news.title}</p>
              </Link>
            ))}
          </div>

          {/* Top personalities */}
          <div className="p-4 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xs font-bold text-blue-700 uppercase border-b-2 border-blue-200">Top personalities</h3>
            {travelNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-4 space-x-3 group">
                <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded-lg" />
                <p className="text-sm group-hover:text-blue-700">{news.title}</p>
              </Link>
            ))}
          </div>

          {/* Country */}
          <div className="p-4 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xs font-bold text-purple-700 uppercase border-b-2 border-purple-200">Country</h3>
            {entertainmentNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-4 space-x-3 group">
                <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded-lg" />
                <p className="text-sm group-hover:text-purple-700">{news.title}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Join Us */}
        <aside className="col-span-12 pt-6 mt-8 border-t border-gray-300 md:col-span-3 md:mt-0 md:border-t-0 md:border-l md:pl-6">
          <h3 className="inline-block px-3 py-1 mb-4 text-sm font-bold text-white uppercase bg-gray-800 rounded">
            Join Us
          </h3>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/share/19TihMhz6n/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              f
            </a>
            <a
              href="https://x.com/govtdeskhub?t=d5gvC4vb72gVO_skMyRnEw&s=09"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full hover:bg-gray-800"
            >
              x
            </a>
            <a
              href="https://www.linkedin.com/in/akdevsolutions/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-blue-700 rounded-full hover:bg-blue-800"
            >
              in
            </a>
          </div>
        </aside>

      </section>
    </div>
  );
}
