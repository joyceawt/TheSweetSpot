import React from "react";

export const Select = ({
  selectOptions,
  filterSelect,
  setFilterText,
  selectedOption,
  defaultFilterValue,
}) => {
  const handleChange = (e) => {
    setFilterText(e.target.value);
    filterSelect(e.target.value);
  };

  return (
    <select
      className="form-select bg-light"
      aria-label="Filter By Drink Name"
      onChange={handleChange}
      defaultValue={selectedOption}
    >
      <option>{defaultFilterValue}</option>
      {selectOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
