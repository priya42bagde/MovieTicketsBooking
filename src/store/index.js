import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from 'containers/client/Home/module/reducer';
import movieDetailReducer from 'containers/client/MovieDetail/module/reducer';
import BookingTicketsReducer from 'containers/client/redux/reducer/BookingTicketsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  stateBookingTickets : BookingTicketsReducer
  
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
