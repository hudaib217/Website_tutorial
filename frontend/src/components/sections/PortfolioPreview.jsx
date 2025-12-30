import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { portfolioAPI } from '../../services/api';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import Loading from '../common/Loading';

const PortfolioPreview = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await portfolioAPI.getAll({ featured: 'true' });
        setPortfolio(response.data.data.slice(0, 3));
        setError(false);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const categoryLabels = {
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App',
    'automation': 'Automation',
    'ui-ux': 'UI/UX Design',
    'seo-marketing': 'SEO & Marketing',
    'maintenance': 'Maintenance',
  };

  if (loading) return <Loading />;

  if (error || portfolio.length === 0) return null;

  return (
    <Section bg="white" padding="large">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore some of our recent work and see how we've helped businesses achieve their goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {portfolio.map((item) => (
          <Card key={item._id} padding={false} className="overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center overflow-hidden">
              <div className="text-center text-gray-600">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm">Project Image</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {categoryLabels[item.category]}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.shortDescription}
              </p>
              <Link
                to={`/portfolio/${item.slug}`}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
              >
                View Case Study
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button to="/portfolio" variant="primary" size="lg">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default PortfolioPreview;
