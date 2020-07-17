import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Filter from "../Filter/filter";
import Sort from "../Sort/sort"
import employees from "../../employees.json";
import Wrapper from "../Wrapper";

class Employee extends React.Component{
  state = {
    employees: employees,
    employeeNames: [], 
    selectedEmployee: "", 
    filteredArr: []
  };

  //Sort Functionality 
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

  //Filter Functionality 
  //populates dropdown list
  getNames = () => {
    let names = employees.map(employee => employee.name); 
    this.setState({employeeNames: names});
  }

  setSelectedEmployee = (event) => {
    this.getNames();
    this.setState({selectedEmployee: event.target.value});
    console.log(event.target.value);
    const filteredEmployee = this.state.employees.filter(employee => 
      employee.name === event.target.value
      );
      console.log(filteredEmployee);
    this.setState({filteredArr: filteredEmployee});
  }

  //conditional rendering based on if an option from the filter dropdown was selected 
  renderEmployeeCards = () => {
    if (this.state.filteredArr.length !== 0) {
      return this.state.filteredArr.map(employee => (
        <EmployeeCard
          key={employee.id} 
          id={employee.id}
          name={employee.name} 
          email={employee.email}
          image={employee.image} 
          role={employee.role} 
          department={employee.department} 
          office={employee.office}></EmployeeCard>
      ))
    } else {
      return this.state.employees.map(employee => (
        <EmployeeCard 
        // removeEmployee={this.removeEmployee}
        key={employee.id} 
        id={employee.id}
        name={employee.name} 
        email={employee.email}
        image={employee.image} 
        role={employee.role} 
        department={employee.department} 
        office={employee.office}></EmployeeCard>))
    }
  }

  render() {
    return (
    <Wrapper>
    <div>
      <div className="row">
        <div className="col-6">
          <Sort employees={this.state.employees} runSortAsc={this.runSortAsc}></Sort>
        </div>
        <div className="col-6">
          <Filter 
          setSelectedEmployee={this.setSelectedEmployee.bind(this)}
          selectedEmployee={this.state.selectedEmployee}
          getNames={this.getNames} 
          employees={this.state.employees}
          employeeNames={this.state.employeeNames}
          ></Filter>
        </div>
      </div>
      <div className="row">
       {this.renderEmployeeCards()}
      </div> 
    </div>
    </Wrapper>
    )
  }
}

export default Employee;
