import Image from 'next/image';

export default function AboutBoatSection() {
  return (
    <section id="about" className="py-20 bg-brand-pink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal">
              Meet Our Pink Cadillac Boat
            </h2>
            <p className="text-lg text-brand-teal/90 leading-relaxed">
              Our one-of-a-kind pink Cadillac boat isn&rsquo;t just a vessel – it&rsquo;s an experience! 
              Designed to turn heads and create memories, this unique boat combines classic 
              Cadillac style with modern comfort and safety.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-brand-teal mb-1">Unique Appearance</h3>
                  <p className="text-brand-teal/80">The only pink Cadillac-shaped boat in Sarasota Bay</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-brand-teal mb-1">BYOB Friendly</h3>
                  <p className="text-brand-teal/80">Bring your favorite beverages and enjoy the ride</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-accent mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-brand-teal mb-1">Comfort & Fun</h3>
                  <p className="text-brand-teal/80">Spacious seating, shade, and all the amenities you need</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
                alt="Pink Cadillac boat cruising on Sarasota Bay"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-mint rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-accent rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}