import React from 'react';
import './InputForm.styles.scss';

const InputForm = ({ label, ...otherProps }) => {
    return (
        <div className="form-input-container">
            <label className="name-label"> {label}</label>
            <input className="form-input" {...otherProps} />
        </div>
    );
};

export default InputForm;
