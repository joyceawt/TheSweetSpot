import React from "react";

export const RadioButton = ({ label, labelFor, name, value, id, checked }) => {
  return (
    <div className="btn-group">
      <input
        className="btn-check"
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={checked}
      />
      <label className="btn btn-outline-primary" htmlFor={labelFor}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
