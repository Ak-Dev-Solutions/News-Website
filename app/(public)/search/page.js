// app/search/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchNews } from "@/lib/fetchNews"; // your API utility

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await fetchNews(query); // fetch news by search query
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">
        Search News
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex max-w-xl mx-auto mb-10"
      >
        <input
          type="text"
          placeholder="Type keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-500">Loading results...</p>
      )}

      {/* Results */}
      {!loading && results.length > 0 && (
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {results.map(({ id, slug, title, excerpt, image }) => (
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
      )}

      {/* No Results */}
      {!loading && results.length === 0 && query && (
        <p className="text-center text-gray-500">
          No results found for &quot;{query}&quot;
        </p>
      )}
    </div>
  );
}
