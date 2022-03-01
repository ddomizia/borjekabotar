import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button, Carousel } from 'react-bootstrap'

import Layout from "../templates/Layout"
import Image2 from "../../static/images/sfondo_bk.jpg";


const index = () => {
  return (
    <Layout>
      <Wrapper>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Image2} alt="Home" />
            <Carousel.Caption className="d-flex flex-column justify-content-center top-0">
              <h1 className="d-md-inline-block d-none">Borj–e Kabotar</h1>
              <p className="d-md-inline-block align-top d-none">
                Architecture and anthropology of the pigeon towers in the
                Isfahan province
              </p>
              <Link to="/webgis" title="Web GIS">
                <Button variant="link">Explore WebGIS</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.section`
  img {
    max-width: 100%;
    height: auto;
    filter: brightness(70%);
  }
`;

export default index