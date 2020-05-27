import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { IGame } from 'ventura/pages/Browse/modules/types';

interface IRowProps {
  index: number;
  data: any;
  style: any;
}
interface IProps {
  listData: IGame[];
  renderCard: (itemData: IGame, key: string) => React.ReactElement;
}

const CARD_SIZE = 128;

const Row: React.FC<IRowProps> = ({ index, data, style }) => {
  const { listData, itemsPerRow, renderCard } = data;
  const items = [];
  const fromIndex = index * itemsPerRow;
  const toIndex = Math.min(fromIndex + itemsPerRow, listData.length);

  for (let i = fromIndex; i < toIndex; i++) {
    let itemData = listData[i];
    items.push(renderCard(itemData, `${i}-${itemData}`));
  }

  return (
    <div
      id="row"
      style={{ ...style, display: 'flex', justifyContent: 'space-around' }}
    >
      {items}
    </div>
  );
};

export const Grid: React.FC<IProps> = ({ listData, renderCard }) => (
  <AutoSizer>
    {({ height, width }) => {
      const itemsPerRow = Math.floor(width / (CARD_SIZE + 150)) || 1;
      const rowCount = Math.ceil(listData.length / itemsPerRow);
      const data = { listData, itemsPerRow, renderCard };
      return (
        <FixedSizeList
          height={height}
          itemData={data}
          itemCount={rowCount}
          itemSize={CARD_SIZE}
          width={width}
        >
          {Row}
        </FixedSizeList>
      );
    }}
  </AutoSizer>
);
