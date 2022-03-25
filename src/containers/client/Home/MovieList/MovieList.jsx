import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';
import MovieItem from '../MovieItem/MovieItem';
import { actFetchAllMovie } from '../module/actions';
import { connect } from 'react-redux';
class MovieList extends Component {
  render() {
    const { loading, listMovie } = this.props;

    if (loading) return <Loader />;

    return (
      <div className="container">
        <div className="row">
          {listMovie.map(movie => {
            return <MovieItem key={movie.maPhim} movie={movie} />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchAllMovie();
  }
}

const mapStateToProps = state => ({
  listMovie: state.movieReducer.listMovie,
  loading: state.movieReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
