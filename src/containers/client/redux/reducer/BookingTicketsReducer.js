const stateBookingTickets = {
    listSeatsSelectCurrently: []
}

const BookingTicketsReducer = (state = stateBookingTickets, action) => {
    switch (action.type){
        case 'BOOKING_TICKETS': {
            let newListSeatsSelectCurrently = [...state.listSeatsSelectCurrently]
            let index = newListSeatsSelectCurrently.findIndex(seat => seat.soGhe === action.seatOnClick.soGhe) 
            if (index !== -1){
                newListSeatsSelectCurrently.splice(index, 1)
            } else {
                newListSeatsSelectCurrently.push(action.seatOnClick)
            }
            state.listSeatsSelectCurrently = newListSeatsSelectCurrently
            return {...state}
        }
        case 'CANCLE_TICKETS': {
            let newListSeatsSelectCurrently = [...state.listSeatsSelectCurrently]
            let index = newListSeatsSelectCurrently.findIndex(seat => seat.soGhe === action.IDSeatOnClick)
            if (index !== -1){
                newListSeatsSelectCurrently.splice(index, 1)
            }
            state.listSeatsSelectCurrently = newListSeatsSelectCurrently
            return {...state}
        }
        default: return {...state}
    }
}
export default BookingTicketsReducer