import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbySeo } from "gatsby-plugin-next-seo";

import Layout from "../templates/ConLayout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

const team = () => {
  return (
    <div>
      <Layout>
        <GatsbySeo
          title="Borj-e Kabotar | About"
          description="The team of Borj-e Kabotar"
          canonical="https://www.borjekabotar.com/about/"
        />

        <div className="bg-image">
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt="About"
            objectFit="cover"
            style={{ width: "300vh", height: "50vh" }}
          />
          <h2>Team</h2>
        </div>
        <Row className="col-md-8 mx-auto my-5">
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Danilo Rosati</Card.Title>
                  <Card.Text className="position">
                    Principal Investigator
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Fariba Saiedi Anaraki</Card.Title>
                  <Card.Text className="position">
                    Principal Investigator
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Ilaria Elisea Scerrato</Card.Title>
                  <Card.Text className="position">Anthropologist</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default team;
