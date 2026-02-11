import React from 'react';
import { ToolCard } from './ToolCard';

export function ToolsSection() {
  return (
    <section id="tools" className="py-12 md:py-16 lg:py-20 bg-[#6a7a6b]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#f5f3ed] mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ToolCard 
            image="https://images.unsplash.com/photo-1665242052712-561ace8465d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMGpvdXJuYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzA3NjY4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            title="JOB TRACKER"
            description="Keep tabs on every application from first contact to final offer. Your personal expedition logbook for the job search journey."
          />
          <ToolCard 
            image="https://images.unsplash.com/photo-1737348689949-dd74c0aabff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW5vY3VsYXJzJTIwZXhwbG9yYXRpb258ZW58MXx8fHwxNzcwNzY2ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            title="COMPANY SCOUT"
            description="Research companies and industries like a seasoned explorer. Discover the terrain before you venture in."
          />
          <ToolCard 
            image="https://images.unsplash.com/photo-1738598631584-8be50eb41e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1vdWZsYWdlJTIwbmV0JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzA3NjY4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            title="CV AMBUSH"
            description="Strategically position your resume to stand out from the crowd. Master the art of surprise and impact."
          />
        </div>
      </div>
    </section>
  );
}