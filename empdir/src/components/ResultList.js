import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.index}>
          <img alt={result.search} className="img-fluid" src={result} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
