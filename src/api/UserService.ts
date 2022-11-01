import { host, authHost } from './hosts';

type AuthRequest = {
  email: string,
  password: string
};

export default class UserService {
  static async getUser() {
    const { data } = await authHost.get('user');
    return data;
  }

  static async login({
    email, password,
  }: AuthRequest) {
    const { data } = await host.post('login', { email, password }); // user/login
    return data;
  }

  static async checkUser() {
    const { data } = await authHost.post('auth'); // user/auth
    return data;
  }

  static async getVisitors() {
    const { data } = await authHost.get('visitors'); // user/visitors
    return data;
  }

  /* static async updateUser(params: IUser) {
    const { data } = await authHost.patch(
      'user',
      { params: { ...params } },
    );
    return data;
  } */

  /* static async registration({
    email, password,
  }: AuthRequest) {
    const { data } = await host.post('user/registration', { email, password });
    localStorage.setItem('token', data.token);
    return data.token; d
  } */
}
