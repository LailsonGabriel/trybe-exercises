const CHANGE_NAME = { type: 'CHANGE_NAME' }
const CHANGE_SURNAME = { type: 'CHANGE_SURNAME' }

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME.type:
      return { ...state, nome: newName };
    case CHANGE_SURNAME.type:
      return { ...state, sobrenome: newSurName }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME.type:
      return { ...state, nome: newName };
    case CHANGE_SURNAME.type:
      return { ...state, sobrenome: newSurName }
    default:
      return state;
  }
};

const combinarReducers = Redux.combineReducers({meuPrimeiroReducer, meuSegundoReducer});

const store = Redux.createStore(combinarReducers);
window.onload = async () => {
  setTimeout(() => {
    store.dispatch(CHANGE_NAME, newName = 'PrimeiroNome' );
    store.dispatch(CHANGE_SURNAME, newSurName = 'SegundoNome' );
  }, 2000);

  await store.subscribe(() => {
    document.querySelector('#nome-1').innerHTML = store.getState().meuPrimeiroReducer.nome;
    document.querySelector('#nome-2').innerHTML = store.getState().meuSegundoReducer.nome;
    document.querySelector('#sobrenome-1').innerHTML = store.getState().meuPrimeiroReducer.sobrenome;
    document.querySelector('#sobrenome-2').innerHTML = store.getState().meuSegundoReducer.sobrenome;
  });
}