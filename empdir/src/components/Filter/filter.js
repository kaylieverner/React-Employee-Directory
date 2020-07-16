import React from "react";
import "./style.css";

function Filter(props) {
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
        <option>Office</option>
        <option>Department</option>
        <option>Role</option>
      </select>
    </div>
</form>

  );
}

export default Filter;