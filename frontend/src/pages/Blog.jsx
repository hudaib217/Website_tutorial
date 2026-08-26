import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import blogs from '../data/blogsData';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Card from '../components/common/Card';

const BLOGS_PER_PAGE = 9;

const Blog = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const blogsToShow = blogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  return (
    <>
      <SEO
        title="Blog"
        description="Read our latest articles on web development, mobile apps, design trends, and digital marketing insights."
        keywords="blog, articles, web development, mobile apps, design, digital marketing"
      />

      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Insights, tutorials, and industry trends
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogsToShow.map((blog) => (
              <Card key={blog._id} padding={false} className="overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {blog.author.name}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {blog.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold group"
                  >
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    page === i + 1
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Blog;
