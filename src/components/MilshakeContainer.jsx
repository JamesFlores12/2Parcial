import React from "react";
import milshakes from "../../../2Parcial-1/src/assets/milshakes.json";
import { MilshakeCard } from "../../../2Parcial-1/src/components/MilshakeCard";

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
