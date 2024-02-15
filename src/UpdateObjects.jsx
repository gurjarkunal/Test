import React, { useState } from "react";

function UpdateObject() {
  let [car, setCar] = useState({
    year: 2024,
    maker: "Ford",
    model: "Mustang",
  });

  function handleYear(event){
    setCar(c => ({...c, year: event.target.value}))
  }

  function handleMaker(event){
    setCar(c => ({...c, maker: event.target.value}))
  }

  function handleModel(event){
    setCar(c => ({...c, model: event.target.value}))
  }
  return(
    <div className="carInfo">
        <p>Your Favorite Car is: {car.year} {car.maker} {car.model}</p>
        <input type="number" onChange={handleYear} value={car.year} name="" id="" />
        <input type="text" onChange={handleMaker} value={car.maker} name="" id="" />
        <input type="text" onChange={handleModel} value={car.model} name="" id="" />
    </div>
  )
}

export default UpdateObject;
