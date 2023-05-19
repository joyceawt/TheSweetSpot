import React from "react";
import RadioButton from "./RadioButton";

export const RadioButtonGroup = ({
  label,
  groupID,
  setSelectedOption,
  radioOptions,
  groupName,
  selectedOption,
  uniqueID = "",
}) => {
  const radioButtonID = (option) => {
    return uniqueID
      ? `${groupName}-${option.id}-${uniqueID}`
      : `${groupName}-${option.id}`;
  };
  return (
    <div className="radio-button-group mb-3 pt-2">
      <p className="col-form-label w-25" onChange={setSelectedOption}>
        {label}
      </p>
      <div role="radio-group" id={groupID} className="btn-group">
        {radioOptions.map((option, i) => (
          <RadioButton
            name={groupName + uniqueID}
            value={option.value}
            id={radioButtonID(option)}
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
