import Head from 'next/head';
import React from 'react';

export default function SEO({ description, title, image = null, slug = null }) {
  const siteTitle = 'IAT';
  const siteDescription =
    'Iowa Tech Education is a club ran at Central Campus in Des Moines, Iowa. As technology advances at a rapid pace, its essential to connect theoretical knowledge with real-world applications. Our goal is to bridge this gap by offering hands-on training with certifications, competitions, and immersive experiences in a modern tech work environment.';
  const author = 'IowaTechEducation';
  const siteUrl = slug ? slug : 'https://iowateched.com';
  const twitterHandle = 'blank';
  const seoCardImagePath = image ? image : '/IOWA TECH ED 3.png';
  const metaDescription = description || siteDescription;

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="shortcut icon" href="/logos/tablogo.png" />
      <meta
        name="keywords"
        content="central campus"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:siteURL" content={siteUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seoCardImagePath} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:image" content={seoCardImagePath} />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
}
