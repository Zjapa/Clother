import React from 'react';
import './InputForm.styles.scss';

const InputForm = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <input className="form-input" {...otherProps} />
      <label className="name-label"> {label}</label>
    </div>
  );
};

export default InputForm;
