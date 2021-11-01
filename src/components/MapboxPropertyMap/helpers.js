export const createPoints = (properties) => {
  return {
    type: "FeatureCollection",
    features: Object.keys(properties).map((property) => {
      let currentProperty = properties[property];

      if (properties[property][0] !== undefined) {
        currentProperty = [properties][property][0];
      }

      return {
        type: "Feature",
        properties: {
          cluster: false,
          streetAddress: property,
          category: currentProperty["category"],
          owner2: currentProperty["owner_2"],
          saleDate: currentProperty["sale_date"],
          salePrice: currentProperty["sale_price"],
          yearBuilt: currentProperty["year_built"],
          yearBuiltEstimate: currentProperty["year_built_estimate"],
          recordingDate: currentProperty["recording_date"],
        },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(currentProperty.location[0]),
            parseFloat(currentProperty.location[1]),
          ],
        },
      };
    }),
  };
};
