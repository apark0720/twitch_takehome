import * as React from 'react';
import Select from 'react-select';
import { Label } from 'ventura/components/atoms/Label/Label';
import { FilterGames, ILabelValue } from 'ventura/pages/Browse/modules/types';
import './FilterBar.scss';

interface IProps {
  filterOptions: ILabelValue[];
  handleChange: (filterTags: ILabelValue[]) => FilterGames;
}

export const FilterBar: React.FC<IProps> = ({ filterOptions, handleChange }) => {
  return (
    <div className="filter-container">
      <Label text="Filter by" />
      <Select
        className="filter"
        classNamePrefix="select"
        isMulti
        name="colors"
        options={filterOptions}
        placeholder="Select Tags"
        onChange={handleChange}
      />
    </div>
  );
};
