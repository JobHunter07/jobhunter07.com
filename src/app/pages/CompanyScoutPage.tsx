import React from 'react';
import { Header } from '../components/Header';
import { ArrowRight, Search, Building, Users, Target, TrendingUp } from 'lucide-react';

export default function CompanyScoutPage() {
  return (
    <div className="bg-[#f5f3ed] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621293046651-d0a3ccde854c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW5vY3VsYXJzJTIwZXhwbG9yYXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzcwNzY5OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Company research and scouting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2b]/70 via-[#2a3a2b]/60 to-[#3a4a3b]/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f5f3ed] mb-4 md:mb-6 tracking-wide drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Company Scout
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#f5f3ed] mb-8 drop-shadow-lg"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Research companies like a pro before you apply
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#6a7a6b]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#f5f3ed] mb-8 md:mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Problem
          </h2>
          <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-10 lg:p-12 shadow-2xl">
            <p 
              className="text-lg md:text-xl text-[#3a4a3b] leading-relaxed mb-6"
              style={{ fontFamily: 'Source Serif 4, serif' }}
            >
              Walking into an interview without knowing the company is like exploring unfamiliar territory without a map. You're unprepared, uninformed, and unlikely to impress.
            </p>
            <ul className="space-y-4 text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>You waste hours jumping between LinkedIn, Glassdoor, and Google</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>Critical details get lost in browser tabs and scattered notes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>You struggle to understand company culture and values</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>Interview questions catch you off guard because you didn't dig deep enough</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#f5f3ed]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#3a4a3b] mb-8 md:mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            How Company Scout Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  1. Centralized Research
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Gather all your company research in one place. Add notes about culture, recent news, key people, and products.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  2. Company Profiles
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Build detailed profiles for each company including size, industry, funding stage, and growth trajectory.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  3. Key Contacts
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Track hiring managers, recruiters, and potential colleagues. Know who's who before you walk in the door.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  4. Interview Prep
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Save common interview questions, company values, and talking points. Walk in confident and prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#5a6a5b]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#f5f3ed] mb-8 md:mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Company Scout is Different
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Everything in One Place
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Stop juggling browser tabs and scattered notes. Company Scout centralizes all your research so you can access it instantly.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Structured for Success
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pre-built templates guide you through what matters most: culture, values, growth, and fit.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Linked to Applications
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Company Scout integrates seamlessly with Job Tracker. Research once, reference forever.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Interview-Ready Notes
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Export your research as talking points or cheat sheets. Walk into interviews with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#f5f3ed]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#3a4a3b] mb-8 md:mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Who It's For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Strategic Applicants
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quality over quantity. Research deeply before applying to ensure cultural fit.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Interview Preppers
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Want to walk into every interview fully prepared and confident in your research.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Career Researchers
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Exploring new industries and need to understand company landscapes quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#3a4a3b]">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#f5f3ed] mb-6 md:mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start Researching Companies Today
          </h2>
          <p 
            className="text-lg md:text-xl text-[#c5c2b5] mb-8 md:mb-10"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Walk into every interview prepared, confident, and informed.
          </p>
          <a 
            href="https://app.jobhunter07.com"
            className="inline-flex items-center gap-2 bg-[#d17d47] hover:bg-[#b66a38] text-white px-8 md:px-10 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Launch Company Scout
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
