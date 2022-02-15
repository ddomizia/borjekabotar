import React from "react";
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

        <div className="bg-image">
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt="About"
            objectFit="cover"
            className="bg-image"
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
                  <Card.Title>Ilaria Elisea Scerrato</Card.Title>
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
            </CardGroup>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default team;
