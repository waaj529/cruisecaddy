import Image from 'next/image';

export default function OurStoryGallery() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1600",
      alt: "Pink Cadillac boat cruising on Sarasota Bay",
      title: "Our Unique Pink Cadillac Boat"
    },
    {
      src: "https://images.pexels.com/photos/2422609/pexels-photo-2422609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1600",
      alt: "Beautiful sunset over Sarasota Bay",
      title: "Stunning Sarasota Bay Sunsets"
    },
    {
      src: "https://images.pexels.com/photos/2747902/pexels-photo-2747902.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1600",
      alt: "Marina Jack departure location",
      title: "Marina Jack - Our Home Base"
    },
    {
      src: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1600",
      alt: "Classic car inspiration for our boat design",
      title: "Classic Cadillac Inspiration"
    },
    {
      src: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1600",
      alt: "Happy guests enjoying their cruise",
      title: "Creating Unforgettable Memories"
    },
    {
      src: "https://images.pexels.com/photos/2422609/pexels-photo-2422609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1600",
      alt: "Dolphin watching opportunities",
      title: "Wildlife Encounters"
    }
  ];

  return (
    <section className="py-20 bg-brand-pink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4">
            Memories in the Making
          </h2>
          <p className="text-xl text-brand-teal/80 max-w-2xl mx-auto">
            Take a look at the experiences we create and the beautiful waters we call home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-brand-teal/80 text-lg mb-6">
            Ready to become part of our story?
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 bg-brand-teal text-white rounded-lg hover:bg-brand-teal/90 transition-colors font-medium"
          >
            Book Your Adventure
          </a>
        </div>
      </div>
    </section>
  );
}