import React from "react";
import styled from "styled-components";
import { graphql, withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

const project = ({ data }) => {
  const geography = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {geography.map(({ node }, k) => {
        return (
          <Helmet key={k}>
            <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
            <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />
            <title>Borj-e Kabotar | Geographical Settings</title>

            <meta name="description" content={node.frontmatter.meta} />
            <link rel="canonical" href={node.frontmatter.link} />

            <meta property="og:title" content={node.frontmatter.title} />
            <meta property="og:description" content={node.frontmatter.meta} />
            <meta property="og:url" content={node.frontmatter.link} />
            <meta
              property="og:image"
              content={withPrefix(`static/logos/logo-bn.png`)}
            />

            <meta property="twitter:title" content={node.frontmatter.title} />
            <meta
              property="twitter:description"
              content={node.frontmatter.meta}
            />
            <meta property="twitter:url" content={node.frontmatter.link} />
            <meta
              property="twitter:image"
              content={withPrefix(`static/logos/logo-bn.png`)}
            />
          </Helmet>
        );
      })}
      <Wrapper>
        <div className="bg-image">
          <StaticImage
            src="../../static/images/geo_setting_background.jpg"
            alt=""
            objectFit="cover"
          />
          {geography.map(({ node }, k) => {
            return <h2>{node.frontmatter.title}</h2>;
          })}
        </div>
        {geography.map(({ node }, k) => {
          return (
            <Container key={k}>
              <Row className="col-md-8 mx-auto my-5">
                <Col>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </Col>
              </Row>
            </Container>
          );
        })}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .bg-image img {
    height: calc(50vh);
    width: calc(300vh);
  }
  .col img {
    max-width: 850px !important;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/contents/the-province-and-the-oasis-of-isfahan/"
        }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            meta
            tags
            title
            link
            img {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  quality: 100
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default project;
