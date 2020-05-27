import * as React from "react";
import { Label } from "ventura/components/atoms/Label/Label";
import { ILabelValue, SortGames } from "ventura/pages/Browse/modules/types";

interface IProps {
  dropDownOptions: ILabelValue[];
  handleChange: (sortKey: string) => SortGames;
}

export const SortDropDown: React.FC<IProps> = ({
  dropDownOptions,
  handleChange
}) => {
  const dropDownOptionsJSX = dropDownOptions.map(
    (dropDownOption: ILabelValue, i: number) => {
      return (
        <option
          key={`${i}-${dropDownOption.value}`}
          value={dropDownOption.value}
        >
          {dropDownOption.label}
        </option>
      );
    }
  );

  return (
    <div className="dropdown-container">
      <Label text="Sort by" />
      <div className="dropdown">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            handleChange(e.target.value);
          }}
        >
          {dropDownOptionsJSX}
        </select>
      </div>
    </div>
  );
};
