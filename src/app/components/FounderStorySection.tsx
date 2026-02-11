import React from 'react';
import { Star } from 'lucide-react';

export function FounderStorySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#5a6a5b]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#f5f3ed] mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Founder's Story
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl order-1">
            <img 
              src="https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NzA3NjY4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Founder portrait"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>

          {/* Story */}
          <div className="bg-[#e8e5d9] p-6 md:p-10 lg:p-12 rounded-lg shadow-lg order-2">
            <h3 
              className="text-2xl md:text-3xl font-serif text-[#3a4a3b] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              From Lost to Found
            </h3>
            <p 
              className="text-[#5a6a5b] leading-relaxed mb-4 md:mb-6"
              style={{ fontFamily: 'Source Serif 4, serif' }}
            >
              After navigating the treacherous terrain of job hunting myself, I discovered that success isn't about luck—it's about having the right map and compass. Jobhunter07 was born from countless late nights, rejections that taught me resilience, and the eventual triumph of landing my dream role.
            </p>
            <p 
              className="text-[#5a6a5b] leading-relaxed mb-6 md:mb-8"
              style={{ fontFamily: 'Source Serif 4, serif' }}
            >
              I created this platform to be the guide I wish I'd had: a companion that transforms uncertainty into strategy, and anxiety into adventure.
            </p>
            
            {/* Testimonial */}
            <div className="border-t border-[#c5c2b5] pt-4 md:pt-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#d17d47] text-[#d17d47]" />
                ))}
              </div>
              <p 
                className="text-[#3a4a3b] italic mb-2"
                style={{ fontFamily: 'Source Serif 4, serif' }}
              >
                "The tools here helped me land my dream job in just 6 weeks. I finally felt in control of my search."
              </p>
              <p className="text-sm text-[#6a7a6b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                — Sarah M., Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}