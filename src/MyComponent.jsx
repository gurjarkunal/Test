import React, { useState } from "react";

//Rect Hook = Special Function that allows functional components to use React features without writing class and components (React v16.8) (useState, useEffect, useContext, useReducerm useCallback, and more)

//useState() = A React Hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM. [name, setName]

function MyComponent() {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(0);
  let [isEmployed, setEmploye] = useState(false);

  const updateName = () => setName("Kunal");

  const updateAge = () => setAge(age + 1);

  const toggleEmployedState = () => setEmploye(!isEmployed);

  return (
    <>
      <p>Name: {name}</p>
      <button className="btn_name" onClick={updateName}>
        Set Name
      </button>

      <p>Age: {age}</p>
      <button className="btn_name" onClick={updateAge}>
        Set Age
      </button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button className="btn_name" onClick={toggleEmployedState}>
        Toggle State
      </button>
    </>
  );
}

export default MyComponent;
