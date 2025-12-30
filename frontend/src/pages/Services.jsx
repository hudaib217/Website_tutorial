import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaCog, FaPalette, FaChartLine, FaTools, FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { servicesAPI } from '../services/api';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';

const iconMap = {
  code: FaCode,
  smartphone: FaMobile,
  settings: FaCog,
  palette: FaPalette,
  'trending-up': FaChartLine,
  tool: FaTools,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesAPI.getAll();
        setServices(response.data.data);
        setError(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError(true);
        toast.error('Failed to load services. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <Loading fullScreen />;

  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive digital services including web development, mobile apps, automation, UI/UX design, SEO, and maintenance."
        keywords="web development, mobile apps, automation, UI/UX design, SEO, digital services"
      />

      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Comprehensive digital solutions to help your business thrive
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="large">
        <Container>
          {error ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-2">Unable to Load Services</h3>
              <p className="text-gray-600 mb-6">Something went wrong. Please try again later.</p>
              <Button onClick={() => window.location.reload()} variant="primary">
                Retry
              </Button>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold mb-2">No Services Found</h3>
              <p className="text-gray-600">Check back later for our service offerings.</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || FaCode;
              return (
                <Card key={service._id} className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
          )}
        </Container>
      </Section>
    </>
  );
};

export default Services;
