import React from 'react'
import {Input as AntdInput} from "antd"


function TextArea(props) {
  return (
    <AntdInput.TextArea {...props}/>
  );
}

export default TextArea;