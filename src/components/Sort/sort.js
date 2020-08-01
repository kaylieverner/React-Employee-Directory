import React from "react";
import "./style.css";

class Sort extends React.Component {

  runSortAsc = () => {
    this.props.runSortAsc()
  }
 
  render(){
    return (
      <form>
        <div className="form-group row">
          <label for="filter" className="form-label col">Sort By:</label>
            <select onChange={this.runSortAsc} className="form-control col" id="filter">
              <option>Select...</option>
              <option onChange={this.runSortAsc}>Name</option>
              {/* <option>Office</option>
              <option>Department</option>
              <option>Role</option> */}
            </select>
          </div>
      </form>
        );
    }
};

export default Sort;