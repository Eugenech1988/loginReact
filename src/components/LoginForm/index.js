import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Form, Field } from 'redux-form';

import renderField from './field';
import validate from './validate';
import styles from 'styles/modules/login.module.scss';

@reduxForm({ form: 'login-form', validate, touchOnBlur: false })
class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.loginWrapper}>
        <Form
          onSubmit={handleSubmit}
          className={styles.loginForm}
        >
          <h1 className={styles.loginHeader}>Please enter your login and password</h1>
          <Field className={styles.inputField} inputCls={styles.inputField} component={renderField} label='login' name='login' id='login' type='text'/>
          <Field inputCls={styles.inputField} component={renderField} label='pass' name='pass' id='pass' type='text'/>
          <div className={styles.btnWrapper}>
            <button
              onClick={this.handleClick}
              className={styles.submitBtn}
              type='submit'
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default LoginForm;
