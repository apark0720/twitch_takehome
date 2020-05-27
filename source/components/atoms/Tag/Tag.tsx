import * as React from 'react';
import './Tag.scss';

interface IProps {
  text: string;
}

export const Tag: React.FC<IProps> = ({ text }) => (
  <div className="tag">
    <p id="tag-text">{text}</p>
  </div>
);
