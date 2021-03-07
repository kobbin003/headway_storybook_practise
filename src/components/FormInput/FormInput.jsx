import React from "react";

const FormInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="input"
      placeholder={"Type here..."}
    />
  );
};

export default FormInput;
