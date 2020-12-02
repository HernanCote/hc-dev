import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
  title = 'Hernán Cote',
  description = 'Hernán Cote\'s Portfolio - Software Craftsman',
  keywords = 'Programming, Portfolio, C#, ASP.NET, JavaScript, React, Work, Development, Web Development, Software Architecture',
  author = 'Hernán Cote',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
  </Helmet>
);

export default Meta;
