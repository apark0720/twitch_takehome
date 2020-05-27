import * as React from 'react';
import './SquareIcon.scss';

interface IProps {
  src: string;
}

export const SquareIcon: React.FC<IProps> = ({ src }) => (
  <img id="game-img" src={src} />
);
