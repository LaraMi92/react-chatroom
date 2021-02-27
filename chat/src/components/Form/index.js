// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

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

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

// == Export
export default Form;
