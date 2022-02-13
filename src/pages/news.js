import React from 'react'
import { withPrefix } from 'gatsby';
import Layout from "../templates/ConLayout";

import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';

import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

const news = () => {
  return (
    <>
      <Layout>
        <Helmet>
          <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
          <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />
          <title>Borj-e Kabotar | News</title>

          <meta name="description" content="News of Borj-e Kabotar project" />
          <link rel="canonical" href="" />

          <meta property="og:title" content="Borj-e Kabotar | News" />
          <meta
            property="og:description"
            content="News of Borj-e Kabotar project"
          />
          <meta property="og:url" content="" />
          <meta
            property="og:image"
            content={withPrefix(`static/logos/logo-bn.png`)}
          />

          <meta property="twitter:title" content="Borj-e Kabotar | News" />
          <meta
            property="twitter:description"
            content="News of Borj-e Kabotar project"
          />
          <meta property="twitter:url" content="" />
          <meta
            property="twitter:image"
            content={withPrefix(`static/logos/logo-bn.png`)}
          />
        </Helmet>

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