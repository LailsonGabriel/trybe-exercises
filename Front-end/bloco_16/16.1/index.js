const NEXT_COLOR = {type: 'NEXT_COLOR'} ;
const PREVIOUS_COLOR = {type: 'PREVIOUS_COLOR'} ;
const RANDOM = {type: 'RANDOM'}

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

window.onload = () => {
  const reduceSwitch = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case NEXT_COLOR.type:
        return { ...state, index: state.index === payload - 1 ? state.index : state.index + 1 };
      case PREVIOUS_COLOR.type:
        return { ...state, index: state.index === 0 ? state.index : state.index - 1 };
      case RANDOM.type:
        return {colors: [...state.colors, criarCor()], index: payload}
      default:
        return state;
    }
  }
  const store = Redux.createStore(reduceSwitch);

  document.querySelector('#next').addEventListener('click', () => {
    store.dispatch(NEXT_COLOR, payload = store.getState().colors.length);
  });

  document.querySelector('#previous').addEventListener('click', () => {
    store.dispatch(PREVIOUS_COLOR, payload = store.getState().colors.length);
  });

  document.querySelector('#random').addEventListener('click', () => {
    store.dispatch(RANDOM, payload = store.getState().colors.length);
    const { colors } = store.getState()
    document.querySelector('#value').innerHTML = colors[colors.length - 1]
    document.querySelector('#container').style.backgroundColor = colors[colors.length];
  })

  store.subscribe(() => {
    const { colors, index } = store.getState()
    document.querySelector('#value').innerHTML = colors[index]
    document.querySelector('#container').style.backgroundColor = colors[index];
  })
}