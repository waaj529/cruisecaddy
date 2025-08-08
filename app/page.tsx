import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutBoatSection from '@/components/about-boat-section';
import TourOptionsSection from '@/components/tour-options-section';
import WhyChooseSection from '@/components/why-choose-section';
import ReviewsSection from '@/components/reviews-section';
import FAQSection from '@/components/faq-section';
import BookingSection from '@/components/booking-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutBoatSection />
      <TourOptionsSection />
      <WhyChooseSection />
      <ReviewsSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}