import { mockPolygonCoordinates } from 'consts/mockData/mockData';
import { IStandStore } from 'models/state/store/StandStore';

const estateCoordinates = (stands: IStandStore[]) => {
  const coordinates: any[] = [];
  stands.forEach((stand) => {
    if (stand.stand.poligon.coordinates) {
      coordinates.push(stand.stand.poligon.coordinates);
    }
  });
  if (coordinates.length === 0) { // чтобы приложение не падало
    coordinates.push(mockPolygonCoordinates);
  }
  return coordinates;
};

export default estateCoordinates;
