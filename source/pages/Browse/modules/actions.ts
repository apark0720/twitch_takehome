import { Dispatch } from 'redux';
import { config } from 'ventura/globals';
import { IGlobalStoreGetter } from 'ventura/globals/types';
import { gamesDataAdapter } from './adapters';
import {
  FETCH_GAMES_FAILED,
  FETCH_GAMES_STARTED,
  FETCH_GAMES_SUCCEEDED,
  FILTER_GAMES,
  SEARCH_GAMES,
  SHOW_GAME_DETAILS,
  SORT_GAMES,
} from './constants';
import {
  FetchGamesFailed,
  FetchGamesStarted,
  FetchGamesSucceeded,
  FilterGames,
  IGame,
  ILabelValue,
  SearchGames,
  ShowGameDetails,
  SortGames,
} from './types';

// Action Creators
function fetchGamesStarted(): FetchGamesStarted {
  return { type: FETCH_GAMES_STARTED };
}

function fetchGamesSucceeded(gamesData: IGame[]): FetchGamesSucceeded {
  return { type: FETCH_GAMES_SUCCEEDED, gamesList: gamesData };
}

function fetchGamesFailed(): FetchGamesFailed {
  return { type: FETCH_GAMES_FAILED };
}

export function showGameDetails(selectedGame: IGame): ShowGameDetails {
  return { type: SHOW_GAME_DETAILS, selectedGame };
}

export function searchGames(searchQuery: string): SearchGames {
  return { type: SEARCH_GAMES, searchQuery };
}

export function filterGames(filterTags: ILabelValue[]): FilterGames {
  return { type: FILTER_GAMES, filterTags };
}

export function sortGames(sortKey: string): SortGames {
  return { type: SORT_GAMES, sortKey };
}

// Fetch Games Thunk
export function fetchGames() {
  return (dispatch: Dispatch<any>, _getState: IGlobalStoreGetter) => {
    dispatch(fetchGamesStarted());

    fetch(config.gamesDataURL)
      .then(res => res.json())
      .then(games => {
        const gamesData = gamesDataAdapter(games.data);
        dispatch(fetchGamesSucceeded(gamesData));
      })
      .catch(() => {
        dispatch(fetchGamesFailed());
      });
  };
}
