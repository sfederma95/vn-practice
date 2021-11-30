import React from 'react';

function Choice({value}) {
  return (
    <input className='choices' type='button' value={value}/>
  );
}

export default Choice;
