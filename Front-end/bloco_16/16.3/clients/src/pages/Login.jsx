import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import loginAction from '../redux/actions/loginAction';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.HandleOnChange = this.HandleOnChange.bind(this);
  }
  
  HandleOnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    const { redirect, email, password } = this.state;
    const { loginAuth } = this.props;
    return (
      <div>
        { redirect ? <Redirect to='/registered'/> : false }
        <fieldset>
          <label htmlFor="inputEmail" > Email: </label>
          <input
            value={ email }
            name="email"
            onChange={ this.HandleOnChange }
            id="inputEmail"
            type="text"
            placeholder="digite seu email..."
          />
          <br />
          <br />
          <label htmlFor="inputPassword"> Senha: </label>
          <input
            value={ password }
            name="password"
            onChange={ this.HandleOnChange }
            id="inputPassword"
            type="password"
            placeholder="digite sua senha..."
          />
          <br />
          <br />
          <button type="button" onClick={()=> {
            loginAuth(this.state)
            this.setState({ redirect: true })
          }}>Entrar</button>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginAuth: (infos) => dispatch(loginAction(infos)),
})

export default connect(null, mapDispatchToProps)(Login);
