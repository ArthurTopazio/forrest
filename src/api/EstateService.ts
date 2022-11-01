// import { IEstate, IStand } from 'models/state/store/EstateStore';
import { authHost } from './hosts';

/* export interface CreateStandParams {
  estateId: number,
  stand: IStand,
}
export interface DeleteStandParams {
  estateId: number,
  standId: number
} */

export default class EstateService {
  static async getEstates() {
    const { data } = await authHost.get('auth'); // estates
    return data;
  }

  static async createEstate() {
    const { data } = await authHost.post('user'); // estates
    return data;
  }

  /* static async deleteEstate(id: number) {
    const { data } = await authHost.delete(`estates/${id}`);
    return data;
  }

  static async createStand({ estateId, stand }: CreateStandParams) {
    const { data } = await authHost.post(`estates/${estateId}`, { stand });
    return data;
  }

  static async updateStand({ estateId, stand }: CreateStandParams) {
    const { data } = await authHost.patch(`estates/${estateId}`, { stand });
    return data;
  }

  static async deleteStand({ estateId, standId }: DeleteStandParams) {
    const { data } = await authHost.post(`estates/${estateId}/${standId}`);
    return data;
  } */
}
