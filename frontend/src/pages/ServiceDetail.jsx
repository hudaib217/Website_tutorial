import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { servicesAPI } from '../services/api';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await servicesAPI.getBySlug(slug);
        setService(response.data.data);
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) return <Loading fullScreen />;
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
        keywords={`${service.title}, ${service.technologies.join(', ')}`}
      />

      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <Link to="/services" className="inline-flex items-center text-white mb-6 hover:text-gray-200">
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{service.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{service.shortDescription}</p>
        </Container>
      </Section>

      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">About This Service</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.fullDescription}</p>

              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 rounded-lg font-semibold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Pricing</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{service.pricing?.startingFrom}</div>
                  <div className="text-gray-600 capitalize">{service.pricing?.pricingType?.replace('-', ' ')}</div>
                </div>
                <Button to="/contact" variant="primary" size="lg" fullWidth>
                  Request Quote
                </Button>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Free consultation
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Project planning & strategy
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Quality assurance testing
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Post-launch support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServiceDetail;
