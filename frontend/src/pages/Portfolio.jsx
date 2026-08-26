import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import portfolio, { portfolioCategories } from '../data/portfolioData';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Card from '../components/common/Card';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryLabels = {
    'all': 'All Projects',
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App',
    'automation': 'Automation',
    'ai-automation': 'AI Automation',
    'seo-marketing': 'SEO & Marketing',
    'maintenance': 'Maintenance',
  };

  const filteredPortfolio = selectedCategory === 'all'
    ? portfolio
    : portfolio.filter(item => item.category === selectedCategory);

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
            {['all', ...portfolioCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
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
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
