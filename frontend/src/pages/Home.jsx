import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <SEO
        title="Digital Agency - Premium Digital Services"
        description="Transform your business with expert web development, mobile apps, automation, UI/UX design, and digital marketing services."
        keywords="digital agency, web development, mobile apps, UI/UX design, automation, SEO, digital marketing"
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
