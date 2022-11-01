import { mockPolygonCoordinates } from 'consts/mockData/mockData';
import store from 'index';

const standCoordinatesById = (standId: string | number) => {
  let coordinates = mockPolygonCoordinates;
  store.estates.estates.forEach((item) => item.stands.forEach((stand) => {
    if (stand.stand.id === standId && stand.stand.poligon.coordinates) {
      coordinates = stand.stand.poligon.coordinates;
    }
  }));
  return coordinates;
};

export default standCoordinatesById;
