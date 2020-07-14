import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Button from "../Button/button";
import Filter from "../Filter/filter";
import employees from "../../employees.json";
import Wrapper from "../Wrapper";

class Employee extends React.Component{

  state = {
    employees: employees
  };

  render() {
    return (
    <Wrapper>
    <div>
      <div className="row">
        <div className="col"><Button></Button></div>
        <div className="col"><Filter></Filter></div>
      </div>
      <div className="row">
        {this.state.employees.map((employee) => (<EmployeeCard 
        id={employee.index} 
        name={employee.name} 
        email={employee.email}
        image={employee.image} 
        role={employee.role} 
        department={employee.department} 
        office={employee.office}></EmployeeCard>))}
      </div> 
    </div>
    </Wrapper>
    )
  }
}

export default Employee;
