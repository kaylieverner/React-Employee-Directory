import React from "react";
import "./style.css";

class EmployeeCard extends React.Component {

  // removeEmployee = () => {
  //   this.props.removeEmployee()
  // }

  render() {
  return (
  <div className="col-4">
    <div className="card">
      <div className="img-container">
        <img alt={this.props.name} src={this.props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {this.props.name}
          </li>
          <li>
            <strong>Email:</strong> {this.props.email}
          </li>
          <li>
            <strong>Role:</strong> {this.props.role}
          </li>
          <li>
            <strong>Department:</strong> {this.props.department}
          </li>
          <li>
            <strong>Office:</strong> {this.props.office}
          </li>
        </ul>
      </div>
      <span 
      // onClick={() => this.removeEmployee(this.props.id)} 
      className="remove">
        𝘅
      </span>
    </div>
    </div>
   
  );
  }
}

export default EmployeeCard;