import React from 'react'
import Layout from "../templates/ConLayout";
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';

const news = () => {
  return (
    <>
      <Layout>
        <div className="bg-image">
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt=""
            objectFit="cover"
          />
        <h2>News</h2>
        </div>
        <Container>
          <Row className="my-5">
            <Col sm={4}></Col>

            <Col sm={8}>
              <h2></h2>
              <p></p>
              <Row>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default news