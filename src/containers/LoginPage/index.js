import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginForm from 'components/LoginForm';
import { setLogin } from 'actions/loginAction';

const mapDispatchToProps = dispatch => ({
  setLogin: (login, pass) => dispatch(setLogin(login, pass))
});

@connect(null, mapDispatchToProps)
@withRouter
class LoginPage extends Component {
  onSubmit = (values) => {
    const { setLogin } = this.props;
    if (!values.login || !values.pass) {
      return false;
    } else {
      localStorage.setItem('appPass', JSON.stringify(values.pass));
      localStorage.setItem('appLogin', JSON.stringify(values.login));
      setLogin(values.login, values.pass);
    }
    values.login && values.pass && this.props.history.push('/main');
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
      />
    );
  }
}

LoginPage.propTypes = {
  setLogin: PropTypes.func
};

export default LoginPage;
