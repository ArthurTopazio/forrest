import * as turf from '@turf/turf';

const getEstateByCoordinates = (coordinates: [number, number][][] | undefined) => {
  const coordinatesPolygon = JSON.parse(JSON.stringify(coordinates));
  return turf.featureCollection(coordinatesPolygon.map((item: any) => turf.polygon([item])));
};

export default getEstateByCoordinates;
