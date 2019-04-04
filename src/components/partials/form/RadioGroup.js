import React from 'react';
import {Radio as AntdRadio} from "antd";

function RadioGroup(props) {
  return (
    <AntdRadio.Group {...props} />
  );
}

export default RadioGroup;