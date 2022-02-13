import React from 'react'
import { Link } from 'gatsby'
import { Carousel } from 'react-bootstrap'
import Layout from "../templates/Layout"

import Image2 from "../../static/images/towers_isfahan.jpg";


const index = () => {
  return (
    <Layout>
        <Carousel>
          <Carousel.Item className="min-vh-50">
            <img className="d-block w-100" src={Image2} alt="" />
            <Carousel.Caption className="d-flex flex-column justify-content-center top-0">
              <h1 className="d-md-inline-block d-none">Borj–e Kabotar</h1>
              <p className="d-md-inline-block align-top d-none">
                Architecture and anthropology of the pigeon towers in the
                Isfahan province
              </p>
              <Link to="/webgis" title="Web GIS">
                <span>Explore WebGIS</span>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Layout>
  );
}

export default index