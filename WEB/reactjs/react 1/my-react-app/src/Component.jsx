// onChange = event handler used primarily with form elements
// ex. <input> <textarea> <select>, <radio>
// Triggers a function every time the value of the input changes


import {useState} from "react";

function MyComponent(){

  const[name, setName] = useState("Guest");
  const[quantity, setQuantity] = useState();
  const[comment, setComment] = useState();
  const[payment,setPayment] = useState("Visa");
  const[shipping,setShipping] = useState("Delivery");
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  }
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  }
  

  return(
      <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
        <input type="number" value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery instructions"/>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>
        <label htmlFor="">
          <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
          Pick Up</label><br/>
        <label htmlFor="">
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
          Delivery</label>
        <p>Shipping: {shipping}</p>
      </div>
  );
}
export default MyComponent