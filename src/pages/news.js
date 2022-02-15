import React from 'react'
import styled from "styled-components";
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
        <Wrapper>
          <div className="bg-image">
            <StaticImage
              src="../../static/images/news_background.jpg"
              alt=""
              objectFit="cover"
            />
            <h2>News</h2>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.section`
  .bg-image img {
    height: calc(50vh);
    width: calc(300vh);
  }
  .col img {
    max-width: 850px !important;
  }
`;

export default news