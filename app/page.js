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

const columnists = [
  {
    id: 1,
    name: "Neeraj Mahajan",
    role: "CEO & Editor, Taazakhabar News",
    image: "/columnist1.jpg",
  },
  {
    id: 2,
    name: "Anil Swarup, IAS (Retd.)",
    role: "Former Secretary, Government of India",
    image: "/columnist2.jpg",
  },
];

export default function Home() {
  return (
    <div className="px-4 py-6 mx-auto bg-white max-w-7xl md:px-6">
      {/* Navbar */}
      <nav className="flex items-center px-4 py-3 space-x-6 text-sm font-semibold text-white bg-red-900 shadow-md">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/news" className="hover:underline">News</Link>
        <Link href="/business" className="hover:underline">Business</Link>
        <Link href="/defence" className="hover:underline">Defence</Link>
        <Link href="/health" className="hover:underline">Health</Link>
        <Link href="/lifestyle" className="hover:underline">Lifestyle</Link>
        <Link href="/environment" className="hover:underline">Environment</Link>
        <Link href="/religion" className="hover:underline">Religion</Link>
        <Link href="/education" className="hover:underline">Education</Link>
        <Link href="/realestate" className="hover:underline">Realestate</Link>
        <button className="p-1 ml-auto hover:text-gray-300" aria-label="Search">
          🔍
        </button>
      </nav>

      {/* Editors Pick Section - Modified */}
      <section className="mt-6">
        <h2 className="inline-block mb-4 text-xs font-bold text-red-900 uppercase border-b-2 border-red-900">
          Top Headlines
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {editorsPick.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Three Category Columns */}
      <section className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
        {/* Crime */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase border-b border-gray-300">Crime</h3>
          {crimeNews.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-3 space-x-3">
              <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded" />
              <p className="text-sm hover:underline">{news.title}</p>
            </Link>
          ))}
        </div>

        {/* Travel */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase border-b border-gray-300">Travel</h3>
          {travelNews.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-3 space-x-3">
              <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded" />
              <p className="text-sm hover:underline">{news.title}</p>
            </Link>
          ))}
        </div>

        {/* Entertainment */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase border-b border-gray-300">Entertainment</h3>
          {entertainmentNews.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="flex items-center mb-3 space-x-3">
              <Image src={news.image} alt={news.title} width={60} height={60} className="object-cover rounded" />
              <p className="text-sm hover:underline">{news.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 pt-8 mt-8 border-t border-gray-200 md:grid-cols-12">
        {/* DONOT MISS Heading */}
        <h2 className="col-span-12 px-3 py-1 text-sm font-bold text-white uppercase bg-red-700 w-fit">
          Don&apos;t Miss
        </h2>

        {/* Left large story */}
        <Link
          href={`/news/${dontMiss[0].id}`}
          className="col-span-12 md:col-span-7 group"
        >
          <div className="relative">
            <Image
              src={dontMiss[0].image}
              alt={dontMiss[0].title}
              width={700}
              height={400}
              className="object-cover w-full rounded"
            />
            <span className="absolute px-2 py-1 text-xs font-bold text-white uppercase bottom-3 left-3 bg-black/70">
              {dontMiss[0].category}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-bold leading-snug text-gray-900 group-hover:underline">
            {dontMiss[0].title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {dontMiss[0].excerpt}
          </p>
        </Link>

        {/* Right-hand small stories */}
        <div className="col-span-12 space-y-4 md:col-span-5">
          {dontMiss.slice(1).map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="flex items-center p-1 pb-3 space-x-3 border-b border-gray-200 rounded hover:bg-gray-50"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={60}
                  className="object-cover rounded"
                />
              ) : (
                <div className="w-20 bg-gray-200 rounded h-15" />
              )}
              <div>
                <span className="inline-block px-1.5 py-0.5 mb-1 text-[10px] font-bold tracking-wide uppercase text-white bg-gray-700 rounded">
                  {item.category}
                </span>
                <p className="text-sm leading-snug text-gray-900 hover:underline">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Join Us */}
        <aside className="col-span-12 pt-6 mt-6 border-t border-gray-200 md:col-span-3 md:mt-0 md:border-t-0 md:border-l md:pl-6">
          <h3 className="inline-block px-3 py-1 mb-4 text-sm font-bold text-white uppercase bg-gray-800">
            Join Us
          </h3>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/share/19TihMhz6n/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-red-700 hover:bg-red-800"
            >
              f
            </a>
            <a
              href="https://x.com/govtdeskhub?t=d5gvC4vb72gVO_skMyRnEw&s=09"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-red-700 hover:bg-red-800"
            >
              x
            </a>
            <a
              href="https://www.linkedin.com/in/akdevsolutions/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-red-700 hover:bg-red-800"
            >
              in
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
