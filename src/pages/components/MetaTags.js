import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, type, siteName, url, keywords, description, revisitAfter }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta name="keywords" content={keywords} />
      <meta property="og:description" name="description" content={description} />
      <meta name="robots" content="all" />
      <meta name="revisit-after" content={revisitAfter} />
      <meta name="copyright" content="RM Crackers" />
      <meta name="language" content="English" />
      <meta name="distribution" content="Global" />
      
    </Helmet>
  );
};

export default MetaTags;
