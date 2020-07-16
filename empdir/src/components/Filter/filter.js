import React from "react";
import "./style.css";
// import FilterOption from "../FilterOption/filterOption";

function Dropdown(props) {

  
  return (
<form>
  <div className="form-group row">
    <label for="filter" className="form-label col">Filter By:</label>
      <select className="form-control col" id="filter">
        <option>Name</option>
        <option>Office</option>
        <option>Department</option>
        <option>Role</option>
      </select>

      <select className="form-control col" id="filter">
      <option>Name</option>
      </select>
    </div>
</form>

  );
  
}

export default Dropdown;