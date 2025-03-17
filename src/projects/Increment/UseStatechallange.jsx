import { useState } from "react";
import "./state.css";

export const UseStatechallange = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState(0);

  const increment = () => {
      setCount(count + values);
  };

  const decrement = () => {
    if (count <= 0) {
      setCount(count);
    } else {
      setCount(count - values);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <p>
        <strong>useState Challange</strong>
      </p>
      <div>
        <p>count : {count}</p>
        <label htmlFor="">step</label>
        <input
          type="text"
          value={values}
          onChange={(e) => setValues(Number(e.target.value))}
        />
        <div className="btn-blue">
          <button onClick={increment} disabled={count>=100}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};
