import * as React from 'react';
import { LoadMore } from 'ventura/components/atoms/LoadMore/LoadMore';
import { Logo } from 'ventura/components/atoms/Logo/Logo';
import { NavMenu } from 'ventura/components/molecules/NavMenu/NavMenu';
import { GameSearch } from 'ventura/pages/Browse/containers/GameSearch';
import './NavBar.scss';

interface IProps {
  logoSrc: string;
  menuItems: string[];
}

export const NavBar: React.FC<IProps> = ({ logoSrc, menuItems }) => (
  <nav id="nav-bar">
    <NavMenu
      renderLogo={() => <Logo src={logoSrc} />}
      menuItems={menuItems}
      defaultItem="Browse"
      renderLoadMore={() => <LoadMore />}
    />
    <GameSearch />
  </nav>
);
