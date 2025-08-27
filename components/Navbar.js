'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Flame, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { href: "/", label: "Home" },
    { href: "/news", label: "News" },
    { href: "/categories/business", label: "Business" },
    { href: "/categories/defence", label: "Defence" },
    { href: "/categories/health", label: "Health" },
    { href: "/categories/lifestyle", label: "Lifestyle" },
    { href: "/categories/environment", label: "Environment" },
    { href: "/categories/religion", label: "Religion" },
    { href: "/categories/education", label: "Education" },
    { href: "/categories/realestate", label: "Realestate" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* Top Row: Logo + Ad Space */}
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Flame className="text-blue-600 w-7 h-7 sm:w-8 sm:h-8" />
          <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              HotTopics
            </span>
            <span className="text-blue-600">Hub</span>
          </div>
        </Link>

        {/* Ad Placeholder */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center w-64 h-10 text-sm text-gray-500 bg-gray-100 border rounded-md">
            Ad Space
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Category Bar */}
      <nav className="items-center justify-between hidden max-w-6xl px-4 py-3 mx-auto mt-2 text-white md:flex bg-gradient-to-r from-red-700 to-red-600 rounded-xl">
        {/* Categories */}
        <div className="flex space-x-6 font-medium">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="hover:underline whitespace-nowrap"
            >
              {cat.label}
            </Link>
          ))}
        </div>
        {/* Search */}
       {/* Search */}
<button className="flex items-center justify-center w-10 h-10 transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:scale-110">
  <Search className="w-5 h-5 text-white" />
</button>

      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="px-4 py-3 space-y-3 text-white rounded-none md:hidden bg-gradient-to-r from-red-700 to-red-600">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
          <button className="p-2 bg-red-500 rounded-full hover:bg-red-400">
            <Search className="w-4 h-4 text-blue-200" />
          </button>
        </nav>
      )}
    </header>
  );
}
