import React from "react";
import { graphql, withPrefix } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

const project = ({ data }) => {
  const survey = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {survey.map(({ node }, k) => {
        return (
          <Helmet key={k}>
            <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
            <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />
            <title>Borj-e Kabotar | Survey</title>

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
            src="../../static/images/survey_background.jpg"
            alt=""
            objectFit="cover"
          />
          {survey.map(({ node }, k) => {
            return <h2>{node.frontmatter.title}</h2>;
          })}
        </div>

        {survey.map(({ node }, k) => {
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
          regex: "/contents/survey-of-the-pigeons-towers-in-the-isfahan-province/"
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
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  quality: 1000
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
