import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from 'styles/modules/footer.module.scss';
import { clearLogin } from 'actions/loginAction';

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  clearLogin: (login, pass) => dispatch(clearLogin(login, pass))
});

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Footer extends Component {
  logOut = (e) => {
    const { clearLogin} = this.props;
    localStorage.removeItem('appLogin');
    localStorage.removeItem('appPass');
    clearLogin(null, null);
    this.props.history.push('/login')
  };

  render() {
    return (
      <footer className={styles.footer}>
        <button className={styles.logoutLink} onClick={this.logOut}>
          logout
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  clearLogin: PropTypes.func
};

export default Footer;
