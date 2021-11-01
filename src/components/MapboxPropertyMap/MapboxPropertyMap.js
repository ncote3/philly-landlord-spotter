import React, { useRef, useState } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import Spinner from "react-bootstrap/Spinner";
import { createPoints } from "./helpers";

export default function MapboxPropertyMap({ landlord, data, loading, error }) {
  const [viewport, setViewport] = useState({
    latitude: 39.9513445279,
    longitude: -75.1583360333,
    width: "100%",
    height: "100%",
    zoom: 10,
    bearing: 0,
    pitch: 0,
  });
  const mapRef = useRef(null);

  // prepare data

  const properties = data && !error ? data.properties : [];
  const totalProperties = data && !error ? data.total_properties : [];
  const points = createPoints(properties);

  const onMapClick = (event) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getMap().getSource("source-properties");

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      setViewport({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500,
      });
    });
  };

  const renderLoading = () => {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Spinner animation="border" variant="primary" size={"lg"}></Spinner>
        <p>`Loading Map & Points...`</p>
      </div>
    );
  };

  const clusterLayerConfig = {
    id: "clusters",
    type: "circle",
    source: "source-properties",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#51bbd6",
        100,
        "#f1f075",
        750,
        "#f28cb1",
      ],
      "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
    },
  };

  const clusterCountConfig = {
    id: "cluster-count",
    type: "symbol",
    source: "source-properties",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12,
    },
  };

  const unclusteredPointConfig = {
    id: "unclustered-point",
    type: "circle",
    source: "source-properties",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": "#11b4da",
      "circle-radius": 4,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#fff",
    },
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
            <Layer {...clusterLayerConfig} />
            <Layer {...clusterCountConfig} />
            <Layer {...unclusteredPointConfig} />
          </Source>
          {/* {clusters.map((cluster) => {
            // every cluster point has coordinates
            const [longitude, latitude] = cluster.geometry.coordinates;
            // the point may be either a cluster or a property
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            // we have a cluster to render
            if (isCluster) {
              return renderCluster(cluster, latitude, longitude, pointCount);
            }
            return renderSingleProperty(cluster, latitude, longitude);
          })} */}
        </ReactMapGL>
      </div>
    );
  };

  if (loading) {
    return renderLoading();
  } else if (error) {
    return <h3>Error!</h3>;
  } else {
    // return map
    if (landlord === undefined) {
      return <h1>Something went wrong, try refreshing.</h1>;
    }
    return renderMap();
  }
}
