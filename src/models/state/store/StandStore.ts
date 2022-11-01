// import EstateService from 'api/estateService';
import {
  makeObservable, observable,
} from 'mobx';

export type PoligonType = {
  name: string,
  coordinates?: [number, number][],
};

export type IStand = {
  id: number | string
  square: number
  poligon: PoligonType
  description?: string
};
export type IStandStore = {
  stand: IStand
};

export default class StandStore {
  public stand: IStand;

  constructor(data: IStand) {
    this.stand = data;
    makeObservable(this, {
      stand: observable,
    });
  }

  /*
  * setStand(params: CreateStandParams) { данные с окна редактирования
  }
  */
}
