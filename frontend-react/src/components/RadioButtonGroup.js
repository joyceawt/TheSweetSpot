import React from "react";
import RadioButton from "./RadioButton";

export const RadioButtonGroup = ({
  label,
  labelFor,
  setSelectedOption,
  radioOptions,
  groupName,
  selectedOption,
}) => {
  return (
    <div className="radio-button-group mb-3 pt-2">
      <label
        htmlFor={labelFor}
        className="col-form-label w-25"
        onChange={setSelectedOption}
      >
        {label}
      </label>
      <div id={labelFor} className="btn-group">
        {radioOptions.map((option, i) => (
          <RadioButton
            name={groupName}
            value={option.value}
            id={option.id}
            key={i}
            label={option.label}
            selectedOption={selectedOption}
            setSelectedOption={(value) => setSelectedOption(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
