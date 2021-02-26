import React from "react";

function FormGroup({
  inputValue = "",
  handleInputChange = console.log,
  inputName = "",
  inputId = inputName,
  labelText = "",
  inputType = "text",
}) {
  return (
    <div className="col form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <input
        className="form-control"
        type={inputType}
        value={inputValue}
        onChange={handleInputChange}
        name={inputName}
        id={inputId}
      />
    </div>
  );
}

export default FormGroup;
