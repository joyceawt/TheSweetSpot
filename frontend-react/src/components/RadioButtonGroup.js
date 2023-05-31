import React from "react";
import RadioButton from "./RadioButton";
import Form from "react-bootstrap/form";

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
    <Form.Group className="radio-button-group mb-3 pt-2" controlId={groupID}>
      <Form.Label className="col-form-label w-25" onChange={setSelectedOption}>
        {label}
      </Form.Label>
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
    </Form.Group>
  );
};

export default RadioButtonGroup;
