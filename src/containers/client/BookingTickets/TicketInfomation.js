import Button from 'components/Button/Button';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { cancleTicketsAction } from '../redux/action/BookingTicketsAction';
import history from './History';
import { Link } from "react-router-dom";
class TicketInfomation extends Component {
    renderInfo = () => {
        let { listSeatsSelectCurrently, cancleTickets } = this.props
        return listSeatsSelectCurrently.map((info, index) => {
            return <tr key={index}>
                <td>{info.soGhe}</td>
                <td>{info.gia}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        cancleTickets(info.soGhe)
                    }}>X</button>
                </td>
            </tr>
        })
    }
    calcPayment = () => {
        let { listSeatsSelectCurrently } = this.props
        return listSeatsSelectCurrently.reduce((payment, seat) => {
            return payment += seat.gia
        }, 0)
    }

    render() {
        return (
            <div>
                <div>
                    <button className="gheDuocChon"></button>
                    <span>SELECTED SEAT</span>
                </div>
                <div>
                    <button className="gheDangChon"></button>
                    <span>RESERVED SEAT</span>
                </div>
                <div>
                    <button className="ghe"></button>
                    <span>EMPTY SEAT</span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Seats</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderInfo()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><h5>Total Cost</h5></td>
                            <td>{this.calcPayment()}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div>
                   {/* <Button onClick={()=> this.history.push('/Theater')}>
                        <span>Proceed To Payment</span>
                     </Button>       */}
          <Link to="/payment">Proceed to Pay</Link>        
                </div>
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
        cancleTickets: (IDSeatOnClick) => {
            dispatch(cancleTicketsAction(IDSeatOnClick))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketInfomation)