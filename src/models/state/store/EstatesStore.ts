import EstateService from 'api/EstateService';
import { AxiosError } from 'axios';
import store from 'index';
import {
  makeObservable, observable, action, runInAction,
} from 'mobx';
import idRandomizer from 'utils/idRandomizer';
import EstateStore, { IEstate, IEstateStore } from './EstateStore';

export default class EstatesStore {
  public estates: IEstateStore[];

  constructor() {
    this.estates = [];
    makeObservable(this, {
      estates: observable,
      init: action,
      addEstate: action,
      deleteEstate: action,
    });
  }

  init = async () => {
    try {
      const response = await EstateService.getEstates();
      runInAction(() => {
        this.estates = response.estates.map((item: IEstate) => new EstateStore(item));
      });
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    }
  };

  deleteEstate = async (id: number | string | undefined) => {
    store.application.setLoading(true);
    try {
      const response = await EstateService.createEstate(); // delete
      console.log(response);
      this.estates = this.estates.filter((item) => item.estateId !== id);
      store.application.setSuccess(true);
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };

  addEstate = async () => {
    store.application.setLoading(true);
    try {
      const response = await EstateService.createEstate();
      console.log(response);
      const id: string = idRandomizer();
      const estate: IEstate = { id, stands: [], totalSquare: 0 };
      this.estates.unshift(new EstateStore(estate));
      store.application.setSuccess(true);
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };
}
