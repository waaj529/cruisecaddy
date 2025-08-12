import Image from 'next/image';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import CaddyCruiseLogo from '@/public/logo/fe526dba-80d5-460d-bff0-81b7583ba56c.png';

export default function Footer() {
  return (
    <footer className="bg-brand-teal py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start mb-6">
              <a href="/" aria-label="CaddyCruise home" className="inline-flex">
                <Image
                  src={CaddyCruiseLogo}
                  alt="CaddyCruise.com logo"
                  className="h-20 w-auto md:h-24"
                />
              </a>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Experience Sarasota Bay like never before on our unique pink Cadillac boat. 
              BYOB friendly tours with unforgettable views and memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-mint hover:text-brand-teal transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-mint hover:text-brand-teal transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="self-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/80 hover:text-brand-mint transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#tours" className="text-white/80 hover:text-brand-mint transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="/our-story" className="text-white/80 hover:text-brand-mint transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#booking" className="text-white/80 hover:text-brand-mint transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/80 hover:text-brand-mint transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="self-start">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-brand-mint mt-1 flex-shrink-0" />
                <div className="pt-0.5">
                  <a
                    href="tel:+19417777465"
                    className="text-white hover:text-brand-mint transition-colors font-medium"
                  >
                    (941) 777-7465
                  </a>
                  <p className="text-white/60 text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-brand-mint mt-1 flex-shrink-0" />
                <div className="pt-0.5">
                  <p className="text-white/80">
                    <span className="block font-medium">Marina Jack 2 Marina Plaza</span>
                    <span className="block">Sarasota, FL 34236</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-brand-mint mt-1 flex-shrink-0" />
                <div className="pt-0.5">
                  <p className="text-white/80 text-sm">
                    Tours: 8 AM - 8 PM<br />
                    Booking: 8 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/80 text-center md:text-left">
              © 2025 Cruisecaddy. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-white/80 hover:text-brand-mint transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/80 hover:text-brand-mint transition-colors">
                Terms of Service
              </a>
              <a href="/cancellation" className="text-white/80 hover:text-brand-mint transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}