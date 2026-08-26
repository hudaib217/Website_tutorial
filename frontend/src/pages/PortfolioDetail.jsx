import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaCalendar, FaUser, FaCheck } from 'react-icons/fa';
import portfolio from '../data/portfolioData';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = portfolio.find(p => p.slug === slug);

  const categoryLabels = {
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App',
    'automation': 'Automation',
    'ai-automation': 'AI Automation',
    'seo-marketing': 'SEO & Marketing',
    'maintenance': 'Maintenance',
  };

  if (!project) {
    return (
      <Section bg="white" padding="large" className="pt-32">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Button to="/portfolio" variant="primary">
              <FaArrowLeft className="mr-2" />
              Back to Portfolio
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} - Case Study`}
        description={project.shortDescription}
        keywords={`${project.title}, ${categoryLabels[project.category]}, case study, portfolio`}
      />

      {/* Hero Section */}
      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary-300 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-primary-500/20 backdrop-blur-sm text-primary-300 rounded-full text-sm font-semibold border border-primary-500/30">
              {categoryLabels[project.category]}
            </span>
            {project.isFeatured && (
              <span className="px-4 py-2 bg-accent-500/20 backdrop-blur-sm text-accent-300 rounded-full text-sm font-semibold border border-accent-500/30">
                Featured Project
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            {project.client && (
              <div className="flex items-center">
                <FaUser className="mr-2 text-primary-400" />
                <span>Client: <strong className="text-white">{project.client}</strong></span>
              </div>
            )}
            {project.completedDate && (
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-primary-400" />
                <span>Completed: <strong className="text-white">
                  {new Date(project.completedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </strong></span>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Project Image */}
      <Section bg="white" padding="none">
        <Container>
          <div className="relative -mt-12 mb-12">
            <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-lg">Project Screenshot</p>
                <p className="text-sm">Replace with actual project image</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-accent-500">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                  <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 flex items-start"
                      >
                        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                          <FaCheck className="text-white text-sm" />
                        </div>
                        <p className="text-gray-800 font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Link */}
                {project.projectUrl && (
                  <div className="bg-dark-900 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">View Live Project</h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      See this project in action
                    </p>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors"
                    >
                      Visit Website
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Like What You See?</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Let's discuss how we can help bring your project to life.
                  </p>
                  <Button to="/contact" variant="secondary" size="md" fullWidth>
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg="gray" padding="large">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something amazing together. Get in touch to discuss your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View More Projects
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PortfolioDetail;
