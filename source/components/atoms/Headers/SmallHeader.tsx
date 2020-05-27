import * as React from 'react';
import './SmallHeader.scss';

interface IProps {
  text: string;
  isAllCaps?: boolean;
}

export const SmallHeader: React.FC<IProps> = ({ text, isAllCaps }) => {
  const id = isAllCaps ? 'small-header-all-caps' : 'small-header';
  return <strong id={id}>{text}</strong>;
};
