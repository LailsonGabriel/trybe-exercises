// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import OrderOne from './OrderOne';

class OrderTwo extends React.Component {
  render() {
    const { prices } = this.props;
    return (
      <div className="App">
        <h1> Orders recently created </h1>
          {prices.map((valor) => (
          <OrderOne 
          key={valor.id}
          price={valor}
          />
          ))}
      </div>
    );
  }
}

export default OrderTwo;