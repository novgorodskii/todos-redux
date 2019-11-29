import React from 'react';

const FilterLink = (props) => {
  return(
    <div className={props.active ? "active-icon" : ''} onClick={props.onClick} >
      {props.icon}
    </div>  
  );
};
export default FilterLink;