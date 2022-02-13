import React from "react";
import {
  MapContainer,
  LayersControl,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  Tooltip,
} from "react-leaflet";

import pTowers from "../../geojson/ptowers.json";
import Map from "../templates/Map";

const webgis = () => {
  const position = [32.740464, 51.493785];
  return (
    <>
      <Map>
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
      </Map>
    </>
  );
};

export default webgis;
