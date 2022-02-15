import React from "react";
import {
  MapContainer,
  LayersControl,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  Tooltip,
} from "react-leaflet";

import styled from "styled-components";
import { withPrefix } from "gatsby";
import pTowers from "../../geojson/ptowers.json";
import Layout from "../templates/Layout";
import Seo from "../components/SEO";

const webgis = () => {
  const position = [32.740464, 51.493785];
  return (
    <>
      <Layout>
        <Seo
          title="Borj-e Kabotar | WebGIS"
          description="The WebGIS of Borj-e Kabotar"
          url="https://borjekabotar.com/webgis/"
          image={withPrefix(`static/logos/logo_bn.png`)}
        />
        <Wrapper>
          <div>
            <MapContainer
              center={position}
              zoom={9}
              style={{ height: "100%", width: "100%", position: "absolute" }}
            >
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapik">
                  <TileLayer
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer checked name="Esri WorldImagery">
                  <TileLayer
                    attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              <FeatureGroup>
                <GeoJSON data={pTowers}></GeoJSON>
                <Tooltip
                  direction="right"
                  offset={[3, -2]}
                  opacity={1}
                ></Tooltip>
              </FeatureGroup>
            </MapContainer>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.section`
  .leaflet-top {
    top: 50%;
    position: absolute;
    z-index: 1000;
    pointer-events: none;
    transform: translate(0%, -50%);
  }
`;

export default webgis;
