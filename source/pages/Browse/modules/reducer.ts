import {
  FetchGamesFailed,
  FetchGamesStarted,
  FetchGamesSucceeded,
  SearchGames,
  ShowGameDetails,
  SortGames,
} from 'ventura/pages/Browse/modules/types';
import {
  FETCH_GAMES_FAILED,
  FETCH_GAMES_STARTED,
  FETCH_GAMES_SUCCEEDED,
  FILTER_GAMES,
  SEARCH_GAMES,
  SHOW_GAME_DETAILS,
  SORT_GAMES,
} from './constants';
import { FilterGames, IGame, IGamesState, ILabelValue } from './types';

type Actions =
  | FetchGamesStarted
  | FetchGamesSucceeded
  | FetchGamesFailed
  | ShowGameDetails
  | SearchGames
  | FilterGames
  | SortGames;

const initialState: IGamesState = {
  defaultGamesList: [],
  visibleGamesList: [],
  preFilteredGamesList: [],
  allFilterTags: [],
  selectedGame: {
    icon: '',
    name: '',
    supportsAddons: false,
    supportsVoice: false,
    order: 0,
    details: {
      slug: '',
      fileNames: [],
      categorySectionNames: [],
    },
  },
  isLoadingGames: false,
};

export function gamesReducer(
  state: IGamesState = initialState,
  action: Actions,
) {
  let visibleGamesList: IGame[] = [];

  switch (action.type) {
    case FETCH_GAMES_STARTED:
      return {
        ...state,
        isLoadingGames: true,
      };

    case FETCH_GAMES_SUCCEEDED:
      const sortedGames = action.gamesList.sort(sortGamesByOrder);

      const allFilterTags = sortedGames.reduce(
        (filteredGames: string[], game: IGame) => {
          game.details.categorySectionNames.forEach((section: string) => {
            if (!filteredGames.includes(section)) {
              filteredGames.push(section);
            }
          });
          return filteredGames;
        },
        ['Voice', 'Addons'],
      );

      return {
        ...state,
        isLoadingGames: false,
        defaultGamesList: sortedGames,
        visibleGamesList: sortedGames,
        preFilteredGamesList: sortedGames,
        allFilterTags,
      };
    case FETCH_GAMES_FAILED:
      return {
        ...state,
        isLoadingGames: false,
      };
    case SHOW_GAME_DETAILS:
      return {
        ...state,
        selectedGame: action.selectedGame,
      };
    case SEARCH_GAMES:
      visibleGamesList = [...state.preFilteredGamesList];
      if (action.searchQuery) {
        visibleGamesList = visibleGamesList.filter((game: IGame) =>
          game.name.toLowerCase().includes(action.searchQuery.toLowerCase()),
        );
      }
      return {
        ...state,
        visibleGamesList,
      };
    case FILTER_GAMES:
      visibleGamesList = [...state.preFilteredGamesList];

      if (action.filterTags) {
        const currentFilters = action.filterTags.map(
          (filterTag: ILabelValue) => filterTag.value,
        );
        visibleGamesList = visibleGamesList.filter((game: IGame) => {
          const gameCategoryTags = game.details.categorySectionNames;
          if (!gameCategoryTags.includes('Addons') && game.supportsAddons) {
            gameCategoryTags.push('Addons');
          }
          if (game.supportsVoice) {
            gameCategoryTags.push('Voice');
          }
          return currentFilters.every((filter: string) => gameCategoryTags.includes(filter));
        });
      }

      return {
        ...state,
        visibleGamesList,
      };
    case SORT_GAMES:
      visibleGamesList = [...state.visibleGamesList];
      let preFilteredGamesList = [...state.preFilteredGamesList];

      if (action.sortKey === 'alpha') {
        visibleGamesList.sort(sortGamesByAlphabet);
        preFilteredGamesList.sort(sortGamesByAlphabet);
      } else if (action.sortKey === 'reverse') {
        visibleGamesList.sort(sortGamesByReverseAlphabet);
        preFilteredGamesList.sort(sortGamesByReverseAlphabet);
      } else {
        visibleGamesList.sort(sortGamesByOrder);
        preFilteredGamesList = [...state.defaultGamesList];
      }
      return {
        ...state,
        visibleGamesList,
        preFilteredGamesList,
      };
  }

  return state;
}

function sortGamesByAlphabet(a: IGame, b: IGame) {
  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

function sortGamesByReverseAlphabet(a: IGame, b: IGame) {
  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA > nameB) {
    return -1;
  } else if (nameA < nameB) {
    return 1;
  } else {
    return 0;
  }
}

function sortGamesByOrder(a: IGame, b: IGame) {
  return a.order - b.order;
}
