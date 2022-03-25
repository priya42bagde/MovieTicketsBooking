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
    <div >
      <h1 >BOOKING TICKETS </h1>
      <div>
      <Link to="/login/login">Login</Link>  <br/> 
      <h2>Signup from below:</h2>
      <Link to="/login/register">Register</Link>   
      </div>
    </div>
  );
};

export default Home;
