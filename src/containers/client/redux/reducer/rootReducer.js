import {combineReducers} from 'redux';
import BookingTicketsReducer from './BookingTicketsReducer'

const rootReducer = combineReducers({ // Store tổng của ứng dụng
    stateBookingTickets : BookingTicketsReducer // state đặt vé
})

export default rootReducer