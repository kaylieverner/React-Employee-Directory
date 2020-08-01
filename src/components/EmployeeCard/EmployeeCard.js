import React from "react";
import "./style.css";

class EmployeeCard extends React.Component {

  render() {
  return (
<div className="col">
<div className="media mb-3">
  <img className="m-3 imageDiv" src={this.props.image} alt="profile"/>
  <div className="media-body">
    <h5 className="mt-1">{this.props.name}</h5>
    <ul>
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
</div>
</div>
  );
  }
}

export default EmployeeCard;

 
  // <div className="col-4">
  //   <div className="card">
  //     <div className="img-container">
  //       <img alt={this.props.name} src={this.props.image} />
  //     </div>
  //     <div className="content">
  //       <ul>
  //         <li>
  //           <strong>Name:</strong> {this.props.name}
  //         </li>
  //         <li>
  //           <strong>Email:</strong> {this.props.email}
  //         </li>
  //         <li>
  //           <strong>Role:</strong> {this.props.role}
  //         </li>
  //         <li>
  //           <strong>Department:</strong> {this.props.department}
  //         </li>
  //         <li>
  //           <strong>Office:</strong> {this.props.office}
  //         </li>
  //       </ul>
  //     </div>
  //     <span 
  //     // onClick={() => this.removeEmployee(this.props.id)} 
  //     className="remove">
  //       𝘅
  //     </span>
  //   </div>
  //   </div>