import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaCog, FaPalette, FaChartLine, FaTools, FaArrowRight } from 'react-icons/fa';
import services from '../../data/servicesData';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';

const iconMap = {
  code: FaCode,
  smartphone: FaMobile,
  settings: FaCog,
  palette: FaPalette,
  'trending-up': FaChartLine,
  tool: FaTools,
};

const ServicesOverview = () => {
  const displayServices = services.slice(0, 6);

  return (
    <Section bg="gray" padding="large">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive digital solutions to help your business thrive in the modern world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayServices.map((service) => {
          const Icon = iconMap[service.icon] || FaCode;
          return (
            <Card key={service._id} className="group">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {service.shortDescription}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
              >
                Learn More
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button to="/services" variant="primary" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
};

export default ServicesOverview;
