import { IGamesState } from './../pages/Browse/modules/types';

export interface IStore {
  games: IGamesState;
}

export interface IGlobalStoreGetter {
  (): IStore;
}
