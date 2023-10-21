import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Recipes from '../components/recipes/Recipes';

const IndexPage = () => (
  <Layout>
    <Recipes />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
