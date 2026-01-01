import React from 'react';
import { FaRocket, FaUsers, FaShieldAlt, FaChartLine, FaClock, FaAward } from 'react-icons/fa';
import Section from '../common/Section';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaRocket,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technologies and frameworks to build modern, scalable solutions.',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Our experienced developers, designers, and strategists bring your vision to life.',
    },
    {
      icon: FaShieldAlt,
      title: 'Security First',
      description: 'We prioritize security in every project, protecting your data and users.',
    },
    {
      icon: FaChartLine,
      title: 'Results Driven',
      description: 'We focus on delivering measurable results that drive your business growth.',
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on time, every time.',
    },
    {
      icon: FaAward,
      title: 'Quality Guaranteed',
      description: 'Our rigorous quality assurance process ensures flawless execution.',
    },
  ];

  return (
    <Section bg="white" padding="large">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Our Agency</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We combine creativity, technology, and strategy to deliver exceptional digital experiences that drive real business results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                    <reason.icon className="text-white text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="/images/WhyChoose.png"
            alt="Why Choose Us"
            className="w-full rounded-2xl shadow-2xl"
          />
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
