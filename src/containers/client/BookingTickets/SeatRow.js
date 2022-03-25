import React, { Component } from 'react'
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { bookingTicketsAction } from '../redux/action/BookingTicketsAction';

class SeatRow extends Component {
    renderSeatRowName = () => {
        return this.props.seatRow.hang
    }
    renderSingleSeat = () => {
        let {seatRow, indexRow, listSeatsSelectCurrently, bookingTickets} =this.props
        return seatRow.danhSachGhe.map((seat, index) => {
            if (indexRow === 0){
                return <span className="rowNumber" key={index}>
                        {seat.soGhe}
                </span>
            } else {
                // Seat status was selected
                let cssSeatSelected = "";
                let disabled = false;
                if (seat.daDat) {
                    cssSeatSelected = "gheDuocChon";
                    disabled = true;
                }

                // Seat status is selecting
                let cssSeatSelectCurently = "";
                let indexSeatSelectCurently = listSeatsSelectCurrently.findIndex(seatSelectCurrently => seatSelectCurrently.soGhe === seat.soGhe)
                if (indexSeatSelectCurently !== -1) {
                    cssSeatSelectCurently = "gheDangChon"
                }
                return <button 
                        disabled={disabled}    
                        className={`ghe ${cssSeatSelected} ${cssSeatSelectCurently}`} 
                        key={index}
                        onClick={()=>{
                            bookingTickets(seat)
                        }}>
                    {seat.soGhe}
                </button>
            }
        })
    }
    render() {
        return (
            <div style={{backgroundColor:"lightcyan"}}>
                <span className="seatRow">{this.renderSeatRowName()}</span>{this.renderSingleSeat()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listSeatsSelectCurrently: state.stateBookingTickets.listSeatsSelectCurrently
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookingTickets: (seatOnClick) => {
            dispatch(bookingTicketsAction(seatOnClick))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SeatRow)