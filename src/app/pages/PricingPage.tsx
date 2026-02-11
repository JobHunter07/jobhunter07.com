import React from 'react';
import { Header } from '../components/Header';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="bg-[#f5f3ed] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1707263189458-3f3efbed16e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBnZWFyJTIwZXF1aXBtZW50JTIwYmFja3BhY2t8ZW58MXx8fHwxNzcwNzcwMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Choose your gear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2b]/70 via-[#2a3a2b]/60 to-[#3a4a3b]/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f5f3ed] mb-4 md:mb-6 tracking-wide drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Choose Your Gear
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#f5f3ed] drop-shadow-lg"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Every explorer needs the right equipment
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#f5f3ed]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Free Plan */}
            <div className="bg-[#e8e5d9] rounded-lg p-8 shadow-lg border-2 border-transparent hover:border-[#d17d47] transition-all">
              <div className="text-center mb-6">
                <h3 
                  className="text-2xl md:text-3xl font-serif text-[#3a4a3b] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Scout
                </h3>
                <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  For those just starting the journey
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>$0</span>
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Track up to 10 applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Basic company research
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    1 resume version
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email support
                  </span>
                </li>
              </ul>
              
              <a 
                href="https://app.jobhunter07.com"
                className="block w-full text-center bg-[#5a6a5b] hover:bg-[#4a5a4b] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan - Featured */}
            <div className="bg-[#e8e5d9] rounded-lg p-8 shadow-2xl border-2 border-[#d17d47] transform md:-translate-y-4">
              <div className="bg-[#d17d47] text-white text-center py-2 rounded-md mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                MOST POPULAR
              </div>
              
              <div className="text-center mb-6">
                <h3 
                  className="text-2xl md:text-3xl font-serif text-[#3a4a3b] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Explorer
                </h3>
                <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  For serious job seekers
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>$19</span>
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong>Unlimited</strong> application tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Advanced company research tools
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Unlimited resume versions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Smart reminders & notifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Analytics & insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Priority support
                  </span>
                </li>
              </ul>
              
              <a 
                href="https://app.jobhunter07.com"
                className="flex items-center justify-center gap-2 w-full bg-[#d17d47] hover:bg-[#b66a38] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#e8e5d9] rounded-lg p-8 shadow-lg border-2 border-transparent hover:border-[#d17d47] transition-all">
              <div className="text-center mb-6">
                <h3 
                  className="text-2xl md:text-3xl font-serif text-[#3a4a3b] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Expedition
                </h3>
                <p className="text-[#5a6a5b] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  For teams & career coaches
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-serif text-[#3a4a3b]" style={{ fontFamily: 'Playfair Display, serif' }}>$49</span>
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Everything in Explorer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Up to 5 team members
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Shared templates & resources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    White-label options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#d17d47] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Dedicated account manager
                  </span>
                </li>
              </ul>
              
              <a 
                href="https://app.jobhunter07.com"
                className="block w-full text-center bg-[#5a6a5b] hover:bg-[#4a5a4b] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#6a7a6b]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#f5f3ed] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Feature Comparison
          </h2>
          
          <div className="bg-[#e8e5d9] rounded-lg overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#5a6a5b]">
                  <tr>
                    <th className="text-left p-4 text-[#f5f3ed]" style={{ fontFamily: 'Playfair Display, serif' }}>Feature</th>
                    <th className="text-center p-4 text-[#f5f3ed]" style={{ fontFamily: 'Inter, sans-serif' }}>Scout</th>
                    <th className="text-center p-4 text-[#f5f3ed]" style={{ fontFamily: 'Inter, sans-serif' }}>Explorer</th>
                    <th className="text-center p-4 text-[#f5f3ed]" style={{ fontFamily: 'Inter, sans-serif' }}>Expedition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c5c2b5]">
                  <tr>
                    <td className="p-4 text-[#3a4a3b]" style={{ fontFamily: 'Inter, sans-serif' }}>Application Tracking</td>
                    <td className="text-center p-4 text-[#5a6a5b]">10</td>
                    <td className="text-center p-4 text-[#5a6a5b]">Unlimited</td>
                    <td className="text-center p-4 text-[#5a6a5b]">Unlimited</td>
                  </tr>
                  <tr className="bg-[#f5f3ed]">
                    <td className="p-4 text-[#3a4a3b]" style={{ fontFamily: 'Inter, sans-serif' }}>Company Research</td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#3a4a3b]" style={{ fontFamily: 'Inter, sans-serif' }}>Resume Versions</td>
                    <td className="text-center p-4 text-[#5a6a5b]">1</td>
                    <td className="text-center p-4 text-[#5a6a5b]">Unlimited</td>
                    <td className="text-center p-4 text-[#5a6a5b]">Unlimited</td>
                  </tr>
                  <tr className="bg-[#f5f3ed]">
                    <td className="p-4 text-[#3a4a3b]" style={{ fontFamily: 'Inter, sans-serif' }}>Smart Reminders</td>
                    <td className="text-center p-4 text-[#8a9a8b]">—</td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#3a4a3b]" style={{ fontFamily: 'Inter, sans-serif' }}>Analytics</td>
                    <td className="text-center p-4 text-[#8a9a8b]">—</td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                  </tr>
                  <tr className="bg-[#f5f3ed]">
                    <td className="p-4 text-[#3a4a3b]" style={{ fontFamily: 'Inter, sans-serif' }}>Team Collaboration</td>
                    <td className="text-center p-4 text-[#8a9a8b]">—</td>
                    <td className="text-center p-4 text-[#8a9a8b]">—</td>
                    <td className="text-center p-4"><Check className="w-5 h-5 text-[#d17d47] mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#f5f3ed]">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#3a4a3b] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[#e8e5d9] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Can I cancel anytime?
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Yes! Cancel your subscription anytime with no penalties. Your data will remain accessible for 30 days after cancellation.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Is there a free trial?
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Yes! Try Explorer free for 14 days. No credit card required.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                What payment methods do you accept?
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                We accept all major credit cards, PayPal, and offer annual billing at a 20% discount.
              </p>
            </div>

            <div className="bg-[#e8e5d9] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-[#5a6a5b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades at the end of your billing cycle.
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
            Ready to Start Your Journey?
          </h2>
          <p 
            className="text-lg md:text-xl text-[#c5c2b5] mb-8 md:mb-10"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Choose the plan that's right for you and take control of your job search today.
          </p>
          <a 
            href="https://app.jobhunter07.com"
            className="inline-flex items-center gap-2 bg-[#d17d47] hover:bg-[#b66a38] text-white px-8 md:px-10 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
