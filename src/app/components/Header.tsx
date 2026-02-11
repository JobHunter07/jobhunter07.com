import React, { useState } from 'react';
import { Compass, Search, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTools = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const toolsSection = document.getElementById('tools');
        toolsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const toolsSection = document.getElementById('tools');
      toolsSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#2a3a2b]/80 via-[#2a3a2b]/50 to-transparent">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <Compass className="w-6 h-6 md:w-8 md:h-8 text-[#d17d47]" strokeWidth={2.5} />
          <span className="text-lg md:text-2xl font-serif text-[#f5f3ed] drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
            Jobhunter07
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Home
          </Link>
          <a href="#tools" onClick={scrollToTools} className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tools
          </a>
          <Link to="/pricing" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Pricing
          </Link>
          <Link to="/about" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            About
          </Link>
          <Link to="/contact" className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Contact
          </Link>
          <a 
            href="https://app.jobhunter07.com" 
            className="bg-[#d17d47] hover:bg-[#b66a38] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Launch App
          </a>
        </nav>

        {/* Desktop Search & Mobile Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden lg:block relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-md bg-[#2a3a2b]/60 backdrop-blur-sm border border-[#4a5a4b]/50 text-[#f5f3ed] placeholder-[#8a9a8b] focus:outline-none focus:border-[#d17d47]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a8b]" />
          </div>

          {/* Mobile Search Icon */}
          <button className="lg:hidden p-2">
            <Search className="w-5 h-5 text-[#f5f3ed]" />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#f5f3ed]" />
            ) : (
              <Menu className="w-6 h-6 text-[#f5f3ed]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2a3a2b]/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors py-2" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#tools" 
              onClick={scrollToTools}
              className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors py-2 cursor-pointer" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Tools
            </a>
            <Link 
              to="/pricing" 
              className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors py-2" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors py-2" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-[#f5f3ed] hover:text-[#d17d47] transition-colors py-2" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://app.jobhunter07.com" 
              className="bg-[#d17d47] hover:bg-[#b66a38] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Launch App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}