import React from "react";
import { MilshakeCard } from "./MilshakeCard";
import milshakes from "../assets/milshakes.json";
export const MilshakeContainer = () => {
  return (
    <div className="milshake-container">
      <div className="milshake-container-cards">
        {
            milshakes.map((milshake)=>{
                return <MilshakeCard milshake={milshake} key={milshake.id}/>
            })
        }
      </div>
    </div>
  );
};