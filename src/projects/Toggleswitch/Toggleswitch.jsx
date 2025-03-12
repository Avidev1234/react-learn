import { useState } from "react";
import "./Toggleswitch.css";

export const Toggleswitch = () => {
    const [isOn,setIsOn]=useState(false);
    const handleToggleSwitch =()=>{
        setIsOn(!isOn);
    }
  return (
    <label className="switch" onClick={handleToggleSwitch}>
      <input type="checkbox" />
      <div className="slider round">
      <span className="on">{isOn ? "On":"off"}</span>
      </div>
    </label>
  );
};
