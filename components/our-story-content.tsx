import Image from 'next/image';
import image0703 from '@/public/images/DJI_0703.webp';
import image2532 from '@/public/images/DSC_2532.webp';

export default function OurStoryContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal">
              How It All Started
            </h2>
            <p className="text-lg text-brand-teal/90 leading-relaxed">
              The boat is a one-of-a-kind, historic creation by Captain Joe Fox. While driving down U.S. 1 in the Florida Keys, Fox spotted a vintage Cadillac limousine and exclaimed to his wife, “Follow that limo!”
            </p>
            <p className="text-lg text-brand-teal/90 leading-relaxed">
              Determined, he persuaded the limo driver to stop, introduced himself, and began taking detailed photographs and measurements. The driver chuckled, telling Fox, “You’re wacky.” Undeterred, Fox started building the floating limo the very next day—bringing to life a truly unique vessel that blends classic style with nautical adventure.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image0703}
                alt="Classic pink Cadillac inspiration"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-mint rounded-full opacity-60"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image2532}
                alt="Beautiful Sarasota Bay waters"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-accent rounded-full opacity-40"></div>
          </div>

          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal">
              Our Mission
            </h2>
            <p className="text-lg text-brand-teal/90 leading-relaxed">
              We believe that every moment on the water should be special. That&rsquo;s why we&rsquo;ve 
              created more than just a boat tour – we&rsquo;ve crafted an experience that brings 
              people together, creates lasting memories, and showcases the natural beauty 
              of Sarasota Bay.
            </p>
            <p className="text-lg text-brand-teal/90 leading-relaxed">
              Our BYOB-friendly approach means you can truly make the experience your own, 
              while our experienced captains ensure your safety and share their knowledge 
              of the local waters, wildlife, and hidden gems that make Sarasota special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}