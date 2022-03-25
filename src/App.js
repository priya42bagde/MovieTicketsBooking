import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
import Home from 'containers/client/Home/Home';
import BookingTickets from './containers/client/BookingTickets/BookingTickets'
import LoginClick from './containers/client/Login/LoginClick'
import RegisterClick from './containers/client/Login/RegisterClick'

function App() {
  const renderRoutes = routes => {
    return routes.map(route => {
      const { path, component, exact } = route;
      return (
        <Route 
          path={path} 
          component={component} 
          exact={exact} 
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/login" component={LoginClick} />
        <Route exact path="/login/register" component={RegisterClick} />
          {renderRoutes(clientRoutes)}
           {renderRoutes(adminRoutes)} 
          {/* <Route path="/movie-detail/20689" component={BookingTickets} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
