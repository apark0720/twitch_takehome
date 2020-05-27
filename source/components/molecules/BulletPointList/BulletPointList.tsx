import * as React from 'react';
import './BulletPointList.scss';

interface IProps {
  listItems: string[];
}

export const BulletPointList: React.FC<IProps> = ({ listItems }) => {
  const listItemsJSX = listItems.map((listItem: string, i: number) => (
    <li className="bullet-point" key={`${i}-${listItem}`}>
      <span className={listItem === 'none' ? 'italics' : ''}>{listItem}</span>
    </li>
  ));
  return <ul className="bullets">{listItemsJSX}</ul>;
};
