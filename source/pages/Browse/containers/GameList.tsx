import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LargeHeader } from 'ventura/components/atoms/Headers/LargeHeader';
import { LoadingSpinner } from 'ventura/components/atoms/LoadingSpinner/LoadingSpinner';
import { NavMenu } from 'ventura/components/molecules/NavMenu/NavMenu';
import { SortDropDown } from 'ventura/components/molecules/SortDropDown/SortDropDown';
import { FilterBar } from 'ventura/components/organisms/FilterBar/FilterBar';
import { Grid } from 'ventura/components/organisms/Grid/Grid';
import { IStore } from 'ventura/globals/types';
import { GameCard } from 'ventura/pages/Browse/containers/GameCard';
import {
  fetchGames,
  filterGames,
  showGameDetails,
  sortGames,
} from 'ventura/pages/Browse/modules/actions';
import { IGame, ILabelValue } from '../modules/types';
import './GameList.scss';

type IReduxProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

interface IProps extends IReduxProps {}

const GameList: React.FC<IProps> = ({
  gamesList,
  allFilterTags,
  isLoadingGames,
  fetchGames,
  showGameDetails,
  filterGames,
  sortGames,
}) => {
  React.useEffect(() => {
    fetchGames();
  }, []);

  const filterOptions = allFilterTags.map((filter: string) => ({
    label: filter,
    value: filter,
  }));
  const dropDownOptions = [{ label: 'Default', value: 'default' }, 
  { label: 'Name (A to Z)', value: 'alpha' }, { label: 'Name (Z to A)', value: 'reverse' }];

  return (
    <div id="grid-container">
      <LargeHeader text="Browse" />
      <NavMenu
        menuItems={['Games', 'Live Channels']}
        defaultItem="Games"
        isBolded={true}
      />
      <div className="filter-sort-bar">
        <FilterBar filterOptions={filterOptions} handleChange={filterGames} />
        <SortDropDown dropDownOptions={dropDownOptions} handleChange={sortGames} />
      </div>
      {isLoadingGames ? (
        <LoadingSpinner />
        ) : (
          <Grid
            listData={gamesList}
            renderCard={(itemData: IGame, key: string) => (
              <GameCard
                key={key}
                itemData={itemData}
                handleClick={() => showGameDetails(itemData)}
              />
            )}
          />
      )}
    </div>
  );
};

const mapStateToProps = (store: IStore) => ({
  gamesList: store.games.visibleGamesList,
  allFilterTags: store.games.allFilterTags,
  isLoadingGames: store.games.isLoadingGames,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchGames: () => dispatch(fetchGames()),
  showGameDetails: (gameDetails: any) => dispatch(showGameDetails(gameDetails)),
  filterGames: (filterTags: ILabelValue[]) => dispatch(filterGames(filterTags)),
  sortGames: (sortKey: string) => dispatch(sortGames(sortKey)),
});

export const GameListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameList);
