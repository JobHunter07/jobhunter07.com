import React from 'react';
import { TipCard } from './TipCard';

export function HuntTipsSection() {
  return (
    <section id="hunt-tips" className="py-12 md:py-16 lg:py-20 bg-[#f5f3ed]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#3a4a3b] mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Hunt Tips
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <TipCard 
            image="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBidXNpbmVzc3xlbnwxfHx8fDE3NzA3NjY4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            title="Master the Interview"
            description="Learn essential techniques to navigate the interview wilderness. Prepare responses that showcase your unique strengths and leave a lasting impression on hiring managers."
          />
          <TipCard 
            image="https://images.unsplash.com/photo-1587116987928-21e47bd76cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBkb2N1bWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA3MjgyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            title="CV Strategy Secrets"
            description="Craft a compelling narrative that captures attention. Discover proven strategies to transform your experience into an irresistible career story."
          />
        </div>
      </div>
    </section>
  );
}