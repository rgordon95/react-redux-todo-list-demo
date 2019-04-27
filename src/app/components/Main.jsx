import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard'
import { ConnectedLogin } from './Login';
import { Route, Router } from 'react-router-dom';
import { Redirect } from 'react-router';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetail } from './TaskDetail';
import { ConnectedSignup } from './Signup';


const RouteGuard = Component => ({ match }) => {
if(!store.getState().session || !store.getState().session.authenticated){
        return <Redirect to="/" />
    } {
      return <Component match={match} />
    }

}

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path ="/" component={ConnectedLogin} />
        <Route exact path="/signup" component={ConnectedSignup}/>
        <Route
          exact
          path="/dashboard"
          render={RouteGuard(ConnectedDashboard)}
        />
        <Route
          exact
          path="/task/:id"
          render={RouteGuard(ConnectedTaskDetail)}
        />
      </div>
    </Provider>
  </Router>
);
