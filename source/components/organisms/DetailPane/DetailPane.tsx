import * as React from 'react';
import './DetailPane.scss';

interface IProps {
  children: React.ReactNode;
  hasSelectedGame: boolean;
}

export const DetailPane: React.FC<IProps> = ({ children, hasSelectedGame }) => {
  return (
    <div id={hasSelectedGame ? 'detail-pane' : 'detail-pane-collapsed'}>
      {children}
    </div>
  );
};
