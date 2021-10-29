import React, { useRef, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import MapPin from "../MapPin/MapPin";
import Spinner from "react-bootstrap/Spinner";

export default function MapboxPropertyMap({ landlord, data, loading, error }) {
  const [viewport, setViewport] = useState({
    latitude: 39.952778,
    longitude: -75.163611,
    width: "100%",
    height: "100%",
    zoom: 10,
  });
  const mapRef = useRef();

  // prepare data

  const properties = data && !error ? data.properties : [];
  const totalProperties = data && !error ? data.total_properties : [];
  const points = Object.keys(properties).map((property) => {
    if (properties[property][0] !== undefined) {
      return {
        type: "Feature",
        properties: {
          cluster: false,
          streetAddress: property,
          category: properties[property][0]["category"],
          owner2: properties[property][0]["owner_2"],
          saleDate: properties[property][0]["sale_date"],
          salePrice: properties[property][0]["sale_price"],
          yearBuilt: properties[property][0]["year_built"],
          yearBuiltEstimate: properties[property][0]["year_built_estimate"],
          recordingDate: properties[property][0]["recording_date"],
        },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(properties[property][0].location[1]),
            parseFloat(properties[property][0].location[0]),
          ],
        },
      };
    } else {
      return {
        type: "Feature",
        properties: {
          cluster: false,
          streetAddress: property,
          category: properties[property]["category"],
          owner2: properties[property]["owner_2"],
          saleDate: properties[property]["sale_date"],
          salePrice: properties[property]["sale_price"],
          yearBuilt: properties[property]["year_built"],
          yearBuiltEstimate: properties[property]["year_built_estimate"],
          recordingDate: properties[property]["recording_date"],
        },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(properties[property].location[1]),
            parseFloat(properties[property].location[0]),
          ],
        },
      };
    }
  });

  // get map bounds
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  // get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  if (loading) {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Spinner animation="border" variant="primary" size={"lg"}></Spinner>
        <p>`Loading Map & Points...`</p>
      </div>
    );
  } else if (error) {
    return <h3>Error!</h3>;
  } else {
    // return map
    if (landlord === undefined) {
      return <h1>Something went wrong, try refreshing.</h1>;
    }
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
          mapboxApiAccessToken="pk.eyJ1IjoibmNvdGUzIiwiYSI6ImNrY2t5dWQ3cDBmaXQydHQ4b3VoODdmemIifQ.QT2VDIQGlElLnAENpCilpA"
          onViewportChange={(newViewport) => {
            setViewport({ ...newViewport });
          }}
          ref={mapRef}
          mapStyle="mapbox://styles/ncote3/ckckyx36t05sb1inyzgjvq77q"
        >
          {clusters.map((cluster) => {
            // every cluster point has coordinates
            const [longitude, latitude] = cluster.geometry.coordinates;
            // the point may be either a cluster or a property
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            // we have a cluster to render
            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <div
                    className="cluster-marker"
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );

                      setViewport({
                        ...viewport,
                        latitude,
                        longitude,
                        zoom: expansionZoom,
                        transitionInterpolator: new FlyToInterpolator({
                          speed: 2,
                        }),
                        transitionDuration: "auto",
                      });
                    }}
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                      color: "#fff",
                      background: "#1978c8",
                      borderRadius: "50%",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              );
            }
            // we have a single point (property) to render
            return (
              <Marker
                key={`property-${cluster.properties.streetAddress}`}
                latitude={latitude}
                longitude={longitude}
              >
                <MapPin props={cluster.properties} />
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    );
  }
}
