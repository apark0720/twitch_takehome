import * as React from 'react';
import { SmallHeader } from 'ventura/components/atoms/Headers/SmallHeader';
import { SquareIcon } from 'ventura/components/atoms/SquareIcon/SquareIcon';
import { IGame, ShowGameDetails } from 'ventura/pages/Browse/modules/types';
import './Card.scss';

interface IProps {
  itemData: IGame;
  handleClick: () => ShowGameDetails;
  selectedGameName: string;
  renderTagGroup: () => React.ReactElement;
}

export const Card: React.FC<IProps> = ({
  itemData,
  handleClick,
  selectedGameName,
  renderTagGroup,
}) => (
  <div
    className={
      selectedGameName === itemData.name ? 'game-card-selected' : 'game-card'
    }
    onClick={handleClick}
  >
    <SquareIcon src={itemData.icon} />
    <div className="text-box">
      <SmallHeader text={itemData.name} />
      {renderTagGroup()}
    </div>
  </div>
);
