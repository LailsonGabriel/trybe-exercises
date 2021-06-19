let click = document.querySelector('#click')

click.addEventListener('click', () => {
  let span = document.querySelector('#aqui');
  
  let numero = parseInt(span.innerText) + 1;
  span.innerText = numero;
})


