import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const metaImage = site.siteMetadata?.image;
  const siteURL = site.siteMetadata?.siteUrl;

  const keywords = [
    'your keywords'
  ];

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content={siteURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${defaultTitle}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={`${title} | ${defaultTitle}`} />
      <meta itemProp="description" content={metaDescription} />
      <meta itemProp="image" content={metaImage} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ''} />
      <meta name="twitter:title" content={`${title} | ${defaultTitle}`} />
      <meta name="twitter:description" content={metaDescription} />
      {/* Keywords */}
      <meta name="keywords" content={keywords?.join(', ') || ''} />
      {children}
    </>
  );
}

export default Seo;
