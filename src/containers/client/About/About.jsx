import React, { Component } from 'react'
import "./About.scss"
import aa from "../Home/Banner/carousal/aa.jpg"

export default class About extends Component {
    render() {
        return (
            <div className='about'> 
            <img src={aa} style={{height:"570px"}} />
            <br/>
               <h3><br/>Movie Tickets is an online movie ticketing website founded by AMC Theatres and Hollywood.com in 2000; CBS Corporation, Famous Players, and National Amusements all came on board prior to launch;[1] and it is now a subsidiary of Fandango Media. MovieTickets.com provides movie times for all theaters, and online ticket purchasing for all Clearview Cinemas and National Amusements theaters, among other smaller chains; such as Mann Theatres in Los Angeles. In 2010, MovieTickets.com sold over 16 million tickets for over 200 exhibitors, with 14,000 screens.
               </h3>
            </div>
        )
    }
}
