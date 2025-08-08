import { Phone, Anchor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-teal py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Anchor className="h-8 w-8 text-brand-mint" />
            <span className="text-2xl font-bold text-white">
              Cruisecaddy
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-white hover:text-brand-mint transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">(941) 777-7465</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Cruisecaddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}