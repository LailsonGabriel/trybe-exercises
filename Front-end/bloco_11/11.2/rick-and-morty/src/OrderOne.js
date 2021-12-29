// arquivo Order.js
import React from 'react';

class OrderOne extends React.Component {
  render() {
    const { price: { user, product, price } } = this.props;
    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default OrderOne;