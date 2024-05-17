import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TitleBar from '../../components/theme/titleBar';

// have some generic page that displays the persons members.json data 
// also want to have a toggle for if someone has a custom page that breaks 
// you can toggle the generic one and back

const GenericProfile = () => (
    <Layout>
      <SEO
        title="Profile page"
        description="Profile page"
      />
      <TitleBar title="This page does not exist" />
      <img src="/illus/404_stuart.png" className="img-fluid mx-auto d-block m-4 p-4" alt="404" />
    </Layout>
);

export default GenericProfile