import React from 'react';

const Label = ({label, forHtml}) => {
  return (
    <label htmlFor={forHtml}>{label}</label>
  );
};

export default Label;
