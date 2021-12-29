const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
 const nameDelivery = order.order.delivery.deliveryPerson;
 const forClient = order.name;
 const telNumber = order.phoneNumber;
 const addressStreet = order.address.street;
 const numberHouse = order.address.number;
 const apartmentNum = order.address.apartment;

 console.log(`Olá ${nameDelivery}, entrega para: ${forClient}, ${telNumber}, R. ${addressStreet}, N: ${numberHouse}, AP: ${apartmentNum}`)

}

customerInfo(order);

const orderModifier = (order) => {
  const nameClient = order.name = 'Lailson Gabriel';
  const total = order.payment.total = 50;
  const drink = order.order.drinks.coke.type;

  console.log(`Olá ${nameClient}, o total do seu pedido de muzzarella, calabresa e ${drink} é R$${total}`);

}

orderModifier(order);