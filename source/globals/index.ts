import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { gamesReducer } from '../pages/Browse/modules/reducer';
import { Config } from './config';
import { IStore } from './types';

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
};

export let store: Store<IStore>;
export let config: Config;

export function initGlobals() {
  config = new Config();

  // hook redux dev tools extension, if it exists
  let composeEnhancers = compose;
  if (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) {
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
  }

  store = createStore<IStore>(
    combineReducers<IStore>({
      games: gamesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
}
