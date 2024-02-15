//Updater Function = A function passed as an argument to the setState() usually
//                   ex. setYear(arrow function) like setYear(y => y = 2024)
//                   Allow safe updates based on the previous state.
//                   Used with multiple state updates and asynchronous functions.
//                   Good practice to use updater function.


import React, {useState} from "react";

function UpdaterFunction() {
  let [count, setCount] = useState(0);

  const increament = () => {

    // Uses the current to calculate the Next state
    // set function do not trigger an update
    // React batches together states updates for performance reason
    // Next state becomes the current state after an Update
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    //Above statements only upadates once  because of batch operation so we use updater function


    //Here's how Updater Function works
    // Takes the PENDING state to calculate the NEXT state
    // React puts your Updated Function in a queue (waits in a line)
    // During the next render, React will call then in the same order
    setCount(c => c + 1); //Naming convention is use "prevCount" or first letter of word like count so "c"
    setCount(c => c + 1);
    setCount(c => c + 1);
1
  }
  const decreament = () => {
    if (count > 0) setCount(c => c - 1);
  };
  const reset = () => setCount(c => c  = 0);

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

export default UpdaterFunction;
