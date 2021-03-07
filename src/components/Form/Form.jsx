import React from "react";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <div className="form">
      <FormInput inputValue={inputValue} setInputValue={setInputValue} />
      <FormButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
