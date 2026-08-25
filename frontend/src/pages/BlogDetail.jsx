import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaUser, FaCalendar, FaEye, FaTag, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import blogs from '../data/blogsData';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const recentPosts = blogs.filter(b => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <Section bg="white" padding="large" className="pt-32">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Button to="/blog" variant="primary">
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = blog.title;

  return (
    <>
      <SEO
        title={blog.metaTitle || blog.title}
        description={blog.metaDescription || blog.excerpt}
        keywords={blog.tags?.join(', ')}
        type="article"
      />

      {/* Hero Section */}
      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-300 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-primary-500/20 backdrop-blur-sm text-primary-300 rounded-full text-sm font-semibold border border-primary-500/30">
              {blog.category}
            </span>
            <div className="flex items-center text-gray-300 text-sm">
              <FaClock className="mr-1" />
              {blog.readTime} min read
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <FaEye className="mr-1" />
              {blog.views || 0} views
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight max-w-4xl">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
              {blog.author?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <p className="text-white font-semibold">{blog.author?.name || 'Anonymous'}</p>
              <p className="text-gray-400 text-sm flex items-center">
                <FaCalendar className="mr-2" />
                {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section bg="white" padding="none">
        <Container>
          <div className="relative -mt-12 mb-12">
            <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center max-w-4xl mx-auto">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-lg">Featured Image</p>
                <p className="text-sm">Replace with actual blog image</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Blog Content */}
      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {blog.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-dark-900">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="text-xl font-bold mt-6 mb-3 text-dark-900">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-3">
                    <FaTag className="text-gray-400" />
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 font-semibold mb-4">Share this article:</p>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1DA1F2] hover:bg-[#1a8cd8] rounded-lg flex items-center justify-center text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0A66C2] hover:bg-[#094d92] rounded-lg flex items-center justify-center text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1877F2] hover:bg-[#0d65d9] rounded-lg flex items-center justify-center text-white transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>

              {/* Author Bio */}
              {blog.author && (
                <div className="mt-12 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {blog.author.name?.charAt(0) || 'A'}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{blog.author.name}</p>
                      <p className="text-gray-600 mt-1">
                        {blog.author.bio || 'Contributing writer at Digital Agency, sharing insights on technology and digital transformation.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-6">Recent Articles</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post._id}
                        to={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {post.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Get the latest articles and insights delivered to your inbox.
                  </p>
                  <Button to="/contact" variant="secondary" size="md" fullWidth>
                    Subscribe Now
                  </Button>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Mobile Development', 'Automation', 'Design', 'Marketing'].map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-pointer"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
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
              Turn your ideas into reality. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
              <Button to="/blog" variant="outline" size="lg">
                Read More Articles
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogDetail;
