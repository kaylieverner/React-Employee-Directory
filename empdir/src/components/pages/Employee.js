import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Button from "../Button/button";
import Filter from "../Filter/filter";
import Sort from "../Sort/sort"
import employees from "../../employees.json";
import Wrapper from "../Wrapper";

class Employee extends React.Component{

  state = {
    employees: employees,
    employeesAsc: []
  };

  sortAscending = () => {
    this.state.employees.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
    this.setState({ employees })
    console.log("sorted");
  }

  render() {
    return (
    <Wrapper>
    <div>
      <div className="row">
        <div className="col">
          <Button></Button>
        </div>
        <div className="col">
          <Sort employees={this.state.employees} sortAscending={this.sortAscending}></Sort>
        </div>
        <div className="col">
          <Filter></Filter>
        </div>
      </div>
      <div className="row ml-5">
        {this.state.employees.map((employee) => (<EmployeeCard 
        key={employee.index} 
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
