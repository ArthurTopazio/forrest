import { makeObservable, observable } from 'mobx';

export type PageType = { p: string, p1?: string | undefined, p2?: string | undefined };

export default class PageStore {
  public page: PageType;

  constructor() {
    this.page = { p: '', p1: '' };
    makeObservable(this, {
      page: observable,
    });
  }
}
