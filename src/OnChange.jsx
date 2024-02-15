// onChange = event handler used primarily with the form elements ex. <input>, <textarea>, <select>, <radio>
//Triggers a function evey time the value of the input changes

import React, { useState } from "react";

function OnChange() {
  let [name, setName] = useState("Guest");
  let [quantity, setQuantity] = useState(1);
  let [comment, setComment] = useState("");
  let [card, setCard] = useState();
  let [shipping, setShipping] = useState();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handleSelect(event) {
    setCard(event.target.value);
  }

  function handleShipping(event){
    setShipping(event.target.value)
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleName} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantity} />
      <p>Quantity: {quantity}</p>
      <textarea onChange={handleComment} cols="30" rows="5"></textarea>
      <p>Comment: {comment}</p>
      <select onChange={handleSelect} name="" id="" >
        <option value="Select an option">Select an option</option>
        <option value="MasterCard">Mastercard</option>
        <option value="Visa">Visa</option>
        <option value="Rupay">Rupay</option>
      </select>
      <p>Card: {card}</p>
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onClick={handleShipping} name="" id="" />
        Pick Up
      </label>
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onClick={handleShipping} name="" id="" />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default OnChange;
