import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404 - Page not Found"
      description=" 404 - You reached a page that does not exist"
    />
    <TitleBar title="This page does not exist" />
    <img src="/illus/404_stuart.png" className="img-fluid mx-auto d-block m-4 p-4" alt="404" />
  </Layout>
);

export default NotFoundPage;