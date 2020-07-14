import React from "react";
import "./style.css"

function DiscoverResult(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="dog" className="img-fluid" src={props.friend} />
      </div>
      <span className="like" onClick={() => {
        props.getNewFriend();
        props.addNewFriend();
      }}>✓</span>
      <span className="dislike">𝘅</span>
    </div>
  );
}

export default DiscoverResult;
