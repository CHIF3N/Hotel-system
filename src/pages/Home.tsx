import { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { RoomsSection } from '../components/sections/RoomsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { BlogSection } from '../components/sections/BlogSection';
import { CTASection } from '../components/sections/CTASection';

export const Home = () => {
  useEffect(() => {
    document.title = 'LODR Hotel — Experience Luxury Like Never Before';
  }, []);

  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <AboutSection />
      <RoomsSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <BlogSection />
      <CTASection />
    </>
  );
};
