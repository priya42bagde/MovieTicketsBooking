import React, { useState } from "react";
import signIn from './Login';

const LoginClick = () => {
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
        alert("Login Successful!!");
        event.preventDefault();
      }

  const { bankName, accNumber, IFSC, CVV } = paymentData;

  return (<div style={{backgroundColor: "lightcyan", height: "100vh",  textAlign:"center"}} >
    <br/><h3>Login with your credentials</h3><br/>
    {/*<img src={signIn} style={{height:"570px"}} />*/}
    <form className="submit" onSubmit={e => handleFormSubmit(e)}>
     <div>
      <input
        value={bankName}
        onChange={e => updatepaymentData(e)}
        placeholder="UserId"
        type="text"
        name="bankName"
        required
      /></div><br/>
      {/*<div><input
        value={accNumber}
        onChange={e => updatepaymentData(e)}
        placeholder="EmailId"
        type="text"
        name="accNumber"
        required
    /></div><br/>*/}
      <div><input
        value={IFSC}
        onChange={e => updatepaymentData(e)}
        placeholder="Password"
        type="IFSC"
        name="IFSC"
        required
      /></div><br/>
      {/*<div><input
        value={CVV}
        onChange={e => updatepaymentData(e)}
        placeholder="Confirm Password"
        type="CVV"
        name="CVV"
        required
  /></div><br/>*/}

      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default LoginClick;
