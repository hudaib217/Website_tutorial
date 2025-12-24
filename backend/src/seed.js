require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const Service = require('./models/Service');
const Portfolio = require('./models/Portfolio');
const Blog = require('./models/Blog');

// Sample data
const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    shortDescription: 'Custom websites and web applications built with modern technologies',
    fullDescription: 'We create stunning, high-performance websites and web applications tailored to your business needs. From simple landing pages to complex enterprise solutions, we leverage the latest technologies including React, Node.js, and cloud platforms to deliver scalable and maintainable solutions.',
    icon: 'code',
    features: [
      'Responsive design for all devices',
      'SEO-optimized architecture',
      'Fast loading times',
      'Secure and scalable',
      'Content management systems',
      'E-commerce solutions'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    pricing: {
      startingFrom: '$5,000',
      pricingType: 'project-based'
    },
    order: 1
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    shortDescription: 'Native and cross-platform mobile applications for iOS and Android',
    fullDescription: 'Transform your ideas into powerful mobile applications. We develop native iOS and Android apps as well as cross-platform solutions using React Native and Flutter. Our apps are designed for optimal performance, user experience, and scalability.',
    icon: 'smartphone',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'API integration',
      'Push notifications',
      'Offline functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    pricing: {
      startingFrom: '$10,000',
      pricingType: 'project-based'
    },
    order: 2
  },
  {
    title: 'Automation Solutions',
    slug: 'automation-solutions',
    shortDescription: 'Streamline your business processes with custom automation',
    fullDescription: 'Reduce manual work and increase efficiency with our custom automation solutions. We build tools and integrations that automate repetitive tasks, connect your systems, and optimize your workflows.',
    icon: 'settings',
    features: [
      'Workflow automation',
      'API integrations',
      'Data synchronization',
      'Custom scripts and tools',
      'Process optimization',
      'Reporting automation'
    ],
    technologies: ['Python', 'Node.js', 'Zapier', 'Make', 'APIs'],
    pricing: {
      startingFrom: '$3,000',
      pricingType: 'project-based'
    },
    order: 3
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'Beautiful and intuitive designs that users love',
    fullDescription: 'Create memorable user experiences with our professional UI/UX design services. We combine aesthetic appeal with usability to deliver designs that not only look great but also drive conversions and user satisfaction.',
    icon: 'palette',
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design',
      'Usability testing',
      'Design systems',
      'Brand identity'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    pricing: {
      startingFrom: '$2,500',
      pricingType: 'project-based'
    },
    order: 4
  },
  {
    title: 'SEO & Marketing',
    slug: 'seo-marketing',
    shortDescription: 'Increase your online visibility and drive targeted traffic',
    fullDescription: 'Boost your online presence with our comprehensive SEO and digital marketing services. We help businesses rank higher in search results, attract qualified leads, and grow their online revenue.',
    icon: 'trending-up',
    features: [
      'SEO audit and optimization',
      'Keyword research',
      'Content strategy',
      'Link building',
      'Google Ads management',
      'Analytics and reporting'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads'],
    pricing: {
      startingFrom: '$1,500/month',
      pricingType: 'monthly'
    },
    order: 5
  },
  {
    title: 'Maintenance & Support',
    slug: 'maintenance-support',
    shortDescription: 'Keep your digital assets running smoothly',
    fullDescription: 'Ensure your website or application stays secure, updated, and performing at its best. Our maintenance and support services provide peace of mind with regular updates, monitoring, and quick issue resolution.',
    icon: 'tool',
    features: [
      'Regular updates and patches',
      'Security monitoring',
      'Performance optimization',
      'Backup management',
      'Bug fixes',
      '24/7 support available'
    ],
    technologies: ['Monitoring Tools', 'Security Scanners', 'Backup Solutions'],
    pricing: {
      startingFrom: '$500/month',
      pricingType: 'monthly'
    },
    order: 6
  }
];

