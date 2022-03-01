import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { GatsbySeo } from "gatsby-plugin-next-seo";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const project = ({ data }) => {
  const geography = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {geography.map(({ node }, k) => {
        return (
          <GatsbySeo
            key={k}
            title="Borj-e Kabotar | Geographical Setting"
            description={node.frontmatter.description}
            canonical="https://www.borjekabotar.com/geo/"
          />
        );
      })}

      <div className="bg-image">
        <StaticImage
          src="../../static/images/geo_setting_background.jpg"
          alt="Geographical Setting"
          objectFit="cover"
          style={{ width: "300vh", height: "50vh" }}
        />
        {geography.map(({ node }, k) => {
          return <h2 key={k}>{node.frontmatter.title}</h2>;
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
    </Layout>
  );
};

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
