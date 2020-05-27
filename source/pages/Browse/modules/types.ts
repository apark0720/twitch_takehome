import {
  FETCH_GAMES_FAILED,
  FETCH_GAMES_STARTED,
  FETCH_GAMES_SUCCEEDED,
  FILTER_GAMES,
  SEARCH_GAMES,
  SHOW_GAME_DETAILS,
  SORT_GAMES,
} from './constants';

export interface IGamesState {
  defaultGamesList: IGame[];
  visibleGamesList: IGame[];
  preFilteredGamesList: IGame[];
  allFilterTags: string[];
  selectedGame: IGame;
  isLoadingGames: boolean;
}

export interface IGame {
  icon: string;
  name: string;
  supportsAddons: boolean;
  supportsVoice: boolean;
  order: number;
  details: {
    slug: string;
    fileNames: string[];
    categorySectionNames: string[];
  };
}

export interface ILabelValue {
  value: string;
  label: string;
}

//actions
export type FetchGamesStarted = {
  type: typeof FETCH_GAMES_STARTED;
};

export type FetchGamesSucceeded = {
  type: typeof FETCH_GAMES_SUCCEEDED;
  gamesList: IGame[];
};

export type FetchGamesFailed = {
  type: typeof FETCH_GAMES_FAILED;
};

export type ShowGameDetails = {
  type: typeof SHOW_GAME_DETAILS;
  selectedGame: IGame;
};

export type SearchGames = {
  type: typeof SEARCH_GAMES;
  searchQuery: string;
};

export type FilterGames = {
  type: typeof FILTER_GAMES;
  filterTags: ILabelValue[];
};

export type SortGames = {
  type: typeof SORT_GAMES;
  sortKey: string;
};
