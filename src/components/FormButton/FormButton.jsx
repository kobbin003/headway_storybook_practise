import React from "react";

const FormButton = ({ handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className="submit">
      Submit
    </button>
  );
};

export default FormButton;
