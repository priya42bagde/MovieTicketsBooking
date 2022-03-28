import React, { useState } from "react";
import './Payment.scss'

const Form = () => {
  const [paymentData, setpaymentData] = useState({
    bankName: "",
    accNumber: "",
    IFSC: "",
    CVV: ""
  });

  const updatepaymentData = event =>
    setpaymentData({
      ...paymentData,
      [event.target.name]: event.target.value
    });

    const handleFormSubmit=(event)=> {
        alert("Payment Successful!!");
        event.preventDefault();
      }

  const { bankName, accNumber, IFSC, CVV } = paymentData;

  return (<div class="payment">
    <h3>Provide data to make payment </h3><br/>
    <form class="submit" onSubmit={e => handleFormSubmit(e)} id="btn">
     <div>
     <label htmlFor="InputValue">Bank Name</label><br/>
      <input id="InputValue" label="Message"
        value={bankName}
        onChange={e => updatepaymentData(e)}
        placeholder="Bank Name"
        type="text"
        name="bankName"
        required
      /></div><br/>
      <div>
      <label htmlFor="InputValue2">Account Number</label><br/>
        <input id="InputValue2"
        value={accNumber}
        onChange={e => updatepaymentData(e)}
        placeholder="Account Number"
        type="text"
        name="accNumber"
        required
      /></div><br/>
      <div>
      <label htmlFor="InputValue3">IFSC</label><br/>
        <input id="InputValue3"
        value={IFSC}
        onChange={e => updatepaymentData(e)}
        placeholder="IFSC address"
        type="IFSC"
        name="IFSC"
        required
      /></div><br/>
      <div>
      <label htmlFor="InputValue4">CVV</label><br/>
        <input id="InputValue4"
        value={CVV}
        onChange={e => updatepaymentData(e)}
        placeholder="CVV"
        type="CVV"
        name="CVV"
        required
      /></div><br/>

<button id="submit" type="submit" value="Submit" >Submit</button>
    </form>
    </div>
  );
};

export default Form;
