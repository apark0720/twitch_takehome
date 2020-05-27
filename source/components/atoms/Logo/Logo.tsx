import * as React from 'react';
import './Logo.scss';

interface IProps {
  src: string;
}

export const Logo: React.FC<IProps> = ({ src }) => <img id="logo" src={src} />;
