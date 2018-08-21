import {
  CLEAR_LOGIN,
  SET_LOGIN
} from 'constants/loginConst';

const initialState = {
  login: null,
  pass: null
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case CLEAR_LOGIN:
      return {...state, login: action.login, pass: action.pass};
    case SET_LOGIN:
      return {...state, login: action.login, pass: action.pass};
    default:
      return { ...state };
  }
}
