import React from "react";
import './MilshakeCard.css'

export const MilshakeCard = (props) => {
    const milshake=props.milshake
  return (
    <div className="milshake-card">
      <h3>{milshake.name}</h3>
      <p>{milshake.description}</p>
      <span>{milshake.price}</span>
      <button>Add</button>
    </div>
  );
};