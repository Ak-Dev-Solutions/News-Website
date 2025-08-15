'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            USNow<span className="text-blue-600">360</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-6 font-medium text-gray-700 md:flex">
          <Link href="/news" className="hover:text-blue-600">News</Link>
          <Link href="/categories/politics" className="hover:text-blue-600">Politics</Link>
          <Link href="/categories/economy" className="hover:text-blue-600">Economy</Link>
          <Link href="/categories/sports" className="hover:text-blue-600">Sports</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="px-4 py-2 space-y-2 bg-gray-100 border-t md:hidden">
          <Link href="/news" className="block hover:text-blue-600">News</Link>
          <Link href="/categories/politics" className="block hover:text-blue-600">Politics</Link>
          <Link href="/categories/economy" className="block hover:text-blue-600">Economy</Link>
          <Link href="/categories/sports" className="block hover:text-blue-600">Sports</Link>
        </nav>
      )}
    </header>
  );
}
