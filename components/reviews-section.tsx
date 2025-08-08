import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-brand-teal/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy passengers have to say about their Cruisecaddy experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
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
                "{review.text}"
              </p>
              
              <div className="border-t border-brand-pink/20 pt-4">
                <div className="font-semibold text-brand-teal">{review.name}</div>
                <div className="text-sm text-brand-teal/60">{review.location}</div>
                <div className="text-xs text-brand-teal/50 mt-1">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-teal/70 mb-4">
            Join hundreds of satisfied guests who've experienced the magic of Cruisecaddy
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