import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <Container>
            <Row>
              <Col sm={1}>
                <StaticImage
                  src="../../static/logos/logo_bn.png"
                  alt="Logo Borj-e Kabotar"
                  width="100"
                  placeholder="blurred"
                  objectFit="contain"
                />
              </Col>
              <Col sm={5}>
                <h5>
                  Borj-e Kabotar. <br></br> Architecture and anthropology of the
                  pigeon towers in the Isfahan province
                </h5>
                <p>
                  Danilo Rosati and Fariba Saiedi Anaraki
                  <br></br>
                  Nation: Iran <br></br>Period: 2018 – in progress <br></br>
                  <a href="mailto:borjekabotar@gmail.com">
                    borjekabotar@gmail.com
                  </a>
                </p>
              </Col>
              <Col>
                <StaticImage
                  src="../../static/logos/ismeo.png"
                  alt="Logo Borj-e Kabotar"
                  width="170"
                  placeholder="blurred"
                  objectFit="contain"
                  className="partner"
                />
              </Col>
              <Col>
                <StaticImage
                  src="../../static/logos/min_aff_est.png"
                  alt="Logo Borj-e Kabotar"
                  width="200"
                  placeholder="blurred"
                  objectFit="contain"
                />
              </Col>
              <Col>
                <StaticImage
                  src="../../static/logos/icar_logo.png"
                  alt="Logo Borj-e Kabotar"
                  width="100"
                  placeholder="blurred"
                  objectFit="contain"
                />
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </footer>
      </Wrapper>
    </>
  );
};

//style
const Wrapper = styled.section`
  footer {
    padding: 2rem 2rem;
    background-color: whitesmoke;
    font-family: "Montserrat", sans-serif !important;
  }
  h5 {
    font-size: 1rem;
    text-align: left;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  p {
    text-align: left;
  }
  .b-and-w {
    margin-top: 2rem;
    filter: invert(100%);
  }
  .partner img {
    filter: invert(100%);
  }
`;
export default Footer;
