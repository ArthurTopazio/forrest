import EstateService from 'api/EstateService';
import { AxiosError } from 'axios';
import store from 'index';
import {
  makeObservable, observable, action,
} from 'mobx';
import idRandomizer from 'utils/idRandomizer';
import StandStore, { IStand, IStandStore } from './StandStore';

export type IEstate = {
  id: number | string
  stands: IStand[]
  totalSquare: number
};
export type IEstateStore = {
  estateId: number | string
  totalSquare: number
  stands: IStandStore[]
  isOpened?: boolean
  setIsOpened?: () => void
  createStand: () => void
  deleteStand: (id: number | string | undefined) => Promise<void>
};

export default class EstateStore {
  public estateId: number | string;

  public totalSquare: number;

  public stands: IStandStore[];

  public isOpened: boolean;

  constructor(data: IEstate) {
    this.estateId = data.id;
    this.totalSquare = data.totalSquare;
    this.stands = data.stands ? data.stands.map((item: IStand) => new StandStore(item)) : [];
    this.isOpened = false;
    makeObservable(this, {
      estateId: observable,
      totalSquare: observable,
      stands: observable,
      isOpened: observable,
      setIsOpened: action,
      createStand: action,
      deleteStand: action,
    });
  }

  setIsOpened = () => {
    this.isOpened = !this.isOpened;
  };

  createStand = async () => {
    store.application.setLoading(true);
    try {
      const response = await EstateService.createEstate(); // create stand
      console.log(response);
      const id: string = idRandomizer();
      const stand: IStand = {
        id,
        poligon: { name: 'poligon data' },
        square: 0,
        description: 'Forest land',
      }; // данные с формы
      this.stands.unshift(new StandStore(stand));
      store.application.setSuccess(true);
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };

  deleteStand = async (id: number | string | undefined) => {
    store.application.setLoading(true);
    try {
      const response = await EstateService.createEstate(); // deleteStand
      console.log(response);
      this.stands = this.stands.filter((item) => item.stand.id !== id);
      store.application.setSuccess(true);
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };
}
