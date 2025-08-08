'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  const handleBookTour = () => {
    // This would integrate with Setmore
    window.open('https://my.setmore.com/bookingpage/your-setmore-id', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen bg-brand-light overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/2422609/pexels-photo-2422609.jpeg"
          alt="Beautiful Sarasota Bay water view"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-teal mb-6 animate-fade-in">
            Cruise Sarasota in a{' '}
            <span className="text-brand-accent">Pink Cadillac Boat</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-teal/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Bring your own drinks and enjoy an unforgettable ride through beautiful Sarasota Bay!
          </p>
          <div className="animate-fade-in">
            <Button onClick={handleBookTour} size="lg" className="text-lg px-12 py-4">
              Book a Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}