import React, { useState } from "react";

function UpdateArray() {
  let [food, setFood] = useState(["Apple", "Orange", "Banana", "Mango"]);

  function handleAddFood() {
    const newFood = document.getElementById("food_in").value;
    document.getElementById("food_in").value = "";

    setFood((f) => [...f, newFood]);
  }

  function handleRemoveFood() {
    const removeFood = document.getElementById("food_in").value;
    document.getElementById("food_in").value = "";

    setFood(food.filter((element, i) => element != removeFood));
  }

  return (
    <div className="food">
      <h1>List Of Food</h1>
      <ul className="list">
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <input
        className="food_in"
        type="text"
        placeholder="Enter food name"
        name=""
        id="food_in"
      />
      <div className="food_btn">
        <button id="" className="btn1" onClick={handleAddFood}>
          Add Food
        </button>
        <button className="btn2" onClick={handleRemoveFood}>
          Remove Food
        </button>
      </div>
    </div>
  );
}

export default UpdateArray;
