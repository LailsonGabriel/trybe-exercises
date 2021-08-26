import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'

export class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Home Page</h1>
        <main>
          <Link to="/login">Fazer Login</Link>
          <Link to="/register">Fazer Cadastro</Link>
        </main>
      </div>
    );
  }
}

export default Home;
