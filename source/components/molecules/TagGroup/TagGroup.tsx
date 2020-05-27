import * as React from 'react';
import './TagGroup.scss';

interface IProps {
  children: React.ReactNode;
}

export const TagGroup: React.FC<IProps> = ({ children }) => (
  <div id="tags-container">{children}</div>
);
