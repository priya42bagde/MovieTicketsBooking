import {
  FETCH_MOVIE_DETAIL_FAIL,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './types';

const initialState = {
  movieDetail: null,
  loading: false,
  error: '',
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAIL_REQUEST:
      return { ...state, loading: true };

    case FETCH_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetail: payload, loading: false };

    case FETCH_MOVIE_DETAIL_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default movieDetailReducer;
