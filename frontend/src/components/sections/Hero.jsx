import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-professional min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements - subtle and professional */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-500/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-primary-500/20">
              <span className="text-primary-400">🚀</span> Transform Your Digital Presence
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display">
              Build Your
              <span className="block bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              We create stunning web and mobile experiences that drive growth and transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="group"
              >
                Get Started
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-gray-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-200">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-gray-200">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="/images/hero.png"
                alt="Digital Solutions"
                className="w-full h-[600px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
