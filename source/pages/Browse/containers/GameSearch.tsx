import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SearchBar } from "ventura/components/molecules/SearchBar/SearchBar";
import { searchGames } from "ventura/pages/Browse/modules/actions";

type IReduxProps = ReturnType<typeof mapDispatchToProps>;

interface IProps extends IReduxProps {}

const Search: React.FC<IProps> = ({ searchGames }) => (
  <SearchBar performSearch={searchGames} />
);

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  searchGames: (searchQuery: string) => dispatch(searchGames(searchQuery))
});

export const GameSearch = connect(
  null,
  mapDispatchToProps
)(Search);
