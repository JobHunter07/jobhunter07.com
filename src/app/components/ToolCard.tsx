import React from 'react';

interface ToolCardProps {
  image: string;
  title: string;
  description: string;
}

export function ToolCard({ image, title, description }: ToolCardProps) {
  return (
    <div className="bg-[#e8e5d9] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </h3>
        <p className="text-[#5a6a5b] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
