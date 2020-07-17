import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
// import Button from "../Button/button";
import Filter from "../Filter/filter";
// import FilterOption from "../FilterOption/filterOption";
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

  // renderFilteredEmployee = () => {
  //   {this.state.filteredArr.map(employee => (
  //     <EmployeeCard
  //       key={employee.id} 
  //       id={employee.id}
  //       name={employee.name} 
  //       email={employee.email}
  //       image={employee.image} 
  //       role={employee.role} 
  //       department={employee.department} 
  //       office={employee.office}></EmployeeCard>
  //   ))}
  // };

  // renderAllEmployees = () => {
  //   {this.state.employees.map(employee => (
  //     <EmployeeCard 
  //     // removeEmployee={this.removeEmployee}
  //     key={employee.id} 
  //     id={employee.id}
  //     name={employee.name} 
  //     email={employee.email}
  //     image={employee.image} 
  //     role={employee.role} 
  //     department={employee.department} 
  //     office={employee.office}></EmployeeCard>))}
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
          <Filter 
          setSelectedEmployee={this.setSelectedEmployee.bind(this)}
          ////////
          selectedEmployee={this.state.selectedEmployee}
          getNames={this.getNames} 
          employees={this.state.employees}
          employeeNames={this.state.employeeNames}
          >
          </Filter>
        </div>
      </div>
      <div className="row ml-5">
        {/* {//if we have a selectedEmployee, search the employees for that one, and render a card for just them.

        //else, render a card for all employees } */}

       {this.renderEmployeeCards()}

        {/* {this.state.employees.map(employee => (
        <EmployeeCard 
        // removeEmployee={this.removeEmployee}
        key={employee.id} 
        id={employee.id}
        name={employee.name} 
        email={employee.email}
        image={employee.image} 
        role={employee.role} 
        department={employee.department} 
        office={employee.office}></EmployeeCard>))} */}
      </div> 
    </div>
    </Wrapper>
    )
  }
}

export default Employee;
