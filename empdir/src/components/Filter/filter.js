import React from "react";
// import "./style.css";

function Filter(props) {
  return (
<form>
  <div className="form-group row">
    <label for="filter" className="col-form-label">Filter By: </label>
      <select className="form-control col-5 ml-2" id="filter">
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