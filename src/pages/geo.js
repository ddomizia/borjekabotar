import React from "react";
import styled from "styled-components";
import { graphql, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";
import Seo from "../components/SEO"

const project = ({ data }) => {
  const geography = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {geography.map(({ node }, k) => {
        return (
          <Seo key = {k}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            url={node.frontmatter.url}
            image={withPrefix(`static/logos/logo_bn.png`)}
          />
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
            description
            tags
            title
            url
          }
        }
      }
    }
  }
`;

export default project;
