import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { portfolioAPI } from '../services/api';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPortfolio();
    fetchCategories();
  }, []);

  const fetchPortfolio = async (category = null) => {
    setLoading(true);
    try {
      const params = category && category !== 'all' ? { category } : {};
      const response = await portfolioAPI.getAll(params);
      setPortfolio(response.data.data);
      setError(false);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      setError(true);
      toast.error('Failed to load portfolio. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await portfolioAPI.getCategories();
      setCategories(['all', ...response.data.data]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchPortfolio(category);
  };

  const categoryLabels = {
    'all': 'All Projects',
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App',
    'automation': 'Automation',
    'ui-ux': 'UI/UX Design',
    'seo-marketing': 'SEO & Marketing',
    'maintenance': 'Maintenance',
  };

  return (
    <>
      <SEO
        title="Our Portfolio"
        description="Explore our portfolio of successful projects. See how we've helped businesses achieve their digital goals."
        keywords="portfolio, case studies, projects, web development, mobile apps"
      />

      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Explore our recent projects and success stories
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="large">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {loading ? (
            <Loading />
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-2">Unable to Load Portfolio</h3>
              <p className="text-gray-600 mb-6">Something went wrong. Please try again later.</p>
              <Button onClick={() => window.location.reload()} variant="primary">
                Retry
              </Button>
            </div>
          ) : portfolio.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
              <p className="text-gray-600">Check back later for our latest projects.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((item) => (
                <Card key={item._id} padding={false} className="overflow-hidden group">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className="text-4xl">📱</div>
                  </div>
                  <div className="p-6">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {categoryLabels[item.category]}
                    </span>
                    <h3 className="text-2xl font-bold mt-3 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.shortDescription}</p>
                    <Link
                      to={`/portfolio/${item.slug}`}
                      className="inline-flex items-center text-primary-600 font-semibold group"
                    >
                      View Case Study
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
