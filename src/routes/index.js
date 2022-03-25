import About from 'containers/client/About/About';
import Login from 'containers/client/Login/Login';
import Home from 'containers/client/Home/Home';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import Review from 'containers/client/Review/Review';
import SeatPlan from 'containers/client/SeatPlan/SeatPlan';
import Payment from 'containers/client/Payment/Payment';

export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/payment',
    component: Payment,
    exact: false,
  },
  {
    path: '/review',
    component: Review,
    exact: false,
  },
  {
    path: '/about',
    component: About,
    exact: false,
  },
  {
    path: '/movie-detail/:movieId',
    component: MovieDetail,
    exact: false,
  },
  {
    path: '/seat-plan/:showtimeId',
    component: SeatPlan,
    exact: false,
  },
  {
    path: '/Login',
    component: Login,
    exact: false,
  },
];

export const adminRoutes = [];
