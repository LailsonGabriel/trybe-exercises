interface OrderType {
  orderName: string;
  price: number;
  paymentType: string;
}

class Client {
  name: string;
  order: OrderType[];
  discount: number;

  constructor(n: string, order: OrderType[], discount: number) {
    this.name = n;
    this.order = order;
    this.discount = discount;
  }

  totalOrder(): number {
    return this.order.reduce((prev, current) => prev + current.price, 0);
  }

  totalOrderWithDiscount(): number {
    const orderValue = this.order.reduce((prev, current) => prev + current.price, 0)
    return orderValue - (orderValue * this.discount / 100);
  }
}

const pedido1 = {
  orderName: 'Batata',
  price: 10,
  paymentType: 'money',
};

const pedido2 = {
  orderName: 'Coca',
  price: 5.99,
  paymentType: 'money',
};

const order1 = new Client('Roberto', [pedido1, pedido2], 5);
console.log(order1.totalOrder());
console.log(order1.totalOrderWithDiscount());