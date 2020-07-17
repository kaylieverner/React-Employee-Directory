import React from "react";
import "./style.css";
// import FilterOption from "../FilterOption/filterOption";

function Filter(props) {
  return (
<form>
  <div className="form-group row">
    <label htmlFor="filter" className="form-label col">Filter By:</label>
    <input
          onChange={props.getNames}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Type in a name to filter"
          id="name"
        />

        <datalist id="names">
          {props.employeeNames.map(name => (
            <option value={name} key={name} name={name} onChange={props.filterByName}/>
          ))}
        </datalist>

      {/* <select className="form-control col" id="filter">
      <option>Name</option>
      </select> */}
    </div>
</form>

  );
  
}

export default Filter;