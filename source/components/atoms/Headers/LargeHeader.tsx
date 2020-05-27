import * as React from 'react';
import './LargeHeader.scss';

interface IProps {
  text: string;
}

export const LargeHeader: React.FC<IProps> = ({ text }) => (
  <h1 id="large-header">{text}</h1>
);
