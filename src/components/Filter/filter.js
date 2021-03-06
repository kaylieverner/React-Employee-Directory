import React from "react";
import "./style.css";
// import FilterOption from "../FilterOption/filterOption";

function Filter(props) {

  return (
<form className="filterMenu">
  <div className="form-group row">
    <label htmlFor="filter" className="form-label col">Filter By:</label>
    <input className="form-control col"
          value={props.selectedEmployee}
          onChange={props.setSelectedEmployee}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Enter a Name"
          id="name"
        />

        <datalist id="names">
          {props.employeeNames.map(name => (
            <option value={name} key={name} name={name} onChange={props.filterByName}/>
          ))}
        </datalist>
    </div>
</form>  

  );
  
}

export default Filter;