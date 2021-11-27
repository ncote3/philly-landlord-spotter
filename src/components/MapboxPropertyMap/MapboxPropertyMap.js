import React, { useRef, useState } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import Spinner from "react-bootstrap/Spinner";
import { createPoints } from "./helpers";
import MapPopover from "../MapPopover/MapPopover";
import * as LayerConfigs from "./layerConfigs";
import * as constants from "./constants";

export default function MapboxPropertyMap({ landlord, data, loading, error }) {
  const [viewport, setViewport] = useState(constants.INITIAL_MAP_STATE);
  const [popupInfo, setPopupInfo] = useState(null);
  const mapRef = useRef(null);

  const properties = data && !error ? data.properties : [];
  const totalProperties = data && !error ? data.total_properties : [];
  const points = createPoints(properties);

  const handleClusterClick = (event, feature) => {
    const { properties, geometry } = feature;
    const { cluster_id: clusterId } = properties;

    const mapboxSource = mapRef.current.getMap().getSource("source-properties");

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      const [longitude, latitude] = geometry.coordinates;

      setViewport({
        ...viewport,
        longitude,
        latitude,
        zoom,
        transitionDuration: 500,
      });
    });
  };

  const handlePointClick = (event, feature) => {
    throw new Error("Not yet implemented");
  };

  const onMapClick = (event) => {
    const [feature] = event.features;

    if (feature && feature.properties) {
      const { cluster } = feature.properties;

      if (cluster) {
        handleClusterClick(event, feature);
      } else {
        handlePointClick(event, feature);
      }
    }
  };

  const renderLoading = () => {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Spinner animation="border" variant="primary" size={"lg"}></Spinner>
        <p>Loading Map & Points...</p>
      </div>
    );
  };

  const renderMap = () => {
    return (
      <div
        style={{ height: "70vh", width: "100%" }}
        className="MapboxPropertyMapWrapper"
      >
        <h3 className="landlordTitle">{landlord}</h3>
        <h5> Owns {totalProperties} Properties</h5>
        <ReactMapGL
          {...viewport}
          maxZoom={20}
          mapboxApiAccessToken="pk.eyJ1IjoibmNvdGUzIiwiYSI6ImNrdmN3M3AycmIxMngzMnE2c3p6MjVsMzAifQ.kGZjG0AVJHc47gB_-ErZZw"
          onViewportChange={setViewport}
          ref={mapRef}
          onClick={onMapClick}
          mapStyle="mapbox://styles/ncote3/ckckyx36t05sb1inyzgjvq77q"
        >
          <Source
            id="source-properties"
            type="geojson"
            data={points}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...LayerConfigs.clusterLayerConfig} />
            <Layer {...LayerConfigs.clusterCountConfig} />
            <Layer {...LayerConfigs.unclusteredPointConfig} />
          </Source>

          {popupInfo && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              closeOnClick={false}
              onClose={setPopupInfo}
            >
              <MapPopover info={popupInfo} />
            </Popup>
          )}
        </ReactMapGL>
      </div>
    );
  };

  if (loading) {
    return renderLoading();
  } else if (error) {
    return <h3>Error!</h3>;
  } else {
    if (landlord === undefined) {
      return <h1>Something went wrong, try refreshing.</h1>;
    }
    return renderMap();
  }
}
