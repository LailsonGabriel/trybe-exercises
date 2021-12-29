import { LOGIN_TYPE } from "../actions/loginAction";

export const INITIAL_STATE = {};

export const reducerLogin = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case LOGIN_TYPE:
    return { ...state, ...action.infos   };
  default:
    return state;
  }
}