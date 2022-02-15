import React from 'react'
import { withPrefix } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../templates/ConLayout";
import Seo from "../components/SEO";

const news = () => {
  return (
    <>
      <Layout>
        <Seo
          title="Borj-e Kabotar | News"
          description="News of Borj-e Kabotar project"
          url="https://borjekabotar.com/news/"
          image={withPrefix(`static/logos/logo_bn.png`)}
        />
          <div className="bg-image">
            <StaticImage
              src="../../static/images/news_background.jpg"
              alt=""
              objectFit="cover"
            />
            <h2>News</h2>
          </div>
      </Layout>
    </>
  );
}

export default news