const portfolio = [
  {
    _id: '1',
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
    completedDate: '2024-11-01',
    isFeatured: true
  },
  {
    _id: '2',
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
    completedDate: '2024-09-15',
    isFeatured: true
  },
  {
    _id: '3',
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
    completedDate: '2024-10-20',
    isFeatured: false
  },
  {
    _id: '4',
    title: 'Healthcare Booking Platform',
    slug: 'healthcare-booking-platform',
    client: 'MediCare Plus',
    category: 'web-development',
    shortDescription: 'Patient-doctor appointment system with telemedicine integration',
    fullDescription: 'A comprehensive healthcare platform enabling patients to book appointments, consult doctors online, and manage their medical records securely.',
    challenge: 'Building a HIPAA-compliant system that handles sensitive patient data while providing a seamless user experience across web and mobile.',
    solution: 'Developed a secure, encrypted platform with video consultation capabilities, automated reminders, and integration with insurance providers.',
    results: [
      '10,000+ appointments booked monthly',
      'Reduced no-show rate by 40%',
      'Patient satisfaction score of 4.9/5',
      'Saved 200+ hours of admin work monthly'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Twilio'],
    images: [
      { url: '/images/portfolio/healthcare-1.jpg', caption: 'Dashboard' }
    ],
    thumbnail: '/images/portfolio/healthcare-thumb.jpg',
    completedDate: '2024-08-15',
    isFeatured: true
  },
  {
    _id: '5',
    title: 'Restaurant Chain Mobile App',
    slug: 'restaurant-chain-mobile-app',
    client: 'TastyBites',
    category: 'mobile-app',
    shortDescription: 'Food ordering and loyalty rewards app for a restaurant chain',
    fullDescription: 'A feature-rich mobile application for ordering food, earning loyalty points, and finding nearby restaurant locations with real-time wait times.',
    challenge: 'Creating a unified ordering experience across 50+ restaurant locations with varying menus and real-time inventory sync.',
    solution: 'Built a scalable React Native app with location-based features, real-time menu updates, and an engaging gamified loyalty program.',
    results: [
      '100,000+ app downloads in 3 months',
      'Average order value increased by 25%',
      'Repeat customer rate up 60%',
      '4.7-star rating on both app stores'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
    images: [
      { url: '/images/portfolio/restaurant-1.jpg', caption: 'Home screen' }
    ],
    thumbnail: '/images/portfolio/restaurant-thumb.jpg',
    completedDate: '2024-07-01',
    isFeatured: false
  },
  {
    _id: '6',
    title: 'Corporate Brand Redesign',
    slug: 'corporate-brand-redesign',
    client: 'TechVision Corp',
    category: 'ui-ux',
    shortDescription: 'Complete brand identity and website redesign for a tech company',
    fullDescription: 'A comprehensive brand refresh including logo design, color palette, typography system, and a fully redesigned corporate website with improved user experience.',
    challenge: 'Modernizing a 15-year-old brand identity while maintaining recognition among existing clients and appealing to new markets.',
    solution: 'Conducted extensive brand research, created a new visual identity system, and designed a modern website with improved navigation and conversion optimization.',
    results: [
      'Brand recognition increased by 45%',
      'Website bounce rate reduced by 35%',
      'Lead generation improved by 80%',
      'Employee brand pride score up 50%'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'React', 'Framer Motion'],
    images: [
      { url: '/images/portfolio/branding-1.jpg', caption: 'Brand guidelines' }
    ],
    thumbnail: '/images/portfolio/branding-thumb.jpg',
    completedDate: '2024-06-20',
    isFeatured: false
  }
];

export const portfolioCategories = [...new Set(portfolio.map(item => item.category))];

export default portfolio;
