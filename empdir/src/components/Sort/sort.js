import React from "react";
import "./style.css";

class Sort extends React.Component {

  sortAscending = (props) => {
    props.sortAscending()
  }
 
  render(){
    return (
      <form>
        <div className="form-group row">
          <label for="filter" className="form-label col">Sort By:</label>
            <select className="form-control col" id="filter">
              <option>Select</option>
              <option onChange={this.sortAscending}>Name</option>
              <option>Office</option>
              <option>Department</option>
              <option>Role</option>
            </select>
          </div>
      </form>
        );
    }
};

export default Sort;