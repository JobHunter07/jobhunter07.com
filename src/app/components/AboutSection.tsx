import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#3a4a3b]">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 
          className="text-5xl font-serif text-center text-[#f5f3ed] mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          About
        </h2>
        
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif text-[#d17d47] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Mission
            </h3>
            <p className="text-[#c5c2b5] leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              To transform job hunting from a daunting wilderness into an exciting expedition, empowering every candidate with the tools and guidance they need.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#d17d47] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What We Offer
            </h3>
            <ul className="text-[#c5c2b5] text-sm space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>• Application Tracking</li>
              <li>• Company Research Tools</li>
              <li>• Resume Optimization</li>
              <li>• Interview Preparation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#d17d47] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h3>
            <ul className="text-[#c5c2b5] text-sm space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li><a href="#" className="hover:text-[#d17d47] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#d17d47] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#d17d47] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#d17d47] transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#d17d47] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Connect
            </h3>
            <div className="flex gap-4 mb-4">
              <Facebook className="w-6 h-6 text-[#c5c2b5] hover:text-[#d17d47] cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-[#c5c2b5] hover:text-[#d17d47] cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-[#c5c2b5] hover:text-[#d17d47] cursor-pointer transition-colors" />
            </div>
            <p className="text-[#c5c2b5] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Follow us for daily tips and insights
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#4a5a4b] pt-8 text-center">
          <p className="text-[#8a9a8b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 Jobhunter07. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
