export const LOGIN_TYPE = 'LOGIN_TYPE';

export const loginAction = (infos) => ({
  type: LOGIN_TYPE,
  infos,
})

export default loginAction;