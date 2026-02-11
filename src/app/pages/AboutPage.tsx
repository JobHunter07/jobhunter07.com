import React from 'react';
import { Header } from '../components/Header';
import { AboutSection } from '../components/AboutSection';
import { FounderStorySection } from '../components/FounderStorySection';

export default function AboutPage() {
  return (
    <div className="bg-[#f5f3ed] min-h-screen">
      <Header />
      <div className="pt-20">
        <FounderStorySection />
        <AboutSection />
      </div>
    </div>
  );
}
