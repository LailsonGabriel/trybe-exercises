const carro = {
  carro: 'Golf',
  modelo: 'GTI',
  Valor: 90000
};

const alterar = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

alterar(carro, 'potência', '230cv');

console.log(carro);