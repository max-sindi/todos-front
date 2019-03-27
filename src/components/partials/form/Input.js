import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

function Input(props) {
  return (
   <input {...props} />
  );
}

export default Input;