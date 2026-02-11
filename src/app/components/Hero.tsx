import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Cinematic Forest with Trail */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1765967879516-48f74b737536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMHBhdGglMjBwaW5lJTIwdHJlZXMlMjBtaXN0fGVufDF8fHx8MTc3MDc2NzUwNnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Forest trail with mist"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2b]/30 via-transparent to-[#3a4a3b]/60" />
        
        {/* Trail Overlay with Footprints */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-1/4 opacity-30">
            <svg width="150" height="300" viewBox="0 0 200 400" className="text-[#3a4a3b] md:w-[200px] md:h-[400px]">
              {/* Deer footprints */}
              <ellipse cx="90" cy="80" rx="8" ry="12" fill="currentColor" opacity="0.4" />
              <ellipse cx="95" cy="95" rx="7" ry="11" fill="currentColor" opacity="0.4" />
              <ellipse cx="88" cy="120" rx="8" ry="12" fill="currentColor" opacity="0.4" />
              <ellipse cx="93" cy="140" rx="7" ry="11" fill="currentColor" opacity="0.4" />
              
              {/* Boot footprints */}
              <rect x="105" y="90" width="18" height="28" rx="4" fill="currentColor" opacity="0.5" />
              <rect x="100" y="130" width="18" height="28" rx="4" fill="currentColor" opacity="0.5" />
              <rect x="108" y="170" width="18" height="28" rx="4" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-20">
        {/* Decorative Vintage Compass - Large and Centered */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <svg width="80" height="80" viewBox="0 0 120 120" className="opacity-80 drop-shadow-2xl md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
            {/* Outer circle */}
            <circle cx="60" cy="60" r="55" stroke="#f5f3ed" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="60" cy="60" r="50" stroke="#d17d47" strokeWidth="1.5" fill="none" opacity="0.8" />
            
            {/* Cardinal points */}
            <text x="60" y="20" textAnchor="middle" fill="#f5f3ed" fontSize="14" fontFamily="serif" fontWeight="bold">N</text>
            <text x="60" y="105" textAnchor="middle" fill="#f5f3ed" fontSize="12" fontFamily="serif">S</text>
            <text x="105" y="65" textAnchor="middle" fill="#f5f3ed" fontSize="12" fontFamily="serif">E</text>
            <text x="15" y="65" textAnchor="middle" fill="#f5f3ed" fontSize="12" fontFamily="serif">W</text>
            
            {/* Inner decorative elements */}
            <circle cx="60" cy="60" r="8" fill="#d17d47" opacity="0.7" />
            
            {/* Compass needle */}
            <polygon points="60,60 55,25 60,20 65,25" fill="#d17d47" opacity="0.9" />
            <polygon points="60,60 55,95 60,100 65,95" fill="#f5f3ed" opacity="0.7" />
            
            {/* Tick marks */}
            <line x1="60" y1="10" x2="60" y2="15" stroke="#f5f3ed" strokeWidth="1" opacity="0.6" />
            <line x1="60" y1="105" x2="60" y2="110" stroke="#f5f3ed" strokeWidth="1" opacity="0.6" />
            <line x1="10" y1="60" x2="15" y2="60" stroke="#f5f3ed" strokeWidth="1" opacity="0.6" />
            <line x1="105" y1="60" x2="110" y2="60" stroke="#f5f3ed" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>
        
        <h1 
          className="text-3xl md:text-5xl lg:text-7xl font-serif text-[#f5f3ed] mb-4 md:mb-6 tracking-wide drop-shadow-2xl"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            letterSpacing: '0.05em',
            textShadow: '0 4px 12px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
          }}
        >
          LAND YOUR DREAM JOB
        </h1>
        <p 
          className="text-sm md:text-xl lg:text-2xl text-[#f5f3ed] mb-8 md:mb-12 tracking-widest drop-shadow-lg"
          style={{ 
            fontFamily: 'Source Serif 4, serif', 
            letterSpacing: '0.15em',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
          }}
        >
          TRACK THE PATH TO SUCCESS
        </p>
        <a 
          href="https://app.jobhunter07.com"
          className="inline-block bg-[#d17d47] hover:bg-[#b66a38] text-white px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          EXPLORE NOW
        </a>
      </div>

      {/* Torn Paper Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-[#6a7a6b]">
        <svg className="w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            d="M0,20 Q120,35 240,25 T480,30 Q600,20 720,35 T960,25 Q1080,40 1200,30 T1440,25 L1440,60 L0,60 Z" 
            fill="#6a7a6b"
          />
        </svg>
      </div>
    </section>
  );
}