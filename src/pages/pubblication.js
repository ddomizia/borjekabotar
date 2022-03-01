import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbySeo } from "gatsby-plugin-next-seo";

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../templates/ConLayout";

const project = ({ data }) => {
  const bibliography = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {bibliography.map(({ node }, k) => {
        return (
          <GatsbySeo
            key={k}
            title="Borj-e Kabotar | Pubblications"
            description={node.frontmatter.description}
            canonical="https://www.borjekabotar.com/pubblications/"
          />
        );
      })}

      <div className="bg-image">
        <StaticImage
          src="../../static/images/pubblications_background.jpg"
          alt="Pubblication"
          objectFit="cover"
          style={{ width: "300vh", height: "50vh", filter: "brightness(60%)" }}
        />
        {bibliography.map(({ node }, k) => {
          return <h2>{node.frontmatter.title}</h2>;
        })}
      </div>

      {bibliography.map(({ node }, k) => {
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
        fileAbsolutePath: { regex: "/contents/bibliography-of-pigeon-towers/" }
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
