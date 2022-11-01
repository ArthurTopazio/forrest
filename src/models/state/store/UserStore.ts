import UserService from 'api/UserService';
import { AxiosError } from 'axios';
import { PathsApp } from 'consts/NavBarButtonsData';
import store from 'index';
import {
  makeObservable, observable, action, runInAction,
} from 'mobx';

type RoleUser = 'ADMIN' | 'USER';

export type IUser = {
  id: number
  name: string
  avatar?: string
  role?: RoleUser
  token?: string
  lastVisit: number
};

export default class UserStore {
  public user: IUser;

  public visitorsList: IUser[];

  public isAuth: boolean;

  constructor() {
    this.user = { id: 0, name: '', lastVisit: 0 };
    this.visitorsList = [];
    this.isAuth = false;
    makeObservable(this, {
      user: observable,
      visitorsList: observable,
      isAuth: observable,
      setAuth: action,
      setVisitorsList: action,
      fetchUser: action,
      login: action,
      init: action,
      setLastVisit: action,
      fetchVisitorsList: action,
    });
  }

  fetchUser = async () => {
    store.application.setLoading(true);
    try {
      const response = await UserService.getUser();
      this.user = response.user;
      runInAction(() => this.setAuth(true));
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };

  login = async (email: string, password: string) => {
    store.application.setLoading(true);
    try {
      const response = await UserService.login({ email, password });
      localStorage.setItem('token', response.token);
      runInAction(() => this.fetchUser());
      runInAction(() => this.setLastVisit());
      runInAction(() => this.fetchVisitorsList());
      store.estates.init();
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };

  check = async () => {
    store.application.setLoading(true);
    try {
      const response = await UserService.checkUser();
      localStorage.setItem('token', response.token);
      runInAction(() => this.fetchUser());
      runInAction(() => this.setLastVisit());
      runInAction(() => this.fetchVisitorsList());
      store.estates.init();
    } finally {
      store.application.setLoading(false);
    }
  };

  setAuth = (auth: boolean) => {
    this.isAuth = auth;
  };

  setVisitorsList = (visitors: IUser[]) => {
    this.visitorsList = visitors.sort((a, b) => a.lastVisit - b.lastVisit);
  };

  fetchVisitorsList = async () => {
    store.application.setLoading(true);
    try {
      const response = await UserService.getVisitors();
      runInAction(() => this.setVisitorsList(response.visitors));
      store.router.page = { p: PathsApp.tools, p1: '' }; // ux update
    } catch (e: unknown) {
      const err = e as AxiosError;
      store.application.setError(err.message);
    } finally {
      store.application.setLoading(false);
    }
  };

  init = async () => {
    runInAction(() => this.check());
  };

  setLastVisit = () => {
    // ассинхронный запрос
    this.user.lastVisit = Date.now();
  };
}
