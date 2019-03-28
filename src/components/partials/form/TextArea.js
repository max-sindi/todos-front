import React from 'react'
import PropTypes from 'prop-types'
import {Input as AntdInput} from "antd"


TextArea.propTypes = {

};

function TextArea(props) {
  return (
    <AntdInput.TextArea {...props}/>
  );
}

export default TextArea;