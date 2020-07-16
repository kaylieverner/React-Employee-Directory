import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Employee from "./components/pages/Employee";
import Department from "./components/pages/Department";
import Office from "./components/pages/Office";
import Dropdown from "./components/Filter/filter";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Employee} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/office" component={Office} />
      </div>
    </Router>
  );
}

export default App;
