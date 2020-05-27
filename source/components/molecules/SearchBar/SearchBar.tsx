import * as React from 'react';
import './SearchBar.scss';

interface IProps {
  performSearch: (searchQuery: string) => any;
}

export const SearchBar: React.FC<IProps> = ({ performSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    performSearch(searchQuery);
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path
              fillRule="evenodd"
              d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};
