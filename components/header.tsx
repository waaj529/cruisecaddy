'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      const lastScrollY = lastScrollYRef.current;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
    if (!isHomePage) {
      // Hand off navigation to Next.js via anchor to ensure reliable cross-page routing
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleBookTour = () => {
    // This would integrate with Setmore
    window.open('https://my.setmore.com/bookingpage/your-setmore-id', '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" aria-label="Cruisecaddy home">
            <Anchor className="h-8 w-8 text-brand-accent" />
            <span className="text-xl lg:text-2xl font-bold text-brand-teal">
              Cruisecaddy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-brand-teal hover:text-brand-accent transition-colors font-medium"
            >
              Home
            </a>
            <Link
              href="/#tours"
              className="text-brand-teal hover:text-brand-accent transition-colors font-medium"
            >
              Tours
            </Link>
            <a
              href="/our-story"
              className="text-brand-teal hover:text-brand-accent transition-colors font-medium"
            >
              Our Story
            </a>
            <Link
              href="/#booking"
              className="text-brand-teal hover:text-brand-accent transition-colors font-medium"
            >
              Book Now
            </Link>
            <Link
              href="/#contact"
              className="text-brand-teal hover:text-brand-accent transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:+19417777465"
              className="flex items-center space-x-2 text-brand-teal hover:text-brand-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(941) 777-7465</span>
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button onClick={handleBookTour} size="lg">
              Book a Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-teal hover:text-brand-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        id="mobile-menu"
      >
        <div className="container mx-auto px-4 py-6 space-y-4 text-center">
          <a
            href="/"
            className="block w-full py-2 text-brand-teal hover:text-brand-accent transition-colors font-medium"
          >
            Home
          </a>
          <Link
            href="/#tours"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full py-2 text-brand-teal hover:text-brand-accent transition-colors font-medium"
          >
            Tours
          </Link>
          <a
            href="/our-story"
            className="block w-full py-2 text-brand-teal hover:text-brand-accent transition-colors font-medium"
          >
            Our Story
          </a>
          <Link
            href="/#booking"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full py-2 text-brand-teal hover:text-brand-accent transition-colors font-medium"
          >
            Book Now
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full py-2 text-brand-teal hover:text-brand-accent transition-colors font-medium"
          >
            Contact
          </Link>
          <div className="pt-4">
            <Button onClick={handleBookTour} size="lg" className="w-full">
              Book a Tour
            </Button>
          </div>
          <a
            href="tel:+19417777465"
            className="flex items-center justify-center space-x-2 py-2 text-brand-teal hover:text-brand-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">(941) 777-7465</span>
          </a>
        </div>
      </div>
    </header>
  );
}