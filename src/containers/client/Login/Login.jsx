import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const speak = msg => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  };
  speak('Hello There, '
  + 'You are welcome to Air Tickets! '
  + 'Please, go ahead and signup. Login instead, if you already have an account.');

  return (
    <div style={{backgroundColor: "lightcyan", height: "100vh", textAlign: "center"}} >
      <h3>Would you like to SignIn or SignUp?</h3> <br/> <br/> <br/><br/>
      <div>
      <Link to="/login/login"><h1>Login</h1></Link>  <br/> <br/><br/>
      <Link to="/login/register"><h1>Register</h1></Link>   
      </div>
    </div>
  );
};

export default Home;
