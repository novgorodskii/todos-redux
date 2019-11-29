import React from 'react';

import FilterLink from './FilterLink';
import { AccessAlarm } from '@material-ui/icons';

const Filter = (props) => {
  return(
    <div className="filter">
      <FilterLink
        icon={AccessAlarm}
        active={props.activveFilter === "ALL"}
        onClick={() => props.onSetFilter("ALL")}
      />

      <FilterLink
        icon={AccessAlarm}
        active={props.activveFilter === "COMPLETED"}
        onClick={() => props.onSetFilter("COMPLETED")}
      />

      <FilterLink
        icon={AccessAlarm}
        active={props.activveFilter === "UNCOMPLETED"}
        onClick={() => props.onSetFilter("UNCOMPLETED")}
      />
    </div>  
  );
};
export default Filter;