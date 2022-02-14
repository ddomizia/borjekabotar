import React from "react";
import styled from "styled-components";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../templates/ConLayout";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

const team = () => {
  return (
    <div>
      <Layout>

        <Helmet>
          <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
          <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />
          <title>Borj-e Kabotar | About</title>

          <meta name="description" content="The team of Borj-e Kabotar" />
          <link rel="canonical" href="" />

          <meta property="og:title" content="Borj-e Kabotar | About" />
          <meta
            property="og:description"
            content="The team of Borj-e Kabotar"
          />
          <meta property="og:url" content="" />
          <meta
            property="og:image"
            content={withPrefix(`static/logos/logo-bn.png`)}
          />

          <meta property="twitter:title" content="Borj-e Kabotar | About" />
          <meta
            property="twitter:description"
            content="The team of Borj-e Kabotar"
          />
          <meta property="twitter:url" content="" />
          <meta
            property="twitter:image"
            content={withPrefix(`static/logos/logo-bn.png`)}
          />
        </Helmet>

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
