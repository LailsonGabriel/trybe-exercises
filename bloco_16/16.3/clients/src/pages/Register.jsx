import React, { Component } from 'react';
import './register.css'

export class Register extends Component {
  render() {
    return (
      <div>
        <h2>Faça seu cadastro</h2>
        <fieldset className='register-form'>
          <legend>Complete todos os campos</legend>
          <label htmlFor="email">
            Seu email:
            <input
              type="email"
              id="email"
              name="registerEmail"
            />
          </label>
          <label htmlFor="name">
            Seu nome:
            <input
              type="text"
              id="name"
              name="registerName"
            />
          </label>
          <label htmlFor="password">
            Seu password:
            <input
              type="password"
              id="password"
              name="registerpassword"
            />
          </label>
          <button type="button">Cadastrar</button>
        </fieldset>
      </div>
    );
  }
}

export default Register;
