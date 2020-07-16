import React, {Component} from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
// import Button from "../Button/button";
import Filter from "../Filter/filter";
import Sort from "../Sort/sort"
import employees from "../../employees.json";
import Wrapper from "../Wrapper";

class Employee extends Component{

  state = {
    employees,
    employeesAsc: []
  };

  sortAsc = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  
  runSortAsc = () => {
    // this.state.employeesAsc = this.state.employees.sort(this.sortAsc);
    this.setState({employees: this.state.employees.sort(this.sortAsc)})
  }

  // removeEmployee = id => {
  //   const employees = this.state.employees.filter(employee => employee.id !== id);
  //   this.setState({ employees })
  //   // console.log(this.state.employees.id);
  //   // this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
  // };
  

  render() {
    return (
    <Wrapper>
    <div>
      <div className="row">
        <div className="col">
          {/* <Button></Button> */}
        </div>
        <div className="col">
          <Sort employees={this.state.employees} runSortAsc={this.runSortAsc}></Sort>
        </div>
        <div className="col">
          <Filter></Filter>
        </div>
      </div>
      <div className="row ml-5">
        {this.state.employees.map(employee => (
        <EmployeeCard 
        // removeEmployee={this.removeEmployee}
        key={employee.id} 
        id={employee.id}
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
