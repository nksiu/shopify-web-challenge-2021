import React from "react";

const Nomination = ({nomination}) => {

  return (
    <li className="list-group-item">
      <p>{nomination.Title} ({nomination.Year})</p>
    </li>
  )
}

export default Nomination;
