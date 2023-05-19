import React from "react";

export const RadioButton = ({
  label,
  name,
  value,
  id,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <>
      <input
        className="btn-check"
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={value == selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      />
      <label
        id={`${id}-label`}
        className="btn btn-outline-primary"
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
};

export default RadioButton;
