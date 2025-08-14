'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-brand-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Us in Beautiful Sarasota
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We&rsquo;re conveniently located at Marina Jack in downtown Sarasota, making it easy to start your pink Cadillac boat adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal transition-colors duration-300 group">
                  <MapPin className="h-6 w-6 text-brand-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-teal mb-2">
                    Departure Location
                  </h3>
                  <p className="text-brand-teal/80">
                    Marina Jack<br />
                    2 Marina Plaza<br />
                    Sarasota, FL 34236
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal transition-colors duration-300 group">
                  <Phone className="h-6 w-6 text-brand-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-teal mb-2">
                    Contact Information
                  </h3>
                  <p className="text-brand-teal/80 mb-2">
                    <a href="tel:+19417777465" className="hover:text-brand-accent transition-colors">
                      (941) 777-7465
                    </a>
                  </p>
                  <p className="text-sm text-brand-teal/70">
                    Available 7 days a week, 8 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal transition-colors duration-300 group">
                  <Clock className="h-6 w-6 text-brand-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-teal mb-2">
                    Tour Schedule
                  </h3>
                  <div className="text-brand-teal/80 space-y-1">
                    <p>Morning Tours: 9:00 AM & 10:30 AM</p>
                    <p>Afternoon Tours: 1:00 PM & 3:00 PM</p>
                    <p>Sunset Tours: 5:30 PM & 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleBookTour} size="lg" className="flex-1">
                Book a Tour
              </Button>
              <a
                href="tel:+19417777465"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-brand-teal border-2 border-brand-teal rounded-lg hover:bg-brand-teal hover:text-white transition-colors font-medium"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="Map showing Marina Jack in Sarasota, Florida"
                src="https://www.google.com/maps?q=Marina+Jack,+2+Marina+Plaza,+Sarasota,+FL+34236&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-accent/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}