const portfolio = [
  {
    title: 'E-Commerce Platform for Fashion Brand',
    slug: 'ecommerce-fashion-platform',
    client: 'StyleHub',
    category: 'web-development',
    shortDescription: 'A modern e-commerce platform with advanced filtering and payment integration',
    fullDescription: 'Built a complete e-commerce solution for a growing fashion brand, featuring product management, shopping cart, secure checkout, and order tracking.',
    challenge: 'The client needed a scalable platform that could handle thousands of products with complex variations (sizes, colors, styles) and integrate with their existing inventory system.',
    solution: 'We developed a custom MERN stack application with a headless CMS, integrated Stripe for payments, and built a custom admin panel for inventory management.',
    results: [
      '150% increase in online sales within 3 months',
      'Page load time reduced to under 2 seconds',
      '99.9% uptime since launch',
      'Mobile conversion rate increased by 45%'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    images: [
      { url: '/images/portfolio/fashion-1.jpg', caption: 'Homepage' },
      { url: '/images/portfolio/fashion-2.jpg', caption: 'Product page' }
    ],
    thumbnail: '/images/portfolio/fashion-thumb.jpg',
    projectUrl: 'https://example.com',
    completedDate: new Date('2024-11-01'),
    isFeatured: true
  },
  {
    title: 'Mobile Fitness App',
    slug: 'mobile-fitness-app',
    client: 'FitTrack',
    category: 'mobile-app',
    shortDescription: 'Cross-platform fitness tracking app with workout plans and progress tracking',
    fullDescription: 'Developed a comprehensive fitness app that helps users track workouts, monitor progress, and follow personalized fitness plans.',
    challenge: 'Creating a seamless offline experience while synchronizing data across devices when online.',
    solution: 'Built with React Native for cross-platform compatibility and implemented a robust offline-first architecture with background sync.',
    results: [
      '50,000+ downloads in first 6 months',
      '4.8-star rating on app stores',
      'Featured in App Store fitness category',
      '70% user retention rate'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    images: [
      { url: '/images/portfolio/fitness-1.jpg', caption: 'Dashboard' },
      { url: '/images/portfolio/fitness-2.jpg', caption: 'Workout tracking' }
    ],
    thumbnail: '/images/portfolio/fitness-thumb.jpg',
    completedDate: new Date('2024-09-15'),
    isFeatured: true
  },
  {
    title: 'Real Estate Management System',
    slug: 'real-estate-management',
    client: 'PropertyPro',
    category: 'web-development',
    shortDescription: 'Comprehensive property management platform with CRM and automation',
    fullDescription: 'A full-featured real estate management system for property listings, client management, and automated follow-ups.',
    challenge: 'Integrating multiple third-party services (MLS feeds, email marketing, CRM) into a unified platform.',
    solution: 'Built a modular architecture with custom API integrations and automated workflows for lead management.',
    results: [
      'Reduced admin time by 60%',
      'Automated 80% of follow-up emails',
      'Increased lead conversion by 35%',
      'Manages 1000+ properties efficiently'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    images: [
      { url: '/images/portfolio/realestate-1.jpg', caption: 'Property listings' }
    ],
    thumbnail: '/images/portfolio/realestate-thumb.jpg',
    completedDate: new Date('2024-10-20'),
    isFeatured: false
  }
];

const blogs = [
  {
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
    publishedDate: new Date('2024-12-01'),
    metaTitle: '10 Web Development Trends to Watch in 2025 | Agency Blog',
    metaDescription: 'Stay ahead of the curve with our guide to the top web development trends for 2025.'
  },
  {
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
    publishedDate: new Date('2024-11-15'),
    metaTitle: 'Complete Guide to Mobile App Development | Agency Blog',
    metaDescription: 'Learn the essential steps to building successful mobile apps.'
  },
  {
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
    publishedDate: new Date('2024-11-20'),
    metaTitle: 'Why Every Business Needs Process Automation | Agency Blog',
    metaDescription: 'Discover how automation can transform your business operations.'
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('Clearing existing data...');
    await Service.deleteMany({});
    await Portfolio.deleteMany({});
    await Blog.deleteMany({});

    console.log('Seeding services...');
    await Service.insertMany(services);
    console.log(`${services.length} services created`);

    console.log('Seeding portfolio...');
    await Portfolio.insertMany(portfolio);
    console.log(`${portfolio.length} portfolio items created`);

    console.log('Seeding blogs...');
    await Blog.insertMany(blogs);
    console.log(`${blogs.length} blog posts created`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
