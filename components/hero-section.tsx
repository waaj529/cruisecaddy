'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleBookTour = () => {
    const el = document.getElementById('Setmore_button_iframe') as HTMLAnchorElement | null;
    if (el) {
      el.click();
    } else {
      // Fallback: navigate to in-page booking section instead of opening a new tab
      window.location.href = '/#booking';
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg-video/Caddy%20Cruise%20Hero%20Video.webm"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Overlay to ensure contrast over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl mb-6 animate-fade-in">
            Cruise Sarasota in a{' '}
            <span className="text-brand-accent">Pink Cadillac Boat</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Bring your own drinks and enjoy an unforgettable ride through beautiful Sarasota Bay!
          </p>
          <div className="animate-fade-in">
            <Button onClick={handleBookTour} size="lg" className="text-lg px-12 py-4 shadow-lg shadow-black/20">
              Book a Tour
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}