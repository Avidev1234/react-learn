import { useState } from "react";
import "./Hooks.css";

export const ShortCircuit = () => {
  const [isLoggedIn, setIsLoogedIn] = useState(true);
  const [data,setData]=useState("")
//   const [data,setData]=useState(false)
  return (
    <section>
      <h2>Welcome to short ShortCircuit</h2>

      {isLoggedIn && <p>You are loggedIn</p>}
      {/* {data && <p>Avidev !!</p>} */}
      {data ? `Hello ${data}`: "Plz login"}


      <div className="grid-three-cols">
        <button onClick={() => setIsLoogedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={()=>setData("Avidev !!")}>Set Users</button>
        <button onClick={()=>setData("")}>Clear Users</button>
      </div>
    </section>
  );
};
