import * as React from 'react';
import './BrowsePageLayout.scss';

interface IProps {
  children: React.ReactNode;
  style: string;
}

export const BrowsePageLayout: React.FC<IProps> = ({ children, style }) => (
  <main id={style}>{children}</main>
);
