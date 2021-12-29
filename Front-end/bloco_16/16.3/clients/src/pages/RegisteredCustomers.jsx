import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RegisteredCustomers extends Component {
  
  loginDone() {
    const { email } = this.props.user;
    const arrUsers = JSON.parse(localStorage.getItem('users')).filter((user) => user !== null);
    return (
      <div>
        <h1>Clientes Cadastrados</h1>
        {arrUsers.map((user, id) => <p key={id}>{user}</p>)}
        <h1>You User: {email.split('@')[0]}</h1>
      </div>
    );
  }

  componentDidMount() {
    const { email } = this.props.user;
    const receivedLocalStorage = JSON.parse(localStorage.getItem('users'));
    const arr = [...receivedLocalStorage, email]
    localStorage.setItem('users', JSON.stringify(arr));
  }

  render() {
    if(localStorage.getItem('users') === null) localStorage.setItem('users', '[]')
    const { email } = this.props.user;
    return (
      <div>
        { email ? this.loginDone() : <h1>Login não efetuado</h1> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.reducerLogin,
})

export default connect(mapStateToProps)(RegisteredCustomers);
