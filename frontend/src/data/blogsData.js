const blogs = [
  {
    _id: '1',
    title: '10 Web Development Trends to Watch in 2025',
    slug: '10-web-development-trends-2025',
    excerpt: 'Discover the latest trends shaping the future of web development, from AI integration to edge computing.',
    content: `Web development is constantly evolving, and 2025 promises to bring exciting innovations...

## 1. AI-Powered Development Tools
Artificial intelligence is revolutionizing how we build websites...

## 2. Edge Computing
Moving computation closer to users for better performance...

[Full article content would go here]`,
    featuredImage: '/images/blog/web-trends-2025.jpg',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Senior Full-Stack Developer with 10 years of experience'
    },
    category: 'Web Development',
    tags: ['trends', 'web development', 'AI', '2025'],
    readTime: 8,
    publishedDate: '2024-12-01',
    metaTitle: '10 Web Development Trends to Watch in 2025 | Agency Blog',
    metaDescription: 'Stay ahead of the curve with our guide to the top web development trends for 2025.'
  },
  {
    _id: '2',
    title: 'The Complete Guide to Mobile App Development',
    slug: 'complete-guide-mobile-app-development',
    excerpt: 'Everything you need to know about building successful mobile applications in 2024.',
    content: `Mobile app development requires careful planning and execution...

## Planning Your App
Before writing a single line of code...

## Choosing the Right Technology
Native vs cross-platform considerations...

[Full article content would go here]`,
    featuredImage: '/images/blog/mobile-guide.jpg',
    author: {
      name: 'Michael Chen',
      avatar: '/images/authors/michael.jpg',
      bio: 'Mobile Development Specialist'
    },
    category: 'Mobile Development',
    tags: ['mobile', 'app development', 'guide', 'react native'],
    readTime: 12,
    publishedDate: '2024-11-15',
    metaTitle: 'Complete Guide to Mobile App Development | Agency Blog',
    metaDescription: 'Learn the essential steps to building successful mobile apps.'
  },
  {
    _id: '3',
    title: 'Why Every Business Needs Process Automation',
    slug: 'why-business-needs-automation',
    excerpt: 'Learn how automation can save time, reduce errors, and scale your business operations.',
    content: `In today's fast-paced business environment, automation is no longer optional...

## The Cost of Manual Processes
Manual tasks consume valuable time and resources...

## Benefits of Automation
Increased efficiency, reduced errors, scalability...

[Full article content would go here]`,
    featuredImage: '/images/blog/automation.jpg',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Senior Full-Stack Developer with 10 years of experience'
    },
    category: 'Automation',
    tags: ['automation', 'business', 'productivity', 'efficiency'],
    readTime: 6,
    publishedDate: '2024-11-20',
    metaTitle: 'Why Every Business Needs Process Automation | Agency Blog',
    metaDescription: 'Discover how automation can transform your business operations.'
  },
  {
    _id: '4',
    title: 'UI/UX Design Principles That Drive Conversions',
    slug: 'ui-ux-design-principles-conversions',
    excerpt: 'Master the design principles that turn visitors into customers and boost your conversion rates.',
    content: `Great design is more than aesthetics—it's about creating experiences that convert...

## Understanding User Psychology
How users think and make decisions online...

## Key Design Principles
Clarity, hierarchy, consistency, and feedback...

## Measuring Design Success
KPIs and metrics that matter...

[Full article content would go here]`,
    featuredImage: '/images/blog/ui-ux-design.jpg',
    author: {
      name: 'Emily Davis',
      avatar: '/images/authors/emily.jpg',
      bio: 'Lead UI/UX Designer with expertise in conversion optimization'
    },
    category: 'Design',
    tags: ['UI/UX', 'design', 'conversions', 'user experience'],
    readTime: 10,
    publishedDate: '2024-11-10',
    metaTitle: 'UI/UX Design Principles That Drive Conversions | Agency Blog',
    metaDescription: 'Learn design principles that convert visitors into customers.'
  },
  {
    _id: '5',
    title: 'SEO Strategies for 2025: What Actually Works',
    slug: 'seo-strategies-2025-what-works',
    excerpt: 'Cut through the noise and discover SEO strategies that deliver real results in the current landscape.',
    content: `SEO continues to evolve, and staying ahead requires adapting to new algorithms...

## Core Web Vitals and Performance
Why speed and user experience matter more than ever...

## Content Quality Over Quantity
E-E-A-T and creating genuinely helpful content...

## Technical SEO Essentials
Site structure, schema markup, and crawlability...

[Full article content would go here]`,
    featuredImage: '/images/blog/seo-2025.jpg',
    author: {
      name: 'David Martinez',
      avatar: '/images/authors/david.jpg',
      bio: 'SEO Specialist with 8 years of experience in digital marketing'
    },
    category: 'Marketing',
    tags: ['SEO', 'marketing', 'digital marketing', 'search engines'],
    readTime: 9,
    publishedDate: '2024-11-05',
    metaTitle: 'SEO Strategies for 2025: What Actually Works | Agency Blog',
    metaDescription: 'Discover effective SEO strategies that deliver real results in 2025.'
  },
  {
    _id: '6',
    title: 'Building Scalable APIs: Best Practices',
    slug: 'building-scalable-apis-best-practices',
    excerpt: 'Learn how to design and build APIs that can handle millions of requests while maintaining performance.',
    content: `APIs are the backbone of modern applications. Here's how to build them right...

## API Design Principles
RESTful design, versioning, and documentation...

## Performance Optimization
Caching, pagination, and rate limiting...

## Security Best Practices
Authentication, authorization, and data validation...

[Full article content would go here]`,
    featuredImage: '/images/blog/api-design.jpg',
    author: {
      name: 'Michael Chen',
      avatar: '/images/authors/michael.jpg',
      bio: 'Mobile Development Specialist'
    },
    category: 'Development',
    tags: ['API', 'backend', 'scalability', 'architecture'],
    readTime: 11,
    publishedDate: '2024-10-28',
    metaTitle: 'Building Scalable APIs: Best Practices | Agency Blog',
    metaDescription: 'Master the art of building scalable, high-performance APIs.'
  }
];

export default blogs;
