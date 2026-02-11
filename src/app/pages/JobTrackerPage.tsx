import React from 'react';
import { Header } from '../components/Header';
import { ArrowRight, CheckCircle, Clock, FileText, TrendingUp } from 'lucide-react';

export default function JobTrackerPage() {
  return (
    <div className="bg-[#f5f3ed] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA3Njk4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Job application tracking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2b]/70 via-[#2a3a2b]/60 to-[#3a4a3b]/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f5f3ed] mb-4 md:mb-6 tracking-wide drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Job Tracker
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#f5f3ed] mb-8 drop-shadow-lg"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Track every step of your job search journey with precision
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
              Job hunting feels like wandering through an endless forest without a map. You apply to dozens of positions, but lose track of where you've been, what you said, and where you're going next.
            </p>
            <ul className="space-y-4 text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>You forget which companies you've contacted and when</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>Follow-ups slip through the cracks, costing you opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>You can't see patterns in what's working and what's not</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d17d47] mt-1">•</span>
                <span>Spreadsheets become messy and overwhelming</span>
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
            How Job Tracker Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  1. Add Applications
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quickly log every job you apply to with company name, position, application date, and custom notes.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  2. Track Status
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Update application status from "Applied" to "Interview Scheduled" to "Offer Received" with one click.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  3. Never Miss Follow-Ups
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Set reminders for follow-up emails, interview prep, and thank-you notes. Stay proactive and organized.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d17d47] rounded-full p-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  4. Analyze Progress
                </h3>
              </div>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                See your application success rate, response times, and identify which strategies work best.
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
            Why Job Tracker is Different
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Built for Job Seekers
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Unlike generic spreadsheets or CRMs, Job Tracker is designed specifically for tracking job applications with fields that actually matter.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Simple & Intuitive
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                No learning curve. Add an application in seconds. Update status with a single click. Focus on your search, not the tool.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Smart Reminders
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Automated nudges ensure you never miss a follow-up or deadline. Stay top-of-mind with recruiters.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your Data, Your Privacy
              </h3>
              <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                We never share your job search data. It's yours alone, secure and private.
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
                Recent Graduates
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Applying to your first 50+ jobs? Stay organized and increase your response rate.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Career Changers
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Navigating a new industry? Track your learning, applications, and networking all in one place.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Active Job Seekers
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Managing multiple applications simultaneously? Keep every detail at your fingertips.
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
            Start Tracking Your Applications Today
          </h2>
          <p 
            className="text-lg md:text-xl text-[#c5c2b5] mb-8 md:mb-10"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Take control of your job search. Never lose track of an opportunity again.
          </p>
          <a 
            href="https://app.jobhunter07.com"
            className="inline-flex items-center gap-2 bg-[#d17d47] hover:bg-[#b66a38] text-white px-8 md:px-10 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Launch Job Tracker
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
