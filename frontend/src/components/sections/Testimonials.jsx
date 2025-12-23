import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Section from '../common/Section';
import Card from '../common/Card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO, TechStart Inc.',
      content: 'Working with Digital Agency was a game-changer for our business. They delivered a stunning website that exceeded our expectations and helped us increase conversions by 200%.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Founder, StyleHub',
      content: 'The team is incredibly professional and talented. Our e-commerce platform is not only beautiful but also highly functional. Sales have skyrocketed since the launch!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'CTO, FitTrack',
      content: 'They built our mobile app from scratch and the result is outstanding. The app is fast, intuitive, and our users love it. Highly recommended!',
      rating: 5,
      image: '👨‍💻',
    },
  ];

  return (
    <Section bg="gray" padding="large">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />

            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {testimonial.content}
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-2xl mr-4">
                {testimonial.image}
              </div>
              <div>
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
