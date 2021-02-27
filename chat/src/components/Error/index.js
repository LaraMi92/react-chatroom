// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Error = ({ error }) => (
  <div className="error">
    {error}
  </div>
);

Error.propTypes = {
  error: PropTypes.string,
};

// == Export
export default Error;
