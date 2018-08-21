const validate = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required field';
  }

  if (!values.pass)
    errors.pass = 'Required fied';

  return errors;
};

export default validate;
