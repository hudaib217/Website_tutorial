const services = [
  {
    _id: '1',
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
    _id: '2',
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
    _id: '3',
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
    _id: '4',
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
    _id: '5',
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
    _id: '6',
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

export default services;
