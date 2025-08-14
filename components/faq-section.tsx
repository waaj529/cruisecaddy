'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleBookTour = () => {
    const el = document.getElementById('Setmore_button_iframe') as HTMLAnchorElement | null;
    if (el) {
      el.click();
    } else {
      // Fallback: navigate to in-page booking section instead of opening a new tab
      window.location.href = '/#booking';
    }
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Do I need to book in advance?',
      answer: 'Yes—it’s highly recommended to reserve your spot ahead of time. Walk-in availability is not guaranteed.'
    },
    {
      question: ' What is the cancellation and weather policy?',
      answer: 'You may cancel up to 30+ days in advance for a full refund. If we cancel due to unsafe weather, you\'ll receive a full refund or the option to reschedule.'
    },
    {
      question: 'Where do the tours start and end?',
      answer: 'All tours depart from Marina Jack located at 2 Marina Plaza, Sarasota, FL 34236. We recommend arriving 15 minutes early for check-in. Detailed parking and meeting instructions will be provided with your booking confirmation.'
    },
    {
      question: 'Are there restrooms on board?',
      answer: 'Our boat has a clean, private restroom facility on board for your convenience during the tour. We also make stops near facilities during longer tours if needed.'
    },
    {
      question: 'What happens if the weather is bad?',
      answer: 'Safety is our top priority. If weather conditions are unsafe, we\'ll reschedule your tour at no charge or provide a full refund. We monitor weather closely and will contact you if changes are needed.'
    },
    {
      question: 'How many people can the boat accommodate?',
      answer: 'Our pink Cadillac boat comfortably accommodates up to 12 passengers. This intimate group size ensures everyone gets the personal attention and space they deserve for the perfect experience.'
    }
  ];

  return (
    <section className="py-20 bg-brand-pink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-brand-teal/80 max-w-2xl mx-auto">
            Everything you need to know for your perfect Cruisecaddy experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-brand-mint/20 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-brand-light transition-colors"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-brand-teal pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-brand-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-brand-accent flex-shrink-0" />
                )}
              </button>
              
              <div
                className={cn(
                  'px-6 overflow-hidden transition-all duration-300',
                  openItems.includes(index) 
                    ? 'max-h-96 pb-6' 
                    : 'max-h-0'
                )}
              >
                <p className="text-brand-teal/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-brand-teal mb-6 text-lg">
            Still have questions? We&rsquo;re here to help!
          </p>
          <Button onClick={handleBookTour} size="lg" className="mr-4 mb-4">
            Book a Tour
          </Button>
          <a
            href="tel:+19417777465"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-brand-teal text-brand-teal rounded-lg hover:bg-brand-teal hover:text-white transition-colors font-medium"
          >
            Call (941) 777-7465
          </a>
        </div>
      </div>
    </section>
  );
}