'use client';

import { Button } from '@/components/ui/button';
import { Clock, Users, Waves, MapPin } from 'lucide-react';

export default function TourOptionsSection() {
  const handleBookTour = () => {
    // This would integrate with Setmore
    window.open('https://my.setmore.com/bookingpage/your-setmore-id', '_blank');
  };

  const tours = [
    {
      id: '2-hour',
      title: '2-Hour Bay Cruise',
      price: '$400',
      duration: '2 Hours',
      capacity: 'Up to 6 People',
      description: 'Perfect for a quick escape! Cruise the beautiful Sarasota Bay, see dolphins, and enjoy stunning views.',
      features: [
        'Dolphin watching opportunities',
        'Scenic bay tour',
        'BYOB welcome',
        'Professional captain',
        'Safety equipment included'
      ],
      popular: false
    },
    {
      id: '4-hour',
      title: '4-Hour Adventure',
      price: '$700',
      duration: '4 Hours',
      capacity: 'Up to 6 People',
      description: 'Our signature experience! Extended cruise with multiple stops, wildlife viewing, and more time to relax.',
      features: [
        'Extended wildlife viewing',
        'Multiple scenic stops',
        'Swimming opportunities',
        'BYOB welcome',
        'Cooler and ice provided',
        'Professional captain'
      ],
      popular: true
    },
    ,
      id: 'early-sunset',
      title: 'Early Riser or Sunset',
      price: '$300',
      duration: '1.5 Hours',
      capacity: 'Up to 6 People',
      description: 'Perfect timing for golden hour magic! Catch the sunrise or sunset on our beautiful pink Cadillac boat.',
      features: [
        'Golden hour lighting',
        'Peaceful morning or evening cruise',
        'Perfect for photography',
        'BYOB welcome',
        'Professional captain',
        'Safety equipment included'
      ],
      popular: false
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-brand-teal/80 max-w-2xl mx-auto">
            Whether you want a quick cruise or a full adventure, we have the perfect tour for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:border-brand-teal group ${
                tour.popular ? 'border-brand-accent' : 'border-gray-200'
              }`}
            >
              {tour.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-teal mb-2">{tour.title}</h3>
                  <div className="text-4xl font-bold text-brand-accent mb-2">
                    {tour.price}
                    <span className="text-lg text-brand-teal/60 font-normal">/person</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-6 mb-6">
                  <div className="flex items-center text-brand-teal">
                    <Clock className="h-5 w-5 mr-2 text-brand-mint" />
                    <span className="text-sm font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-brand-teal">
                    <Users className="h-5 w-5 mr-2 text-brand-mint" />
                    <span className="text-sm font-medium">{tour.capacity}</span>
                  </div>
                </div>

                <p className="text-brand-teal/80 text-center mb-6">{tour.description}</p>

                <div className="space-y-3 mb-8">
                  {tour.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Waves className="h-4 w-4 text-brand-mint mr-3 flex-shrink-0" />
                      <span className="text-brand-teal">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleBookTour}
                  className="w-full group-hover:scale-105 transition-transform"
                  size="lg"
                >
                  Book a Tour
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-teal/70 mb-4">
            All tours depart from our Sarasota Bay location
          </p>
          <div className="flex items-center justify-center text-brand-teal">
            <MapPin className="h-5 w-5 mr-2 text-brand-mint" />
            <span>Marina Jack, 2 Marina Plaza, Sarasota, FL 34236</span>
          </div>
        </div>
      </div>
    </section>
  );
}