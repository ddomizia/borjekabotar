import React from "react";
import {
  MapContainer,
  LayersControl,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  Tooltip,
} from "react-leaflet";

import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import pTowers from "../../geojson/ptowers.json";
import Layout from "../templates/Layout";

import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

const webgis = () => {
  const position = [32.740464, 51.493785];
  return (
    <>
      <Layout>

        <Helmet>
          <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
          <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />
          <title>Borj-e Kabotar | WebGIS</title>

          <meta name="description" content="The WebGIS of Borj-e Kabotar" />
          <link rel="canonical" href="" />

          <meta property="og:title" content="Borj-e Kabotar | WebGIS" />
          <meta
            property="og:description"
            content="The WebGIS of Borj-e Kabotar"
          />
          <meta property="og:url" content="" />
          <meta
            property="og:image"
            content={withPrefix(`static/logos/logo-bn.png`)}
          />

          <meta property="twitter:title" content="Borj-e Kabotar | WebGIS" />
          <meta
            property="twitter:description"
            content="The WebGIS of Borj-e Kabotar"
          />
          <meta property="twitter:url" content="" />
          <meta
            property="twitter:image"
            content={withPrefix(`static/logos/logo-bn.png`)}
          />
        </Helmet>

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
              <Tooltip direction="right" offset={[3, -2]} opacity={1}></Tooltip>
            </FeatureGroup>
          </MapContainer>
        </div>
      </Layout>
    </>
  );
};

export default webgis;
