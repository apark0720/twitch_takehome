import * as React from 'react';
import { NavMenuItem } from 'ventura/components/atoms/NavMenuItem/NavMenuItem';
import './NavMenu.scss';

interface IProps {
  renderLogo?: () => React.ReactElement;
  menuItems: string[];
  defaultItem: string;
  isBolded?: boolean;
  renderLoadMore?: () => React.ReactElement;
}

export const NavMenu: React.FC<IProps> = ({
  renderLogo = () => false,
  menuItems,
  defaultItem,
  isBolded,
  renderLoadMore = () => false,
}) => {
  const [selectedItem, setSelectedItem] = React.useState(defaultItem);
  const menuItemsJSX = menuItems.map((menuItem: string, i: number) => (
    <NavMenuItem
      key={`${i}-${menuItem}`}
      text={menuItem}
      onClick={() => setSelectedItem(menuItem)}
      currentItem={selectedItem}
    />
  ));

  return (
    <div id={isBolded ? 'nav-menu-bolded' : 'nav-menu'}>
      {renderLogo()}
      {menuItemsJSX}
      {renderLoadMore()}
    </div>
  );
};
