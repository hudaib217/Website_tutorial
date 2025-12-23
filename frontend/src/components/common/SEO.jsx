import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Digital Agency - Premium Digital Services',
  description = 'Transform your business with our expert digital services. Web development, mobile apps, automation, UI/UX design, and more.',
  keywords = 'digital agency, web development, mobile apps, UI/UX design, automation, SEO',
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website',
}) => {
  const siteTitle = 'Digital Agency';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Digital Agency" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
