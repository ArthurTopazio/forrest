import store from 'index';
import * as turf from '@turf/turf';
import estateCoordinates from 'utils/estateCoordinates';

const getAllStands = () => {
  const coordinates: any[] = store.estates.estates.map((estate) => estateCoordinates(estate.stands));
  const cleanCoord: any[] = [];
  coordinates.forEach((item) => item.forEach((pic: any[]) => cleanCoord.push(pic)));
  return cleanCoord.map((item) => turf.polygon([item]));
};

export default getAllStands;
