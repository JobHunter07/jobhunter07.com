import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ToolsSection } from '../components/ToolsSection';
import { HuntTipsSection } from '../components/HuntTipsSection';
import { FounderStorySection } from '../components/FounderStorySection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="bg-[#f5f3ed]">
      <Header />
      <Hero />
      <ToolsSection />
      <HuntTipsSection />
      <FounderStorySection />
      <AboutSection />
    </div>
  );
}
