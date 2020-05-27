import * as React from 'react';
import './LoadMore.scss';

export const LoadMore: React.FC = () => {
  return (
    <div id="load-more">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
        <g>
          <path d="M2 10a2 2 0 114 0 2 2 0 01-4 0zM8 10a2 2 0 114 0 2 2 0 01-4 0zM16 8a2 2 0 100 4 2 2 0 000-4z" />
        </g>
      </svg>
    </div>
  );
};
