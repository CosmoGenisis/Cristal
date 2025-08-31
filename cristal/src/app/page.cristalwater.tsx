'use client';

import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProductSection } from '../components/ProductSection';
import { WaterComposition } from '../components/WaterComposition';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialSection } from '../components/TestimonialSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';

export default function CristalWaterHomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <WaterComposition />
      <WhyChooseUs />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}