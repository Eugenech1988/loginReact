import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import MainPage from 'containers/MainPage';
import LoginPage from 'containers/LoginPage';
import { setLogin } from 'actions/loginAction';

const mapDispatchToProps = dispatch => ({
  setLogin: (login, pass) => dispatch(setLogin(login, pass))
});

@withRouter
@connect(null, mapDispatchToProps)
class Routes extends Component {
  redirectToMain = () => {
    const {setLogin} = this.props;
    const pass = localStorage.getItem('appPass');
    const login = localStorage.getItem('appLogin');
    setLogin(login, pass);
    return (
      pass && login && <Redirect to='/main'/>
    );
  };

  render() {
    const pathName = this.props.location.pathname;
    return (
      <Switch>
        {pathName !== '/main' &&
        this.redirectToMain()
        }
        <Route exact path='/' render={() => (<Redirect to='/login'/>)}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/main' component={MainPage}/>
      </Switch>
    );
  }
}

export default Routes;
