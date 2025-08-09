'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 4;

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Tampa, FL',
      rating: 5,
      text: "Absolutely amazing experience! The pink Cadillac boat was so unique and fun. Captain was knowledgeable and friendly. BYOB was perfect for our group celebration. Highly recommend!",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Mike & Jessica R.',
      location: 'Orlando, FL',
      rating: 5,
      text: "Perfect date night activity! The sunset cruise was breathtaking and we saw dolphins. The boat is Instagram gold - got so many amazing photos. Will definitely be back!",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'The Johnson Family',
      location: 'Sarasota, FL',
      rating: 5,
      text: "Great family fun! Kids loved the unique boat design and spotting dolphins. Captain made sure everyone felt safe and had a great time. Local treasure for sure!",
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David L.',
      location: 'Naples, FL',
      rating: 5,
      text: "Bachelor party perfection! The 4-hour tour was exactly what we needed. BYOB policy was great, boat was comfortable, and the views were incredible. Thanks for the memories!",
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Amanda K.',
      location: 'St. Petersburg, FL',
      rating: 5,
      text: "What an incredible experience! The pink Cadillac boat is absolutely stunning and so photogenic. Our captain was fantastic and showed us all the best spots. Can't wait to book again!",
      date: '4 days ago'
    },
    {
      id: 6,
      name: 'Robert & Linda T.',
      location: 'Bradenton, FL',
      rating: 5,
      text: "Celebrating our anniversary on this unique boat was perfect! The sunset views were magical, and being able to bring our own champagne made it extra special. Highly recommend for couples!",
      date: '1 week ago'
    },
    {
      id: 7,
      name: 'The Martinez Group',
      location: 'Miami, FL',
      rating: 5,
      text: "Best group activity ever! We had 6 people and everyone had a blast. The boat is so cool and unique - nothing like it anywhere else. Great value and amazing memories made!",
      date: '5 days ago'
    },
    {
      id: 8,
      name: 'Emily & Jake W.',
      location: 'Fort Myers, FL',
      rating: 5,
      text: "Our honeymoon cruise was absolutely perfect! The pink Cadillac boat is so romantic and unique. Captain was wonderful and the sunset views were breathtaking. Highly recommend for special occasions!",
      date: '3 days ago'
    }
  ];

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  const nextReviews = () => {
    if (currentIndex + reviewsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + reviewsPerPage);
    }
  };

  const prevReviews = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - reviewsPerPage);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-brand-teal/80 max-w-2xl mx-auto">
            Don&rsquo;t just take our word for it. Here&rsquo;s what our happy passengers have to say about their Cruisecaddy experience.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-brand-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-brand-pink/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-brand-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-brand-mint opacity-50" />
                </div>
                
                <p className="text-brand-teal/90 mb-4 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div className="border-t border-brand-pink/20 pt-4">
                  <div className="font-semibold text-brand-teal">{review.name}</div>
                  <div className="text-sm text-brand-teal/60">{review.location}</div>
                  <div className="text-xs text-brand-teal/50 mt-1">{review.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevReviews}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full transition-colors ${
                  currentIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-brand-mint text-brand-teal hover:bg-brand-teal hover:text-white'
                }`}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * reviewsPerPage)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentIndex / reviewsPerPage) === index
                        ? 'bg-brand-teal'
                        : 'bg-brand-mint'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReviews}
                disabled={currentIndex + reviewsPerPage >= reviews.length}
                className={`p-2 rounded-full transition-colors ${
                  currentIndex + reviewsPerPage >= reviews.length
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-brand-mint text-brand-teal hover:bg-brand-teal hover:text-white'
                }`}
                aria-label="Next reviews"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-teal/70 mb-4">
            Join hundreds of satisfied guests who&rsquo;ve experienced the magic of Cruisecaddy
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="flex text-brand-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-brand-teal font-semibold ml-2">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}