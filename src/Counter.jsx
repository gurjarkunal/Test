import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  const decreament = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <p className="count_display">{count}</p>
      <button className="btn_counter" onClick={increament}>
        Increase
      </button>
      <button className="btn_counter" onClick={decreament}>
        Decrease
      </button>
      <button className="btn_counter" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
