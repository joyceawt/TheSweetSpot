import React, { useState } from "react";

export const RadioButtonGroup = ({
  label,
  labelFor,
  onChangeHandler,
  defaultValue = null,
}) => {
  const onChangeHandler = (e) => {};

  return (
    <div className="radio-button-group mb-3 pt-2">
      <label
        htmlFor={labelFor}
        className="col-form-label w-25"
        defaultValue={defaultValue}
        onChange={onChangeHandler}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButtonGroup;
