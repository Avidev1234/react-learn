import React, { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("inner", count);
  };

  console.log("outer", count);

  return (
    <>
      <h2>
        <strong>UseState Hooks</strong>!
      </h2>
      <br />
      <p>{count}</p>
      <button
        onClick={handleClick}
        className=""
        style={{ background: "grey", padding: "10px" }}
      >
        Increment
      </button>
    </>
  );
}

export default Index;
