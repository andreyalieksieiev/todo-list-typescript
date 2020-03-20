import React from 'react';

import { func, string, boolean } from 'prop-types';

export const Input = ({onChange, value, type, id}) => {
  return (
    <input 
      onChange={onChange} 
      value={value} 
      type={type} 
      id={id} 
    />
  );
};

Input.propsTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  type: string.isRequired,
  id: string.isRequired,
  complete: boolean
};