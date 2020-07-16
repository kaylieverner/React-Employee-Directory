import React from "react";

class FilterOption extends React.Component {

  render() {
  return (
    <option>{this.props.name}</option>
  );
  }
}

export default FilterOption;