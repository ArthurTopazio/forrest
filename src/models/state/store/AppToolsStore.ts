import { makeObservable, observable, action } from 'mobx';

export type LanguagesType = 'en' | 'fi';

export type IApp = {
  languege: LanguagesType
  loading: boolean
  error: string
  success: boolean
};

export default class AppToolsStore {
  public language: LanguagesType;

  public loading: boolean;

  public error: string;

  public success: boolean;

  constructor() {
    this.language = 'fi';
    this.error = '';
    this.loading = false;
    this.success = false;
    makeObservable(this, {
      language: observable,
      loading: observable,
      error: observable,
      success: observable,
      setLanguage: action,
      setLoading: action,
      setError: action,
      setSuccess: action,
    });
  }

  setLanguage = (lang: LanguagesType) => {
    this.language = lang;
  };

  setLoading = (isLoad: boolean) => {
    this.loading = isLoad;
  };

  setError = (err: string) => {
    this.error = err;
  };

  setSuccess = (isSuccess: boolean) => {
    this.success = isSuccess;
  };
}
