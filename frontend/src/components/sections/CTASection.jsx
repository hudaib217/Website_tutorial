import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import Section from '../common/Section';

const CTASection = () => {
  return (
    <Section bg="gradient" padding="large">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Let's discuss how we can help you achieve your digital goals. Get in touch today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="group"
          >
            Get Started Now
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            to="/services"
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
          >
            Explore Services
          </Button>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
          <div>
            <div className="text-3xl mb-2">📧</div>
            <div className="font-semibold mb-1">Email Us</div>
            <a href="mailto:hello@digitalagency.com" className="text-white/80 hover:text-white">
              hello@digitalagency.com
            </a>
          </div>
          <div>
            <div className="text-3xl mb-2">📞</div>
            <div className="font-semibold mb-1">Call Us</div>
            <a href="tel:+1234567890" className="text-white/80 hover:text-white">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <div className="text-3xl mb-2">📍</div>
            <div className="font-semibold mb-1">Visit Us</div>
            <p className="text-white/80">
              123 Digital Street, Tech City
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
