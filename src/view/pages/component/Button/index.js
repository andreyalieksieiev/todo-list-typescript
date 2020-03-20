import React from 'react';

import { func, string } from 'prop-types';

export const Button = ({onClick,  name}) => {
  return(
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  onClick: func.isRequired,
  name: string.isRequired
};
    
  