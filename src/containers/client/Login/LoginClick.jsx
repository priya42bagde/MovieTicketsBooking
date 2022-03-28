import React, { useState } from "react";

const LoginClick = () => {
  const [paymentData, setpaymentData] = useState({
    bankName: "",
    IFSC: "",
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

  const { bankName, IFSC } = paymentData;

  return (<div style={{backgroundColor: "lightcyan", height: "100vh",  textAlign:"center"}} >
    <br/><h3>Login with your credentials</h3><br/>
    {/*<img src={signIn} style={{height:"570px"}} />*/}
    <form class="submit" onSubmit={e => handleFormSubmit(e)}>
     <div>
     <label htmlFor="UserId">UserId</label> <br/>
      <input id="UserId"
        value={bankName}
        onChange={e => updatepaymentData(e)}
        placeholder="UserId"
        type="text"
        name="bankName"
        required
      /></div><br/>
    
      <div>
      <label htmlFor="Password">Password</label> <br/>
      <input id="Password"
        value={IFSC}
        onChange={e => updatepaymentData(e)}
        placeholder="Password"
        type="IFSC"
        name="IFSC"
        required
      /></div><br/>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default LoginClick;
