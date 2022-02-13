import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../templates/ConLayout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

const team = () => {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
};

//style
const Wrapper = styled.section`
`;

export default team;
