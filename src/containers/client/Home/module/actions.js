import movieApi from 'apis/movieApi';
import {
  FETCH_ALL_MOVIE_FAIL,
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
} from './types';

const actFetchAllMovieRequest = () => ({
  type: FETCH_ALL_MOVIE_REQUEST,
});

const actFetchAllMovieSuccess = listMovie => ({
  type: FETCH_ALL_MOVIE_SUCCESS,
  payload: listMovie,
});

const actFetchAllMovieFail = error => ({
  type: FETCH_ALL_MOVIE_FAIL,
  payload: error,
});

export const actFetchAllMovie = () => {
  return (dispatch, getState) => {
    dispatch(actFetchAllMovieRequest());
    movieApi
      .fechAllMovieApi()
      .then(res => {
        dispatch(actFetchAllMovieSuccess(res.data.content));
      })
      .catch(err => {
        dispatch(actFetchAllMovieFail(err));
      });
  };
};
