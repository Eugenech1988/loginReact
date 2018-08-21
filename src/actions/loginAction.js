import {
  CLEAR_LOGIN,
  SET_LOGIN
} from 'constants/loginConst'

export const clearLogin = (login, pass) => ({
  type: CLEAR_LOGIN,
  login,
  pass
});

export const setLogin = (login, pass) => ({
  type: SET_LOGIN,
  login,
  pass
});
