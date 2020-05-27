import * as React from 'react';
import { connect } from 'react-redux';
import { BrowsePageLayout } from 'ventura/components/templates/BrowsePageLayout/BrowsePageLayout';
import { IStore } from 'ventura/globals/types';
import { GameDetailPane } from './containers/GameDetailPane';
import { GameListContainer } from './containers/GameList';

type IReduxProps = ReturnType<typeof mapStateToProps>;

interface IProps extends IReduxProps {}

const Browse: React.FC<IProps> = ({ selectedGame }) => {
  return (
    <BrowsePageLayout
      style={selectedGame.name ? 'expanded-layout' : 'default-layout'}
    >
      <GameDetailPane />
      <GameListContainer />
    </BrowsePageLayout>
  );
};

const mapStateToProps = (store: IStore) => ({
  selectedGame: store.games.selectedGame,
});

export const BrowsePage = connect(mapStateToProps)(Browse);
