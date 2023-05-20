import React from "react";

export const Select = ({
  selectOptions,
  filterSelect = null,
  setFilterText = null,
  selectedOption,
  defaultFilterValue,
  className = "form-select bg-light",
  ariaLabel = null,
  optionValue = null,
  onChangeHandler = null,
  optionDisplay = null,
  id,
  name,
}) => {
  const handleChange = (e) => {
    if (onChangeHandler != null) {
      onChangeHandler(e.target.value);
    } else {
      setFilterText(e.target.value);
      filterSelect(e.target.value);
    }
  };

  return (
    <div className="pe-3">
      <select
        className={className}
        aria-label={ariaLabel}
        onChange={handleChange}
        defaultValue={selectedOption}
        placeholder={defaultFilterValue}
        id={id}
        name={name}
      >
        {defaultFilterValue ? <option>{defaultFilterValue}</option> : ""}
        {selectOptions.map((option, i) => (
          <option key={i} value={optionValue ? option[optionValue] : option}>
            {optionDisplay ? option[optionDisplay] : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
