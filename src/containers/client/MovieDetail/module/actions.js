import movieApi from 'apis/movieApi';
import {
  FETCH_MOVIE_DETAIL_FAIL,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './types';

const actFetchMovieDetailRequest = () => ({
  type: FETCH_MOVIE_DETAIL_REQUEST,
});

const actFetchMovieDetailSuccess = movieDetail => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload: movieDetail,
});

const actFetchMovieDetailFail = error => ({
  type: FETCH_MOVIE_DETAIL_FAIL,
  payload: error,
});

export const actFetchMovieDetail = movieId => {
  return async dispatch => {
    dispatch(actFetchMovieDetailRequest());
    try {
      const { data } = await movieApi.fetchMovieDetailApi(movieId);
      dispatch(actFetchMovieDetailSuccess(data.content));
    } catch (error) {
      dispatch(actFetchMovieDetailFail(error));
    }
  };
};
