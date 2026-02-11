import React from 'react';
import { Compass, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#2a3a2b]/80 via-[#2a3a2b]/50 to-transparent">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Compass className="w-8 h-8 text-[#d17d47]" strokeWidth={2.5} />
          <span className="text-2xl font-serif text-[#f5f3ed] drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
            Jobhunter07
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#home" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Home
          </a>
          <a href="#tools" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tools
          </a>
          <a href="#hunt-tips" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hunt Tips
          </a>
          <a href="#about" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            About
          </a>
          <a href="#contact" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Contact
          </a>
        </nav>

        {/* Search */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-md bg-[#2a3a2b]/60 backdrop-blur-sm border border-[#4a5a4b]/50 text-[#f5f3ed] placeholder-[#8a9a8b] focus:outline-none focus:border-[#d17d47]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a8b]" />
        </div>
      </div>
    </header>
  );
}
