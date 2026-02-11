import React from 'react';
import { Header } from '../components/Header';
import { ArrowRight, FileText, Edit3, FolderOpen, Sparkles } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="bg-[#f5f3ed] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587116987928-21e47bd76cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBkb2N1bWVudCUyMHByb2Zlc3Npb25hbCUyMGNsZWFufGVufDF8fHx8MTc3MDc2OTk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Resume organization and management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2b]/70 via-[#2a3a2b]/60 to-[#3a4a3b]/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f5f3ed] mb-4 md:mb-6 tracking-wide drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Resume
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#f5f3ed] mb-8 drop-shadow-lg"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Organize and tailor your resume for every opportunity
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
              Sending the same generic resume to every job is like using a dull blade for precision work. You need the right tool for the right situation.
            </p>
            <ul className="space-y-4 text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>You have 10 different versions of your resume scattered across folders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>Tailoring your resume for each job takes hours of tedious copy-pasting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>You can't remember which resume you sent to which company</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>Formatting breaks every time you make a small edit</span>
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
            How Resume Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  1. Store Master Content
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Build a library of all your experiences, skills, and accomplishments in one central location.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Edit3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  2. Tailor for Each Role
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quickly create customized versions by selecting relevant experiences and reordering content to match job descriptions.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  3. Version Control
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Save every version with notes on which company received it. Never lose track of what you sent where.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  4. Export & Share
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Export professional PDFs with one click. Formatting stays perfect every time.
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
            Why Resume is Different
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Modular Content System
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Build once, customize infinitely. Mix and match experiences, skills, and projects to fit any job description.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Linked to Applications
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Automatically attach resume versions to job applications in Job Tracker. Know exactly what you sent where.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Professional Templates
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Choose from ATS-friendly templates that recruiters love. Clean, modern, and designed to pass automated screening.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Smart Suggestions
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get AI-powered recommendations on which experiences to highlight based on the job description keywords.
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
                Multi-Role Applicants
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Applying to different types of roles? Tailor your resume in minutes, not hours.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Organized Professionals
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Keep all resume versions organized and accessible. No more "Resume_Final_V3_ACTUAL.pdf".
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                ATS Optimizers
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Want to ensure your resume passes automated screening systems every time.
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
            Start Organizing Your Resumes Today
          </h2>
          <p 
            className="text-lg md:text-xl text-[#c5c2b5] mb-8 md:mb-10"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Tailor your story for every opportunity. Stand out from the crowd.
          </p>
          <a 
            href="https://app.jobhunter07.com"
            className="inline-flex items-center gap-2 bg-[#d17d47] hover:bg-[#b66a38] text-white px-8 md:px-10 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Launch Resume Manager
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
