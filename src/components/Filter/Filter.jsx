import React from 'react';

import FilterLink from './FilterLink';

import './filter.scss';

const Filter = (props) => {
  return(
    <div className="todo-filter">
      <FilterLink
        icon="list"
        active={props.activveFilter === "ALL"}
        onClick={() => props.onSetFilter("ALL")}
      />

      <FilterLink
        icon="check_box"
        active={props.activveFilter === "COMPLETED"}
        onClick={() => props.onSetFilter("COMPLETED")}
      />

      <FilterLink
        icon="check_box_outline_blank"
        active={props.activveFilter === "UNCOMPLETED"}
        onClick={() => props.onSetFilter("UNCOMPLETED")}
      />
    </div>
  );
};
export default Filter;