import * as React from 'react';
import './NavMenuItem.scss';

interface IProps {
  text: string;
  onClick: () => void;
  currentItem: string;
}

export const NavMenuItem: React.FC<IProps> = ({
  text,
  onClick,
  currentItem,
}) => {
  const containerClassName =
    currentItem === text
      ? 'nav-item-container-highlighted'
      : 'nav-item-container';
  const itemClassName =
    currentItem === text ? 'nav-menu-item-highlighted' : 'nav-menu-item';

  return (
    <div
      className={
        text === 'Browse' || text === 'Games'
          ? containerClassName
          : containerClassName + ' not-allowed'
      }
      onClick={onClick}
    >
      <p
        className={
          text === 'Browse' || text === 'Games'
            ? itemClassName
            : itemClassName + ' not-allowed'
        }
      >
        {text}
      </p>
    </div>
  );
};
