import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";

import Layout from "../templates/ConLayout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

const team = () => {
  return (
    <div>
      <Layout>
        <Seo
          title="Borj-e Kabotar | About"
          description="The team of Borj-e Kabotar"
          url="https://borjekabotar.com/about/"
          image={withPrefix(`static/logos/logo_bn.png`)}
        />

        <Wrapper>
          <div className="bg-image">
            <StaticImage
              src="../../static/images/towers_isfahan.jpg"
              alt=""
              objectFit="cover"
              className="bg-image"
            />
            <h2>Team</h2>
          </div>
          <Row className="col-md-8 mx-auto my-5">
            <Col>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>Danilo Rosati</Card.Title>
                    <Card.Text className="position">
                      Principal Investigator
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>Ilaria Elisea Scerrato</Card.Title>
                    <Card.Text className="position">
                      Principal Investigator
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>F.S. Anaraki</Card.Title>
                    <Card.Text className="position">
                      Principal Investigator
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Wrapper>
      </Layout>
    </div>
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

export default team;
