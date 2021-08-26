

let body = document.querySelector("#body");
let botaoVerde = document.querySelector("#green");
let botaoAzul = document.querySelector("#blue");
let botaoRosa = document.querySelector("#pink");
let textoWhite = document.querySelector("#white");
let textoTomato = document.querySelector("#tomato");
let textoRed = document.querySelector("#red");
let aumentar = document.querySelector("#aumentar")
let texto = document.querySelector("#texto")
let linhas = document.querySelector("#linhas")
let fonte = document.querySelector("#font-ubuntu")

//Salvar os Estilos no LocalStorage


// altera com de fundo
function alterarCorDeFundoVerde() {
  body.style.backgroundColor = "green";
}

function alterarCorDeFundoAzul() {
  body.style.backgroundColor = "blue";
}

function alterarCorDeFundoRosa() {
  body.style.backgroundColor = "pink";
}

botaoVerde.addEventListener("click", alterarCorDeFundoVerde);
botaoAzul.addEventListener("click", alterarCorDeFundoAzul);
botaoRosa.addEventListener("click", alterarCorDeFundoRosa);

// altera cor de texto

function corDoTextoBranca(){
  texto.style.color = "white";
}

function corDoTextoRed(){
  texto.style.color = "red";
}

function corDoTextoTomato(){
  texto.style.color = "tomato";
}

textoWhite.addEventListener("click", corDoTextoBranca);
textoRed.addEventListener("click", corDoTextoRed);
textoTomato.addEventListener("click", corDoTextoTomato);


//Tamanho da fonte

function AumentarTamanhoDaFonte() {
  let tamanhoDaFonte = texto.style.fontSize = "200px";
}

function espacamentoLinhas() {
  texto.style.letterSpacing = "20px";
}


linhas.addEventListener("click", espacamentoLinhas)
aumentar.addEventListener("click", AumentarTamanhoDaFonte);


//Estilo da fonte

function tipoDeFonte() {
  texto.target.style.fontFamily = "ubuntu";
}

fonte.addEventListener("click", tipoDeFonte)




let styleFont = document.querySelector("#texto").style.fontFamily;

localStorage.setItem('FonteDoTexto', styleFont.target);




