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
    <form className="submit" onSubmit={e => handleFormSubmit(e)} id="btn">
     <div>
      <input
        value={bankName}
        onChange={e => updatepaymentData(e)}
        placeholder="Bank Name"
        type="text"
        name="bankName"
        required
      /></div><br/>
      <div><input
        value={accNumber}
        onChange={e => updatepaymentData(e)}
        placeholder="Account Number"
        type="text"
        name="accNumber"
        required
      /></div><br/>
      <div><input
        value={IFSC}
        onChange={e => updatepaymentData(e)}
        placeholder="IFSC address"
        type="IFSC"
        name="IFSC"
        required
      /></div><br/>
      <div><input
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
