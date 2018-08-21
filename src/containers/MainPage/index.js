import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import {setLogin} from 'actions/loginAction';
import Carousel from 'components/Carousel';
import styles from 'styles/modules/main-page.module.scss';

const mapStateToProps = (state) => ({
  login: state.login.login
});

const mapDispatchToProps = dispatch => ({
  setLogin: (login, pass) => dispatch(setLogin(login, pass))
});

@connect(mapStateToProps, mapDispatchToProps)
class MainPage extends Component {
  componentDidMount() {
    const { setLogin } = this.props;
    const pass = localStorage.getItem('appPass');
    const login = localStorage.getItem('appLogin');
    pass && login && setLogin(login, pass);
  }

  render() {
    const { login } = this.props;
    return (
      <div className={styles.wrapper}>
        <Header headerText={login}/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}

MainPage.propTypes = {
  loading: PropTypes.bool,
  headerText: PropTypes.string
};

export default MainPage;
