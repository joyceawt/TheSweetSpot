import React from "react";

export const Select = ({ selectOptions }) => {
  return (
    <select
      className="form-select bg-light"
      aria-label="Default select example"
    >
      <option disabled selected hidden>
        Filter By Drink Name{" "}
      </option>
      {selectOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
