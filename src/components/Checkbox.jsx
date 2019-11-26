import React from 'react';


const Checkbox = ({status}) => {
  return (
    <div className={status ? "active-checkbox" : ''}></div>
  );
};

export default Checkbox;