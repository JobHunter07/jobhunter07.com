import React from 'react';

interface TipCardProps {
  image: string;
  title: string;
  description: string;
}

export function TipCard({ image, title, description }: TipCardProps) {
  return (
    <div className="bg-[#e8e5d9] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-serif text-[#3a4a3b] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </h3>
        <p className="text-[#5a6a5b] leading-relaxed" style={{ fontFamily: 'Source Serif 4, serif' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
