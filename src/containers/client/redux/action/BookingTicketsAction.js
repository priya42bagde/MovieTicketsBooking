import { BOOKING_TICKETS, CANCLE_TICKETS } from "../types/BookingticketsType"

export const bookingTicketsAction = (seatOnClick) => {
    return {
        type: BOOKING_TICKETS,
        seatOnClick
    }
}

export const cancleTicketsAction = (IDSeatOnClick) => {
    return {
        type: CANCLE_TICKETS,
        IDSeatOnClick
    }
}
