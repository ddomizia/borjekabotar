import React from 'react'
import { withPrefix } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../templates/ConLayout";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const news = () => {
  return (
    <>
      <Layout>
        <GatsbySeo
          title="Borj-e Kabotar | News"
          description="News of Borj-e Kabotar project"
          canonical="https://www.borjekabotar.com/news/"
        />

        <div className="bg-image">
          <StaticImage
            src="../../static/images/news_background.jpg"
            alt="News"
            objectFit="cover"
          />
          <h2>News</h2>
        </div>
      </Layout>
    </>
  );
}

export default news