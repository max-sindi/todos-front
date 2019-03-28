import React from 'react'
import PropTypes from 'prop-types'
import {Input as AntdInput} from "antd"


Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

function Input(props) {
  return (
   <AntdInput {...props} />
  );
}

export default Input;