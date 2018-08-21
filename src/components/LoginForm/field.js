import React from 'react';

import styles from 'styles/modules/login.module.scss';

const renderField = ({ label, input, meta: { touched, error } }) => (
  <div className={styles.inputWrapper}>
    <label className={styles.inputLabel}>{label}</label>
    <input className={styles.inputField} type='text' {...input} />
    {
      touched && error &&
      <span className={styles.inputError}>{error}</span>
    }
  </div>
);

export default renderField;
