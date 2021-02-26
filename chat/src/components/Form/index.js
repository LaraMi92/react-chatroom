// == Import npm
import React from 'react';

// == Local Imports
import './form.scss';
import airplane from 'src/assets/airplane.png';

// == Composant
const Form = ({
  handleChange, inputValue, submitForm,
}) => (
  <div className="form">
    <form
      onSubmit={submitForm}
    >
      <div className="form--all">
        <input
          className="form--input"
          onChange={(event) => {
            handleChange(event);
          }}
          value={inputValue}
        />
        <img src={airplane} className="form--button" onClick={submitForm} alt="plane icon" />
      </div>
    </form>
  </div>
);

// == Export
export default Form;
