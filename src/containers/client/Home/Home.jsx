import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import Banner from './Banner/Banner';
import Filter from './Filter/Filter';
/*export default class Home extends Component {
 
  render() {
    return (
      <div>
         <Banner /> 
         <Filter /> 
        <MovieList />
      </div>
    );
  }
} */

const Home = () => {
  /*const speak = msg => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  };
  speak('Hello There, '
  + 'You are welcome to Movie Booking Tickets! '
  ); */

  return (
    <div>
         <Banner /> 
         <Filter /> 
        <MovieList />
      </div>
  );
};

export default Home;



