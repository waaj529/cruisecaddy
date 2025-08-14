import Header from '@/components/header';
import Footer from '@/components/footer';
import OurStoryHero from '@/components/our-story-hero';
import OurStoryContent from '@/components/our-story-content';
import OurStoryGallery from '@/components/our-story-gallery';

export const metadata = {
  title: 'Our Story - Caddy Cruise Pink Cadillac Boat Tours',
  description: 'Learn about the story behind Caddy Cruise and our unique pink Cadillac boat tours in Sarasota Bay.',
};

export default function OurStoryPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <OurStoryHero />
      <OurStoryContent />
      <OurStoryGallery />
      <Footer />
    </main>
  );
}