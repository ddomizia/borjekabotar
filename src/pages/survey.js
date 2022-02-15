import React from "react";
import { graphql} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbySeo } from "gatsby-plugin-next-seo";

import Layout from "../templates/ConLayout";
import { Container, Row, Col } from "react-bootstrap";

const project = ({ data }) => {
  const survey = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {survey.map(({ node }, k) => {
        return (
          <GatsbySeo
           key={k}
           title="Borj-e Kabotar | Survey"
           description={node.frontmatter.description}
           canonical="https://www.borjekabotar.com/survey/"
        />
        );
      })}
      <div className="bg-image">
        <StaticImage
          src="../../static/images/survey_background.jpg"
          alt="Survey"
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
    </Layout>
  );
};

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
