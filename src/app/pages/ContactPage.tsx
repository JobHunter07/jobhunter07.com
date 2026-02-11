import React from 'react';
import { Header } from '../components/Header';
import { ContactSection } from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="bg-[#f5f3ed] min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
    </div>
  );
}
