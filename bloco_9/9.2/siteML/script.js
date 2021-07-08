let sessao = document.querySelector('.items');
let listaPai = document.querySelector('.lista-pai')
let Search = document.querySelector('#enviar');
const createProdut = (produto) => {
  for (let i = 0; i < produto.results.length; i += 1) {
    let criarProduto = document.createElement('li');
    let criarIMG = document.createElement('img');
    let criarP = document.createElement('p');
    criarProduto.innerHTML = produto.results[i].title;
    criarP.innerText = produto.results[i].price;
    criarIMG.src = produto.results[i].thumbnail;
    criarProduto.className = 'products';
    criarProduto.appendChild(criarIMG);
    criarProduto.appendChild(criarP);
    listaPai.appendChild(criarProduto);
  }
  
}
//createProdut()

Search.addEventListener('click', () => {
  const inputValue = document.querySelector('#pesquisa').value;
  const produtos = new Promise ((resolve, reject) => {
    API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`;

    fetch(API_URL)
    .then((result) => result.json())
    .then((data) => createProdut(data))
  })
})




