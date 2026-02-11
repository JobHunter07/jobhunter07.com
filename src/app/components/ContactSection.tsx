import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-[#5a6a5b] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1764042082382-d68eaeaa53f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29tcGFzcyUyMG1hcHxlbnwxfHx8fDE3NzA2NDYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Compass background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[#f5f3ed] mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Form */}
          <div className="bg-[#e8e5d9] p-6 md:p-10 lg:p-12 rounded-lg shadow-2xl">
            <h3 className="text-xl md:text-2xl font-serif text-[#3a4a3b] mb-4 md:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[#3a4a3b] mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-[#c5c2b5] bg-white focus:outline-none focus:border-[#d17d47] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[#3a4a3b] mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-[#c5c2b5] bg-white focus:outline-none focus:border-[#d17d47] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[#3a4a3b] mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-[#c5c2b5] bg-white focus:outline-none focus:border-[#d17d47] transition-colors resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#d17d47] hover:bg-[#b66a38] text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#e8e5d9] p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4 mb-4 md:mb-6">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#d17d47] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Location
                  </h4>
                  <p className="text-[#5a6a5b] text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    123 Explorer Lane<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-4 md:mb-6">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#d17d47] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Email
                  </h4>
                  <p className="text-[#5a6a5b] text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    hello@jobhunter07.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#d17d47] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-[#3a4a3b] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Phone
                  </h4>
                  <p className="text-[#5a6a5b] text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#e8e5d9] p-6 md:p-8 rounded-lg shadow-lg">
              <h4 className="text-lg md:text-xl font-serif text-[#3a4a3b] mb-3 md:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Office Hours
              </h4>
              <div className="space-y-2 text-[#5a6a5b] text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}