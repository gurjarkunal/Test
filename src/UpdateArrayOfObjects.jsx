import React, { useState } from "react";

function UpdateArrayOfObjects() {
  let [car, setCar] = useState([]);
  let [year, setYear] = useState(new Date().getFullYear());
  let [maker, setMaker] = useState("");
  let [model, setModel] = useState("");

  function handleAddCar() {
    const newCar = {
        year: year,
        maker: maker,
        model: model
    }

    setCar(c => [...c, newCar])
    setYear(new Date().getFullYear())
    setMaker("")
    setModel("")
  }

  function handleRemoveCar(index) {
    setCar(c => c.filter((_, i) => i !== index)) //We can use "_" sign instead of the unused or ignored paramter
  }

  function handleYearChange(event) {
    setYear(event.target.value)
  }

  function handleMakerChange(event) {
    setMaker(event.target.value)
  }

  function handleModelChange(event) {
    setModel(event.target.value)
  }

  return (
    <div className="carInfo">
      <h1 className="car_heading">List Of Cars</h1>
      <ul>
        {car.map((car, index) => (
          <li className="car_details" key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.maker} {car.model}
          </li>
        ))}
      </ul>
      <input
        className="car_in"
        type="Number"
        value={year}
        onChange={handleYearChange}
        id="year"
      />
      <input
        className="car_in"
        type="text"
        value={maker}
        onChange={handleMakerChange}
        id="maker"
        placeholder="Enter car maker"
      />
      <input
        className="car_in"
        type="text"
        value={model}
        onChange={handleModelChange}
        id="model"
        placeholder="Enter car model"
      />
      <button onClick={handleAddCar} className="btn_car">
        Add Car
      </button>
    </div>
  );
}

export default UpdateArrayOfObjects;
