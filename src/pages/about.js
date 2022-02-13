import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import PageLayout from "../templates/Layout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

const team = () => {
  return (
    <div>
      <PageLayout>
        <Wrapper>
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt=""
            objectFit="cover"
            className="bg-image"
          />
          <section>
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
          </section>
        </Wrapper>
      </PageLayout>
    </div>
  );
};

//style
const Wrapper = styled.section`
  .bg-image img {
    height: calc(50vh);
    width: calc(300vh);
  }
  /* p .card-text {
    font-family: "Noto Sans JP", serif;
    font-weight: 300;
    font-size: 1rem;
  }
  section {
    margin: 2rem 2rem;
  }
  .card {
    margin-right: 0.4rem;
    border: none;
  }
  .card-title {
    font-family: "Noto Serif JP", serif;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
  }
  .card-text.position {
    font-family: "Noto Sans JP", serif;
    font-weight: 800;
    font-style: italic;
    font-size: 1rem !important;
    text-align: center;
  } */
`;

export default team;
