import React, { Component } from 'react'
import './BookingTickets.css'
import TicketInfomation from './TicketInfomation'
import SeatRow from './SeatRow'
import DataListSeats from '../Data/DataListSeats.json'
export default class BookingTickets extends Component {
    renderSeatsRow = () => {
        return DataListSeats.map((seatRow,indexRow) => {
            return <div key={indexRow}>
                <SeatRow seatRow={seatRow} indexRow={indexRow}/>
            </div>
        })
    }
    render() {
        return (
            <div className="background" style={{backgroundImage: "url(./img/background02.jpg), over"}} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <h3>CHOOSE THE SEAT</h3>
                            <div>
                                <div className="screen mb-4">SCREEN</div>
                            </div>
                            <div className="text-center">
                                {this.renderSeatsRow()}
                            </div>
                        </div>
                        <div className="col-4">
                            <h3>TICKET INFORMATION</h3>
                            <TicketInfomation />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
