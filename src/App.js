import React, { Component } from 'react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { PrivateRoute } from './private/PrivateRoute';
import history from './helper/history';
import store from './helper/store';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router history={history}>
            <>
              <SiteHeader />
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/about-us" component={About} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Redirect to="/home" />
              </Switch>
              <SiteFooter />
            </>
          </Router>

        </Provider>
      </>
    );
  }
}

export default App;
