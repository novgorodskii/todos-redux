import React from 'react';

const FilterLink = (props) => {
  return (
    <a className={props.active ? 'is-active' : ''} onClick={props.onClick}>
        <i className="material-icons">{props.icon}</i>
    </a>
);
};
export default FilterLink;