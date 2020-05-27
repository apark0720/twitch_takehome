import * as React from 'react';
import './Label.scss';

interface IProps {
  text: string;
}

export const Label: React.FC<IProps> = ({ text }) => {
  return <p className="label">{text}</p>;
};
