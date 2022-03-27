import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieItem extends Component {
  render() {
    const { tenPhim, hinhAnh, maPhim } = this.props.movie;

    return (
      <div className="col-3" style={{ marginBottom: '20px' }}>
        <div className="card" style={{ backgroundColor: "white"}}>
          <img className="card-img-top" src={hinhAnh} alt="" />
          <div className="card-body" >
            <h4 className="card-title">{tenPhim}</h4>
            <Link to={`/movie-detail/${maPhim}`} className="btn btn-success">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
