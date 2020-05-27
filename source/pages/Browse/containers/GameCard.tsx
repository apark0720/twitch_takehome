import * as React from "react";
import { connect } from "react-redux";
import { Tag } from "ventura/components/atoms/Tag/Tag";
import { Card } from "ventura/components/molecules/Card/Card";
import { TagGroup } from "ventura/components/molecules/TagGroup/TagGroup";
import { IStore } from "ventura/globals/types";
import { IGame, ShowGameDetails } from "ventura/pages/Browse/modules/types";

type IReduxProps = ReturnType<typeof mapStateToProps>;

interface IProps extends IReduxProps {
  itemData: IGame;
  handleClick: () => ShowGameDetails;
  selectedGameName: string;
}

const GameCardModule: React.FC<IProps> = ({
  itemData,
  handleClick,
  selectedGameName
}) => (
  <Card
    itemData={itemData}
    handleClick={handleClick}
    renderTagGroup={() => (
      <TagGroup>
        {itemData.supportsAddons && <Tag text="Addons" />}
        {itemData.supportsVoice && <Tag text="Voice" />}
      </TagGroup>
    )}
    selectedGameName={selectedGameName}
  />
);

const mapStateToProps = (store: IStore) => ({
  selectedGameName: store.games.selectedGame.name
});

export const GameCard = connect(mapStateToProps)(GameCardModule);
