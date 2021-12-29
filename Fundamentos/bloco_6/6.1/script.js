let buttonSubmit = document.querySelector('#enviar');


function createOption() {
  let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
  let paiOption = document.querySelector('#estado');

  for(let i = 0; i < arrayEstados.length; i += 1) {
    let createOption = document.createElement('option')
    paiOption.appendChild(createOption).innerText = arrayEstados[i];
    paiOption.appendChild(createOption).value = arrayEstados[i];
  }
}

createOption()


function verifyDate () {
let date = document.querySelector('#date');
let resultvalue = date.value;

let dia = resultvalue[0] + resultvalue[1];
let mes = resultvalue[3] + resultvalue[4];
let ano = resultvalue[6] + resultvalue[7] + resultvalue[8] + resultvalue[9];
parseInt(dia)
parseInt(mes)
parseInt(ano)

if(dia > 0 && dia <= 31) {
  
} else {
  alert('tem algo errado com o dia da sua data de nascimento')
}

if(mes > 0 && mes <= 12) {
  
} else {
  alert('tem algo errado com o seu mês da sua data de nascimento')
}

if(ano < 0) {
  alert('tem algo errado com o ano do seu nascimento')
}
}

function stopAction(event) {
  event.preventDefault();
}


buttonSubmit.addEventListener('click', verifyDate)
buttonSubmit.addEventListener('click', stopAction)


let input = {
  name: {
    limite : 40,
    required : true
  },
  email: {
    limite : 40,
    required : true
  },
  cpf: {
    limite : 11,
    required : true
  },
  endereco: {
    limite : 200,
    required : true
  },
  cidade: {
    limite : 28,
    required : true
  },
  estado: {
    required : true
  },
  tipo: {
    required : true
  },
  resumoCurriculo: {
    limite : 1000,
    required : true
  },
  cargo: {
    limite : 40,
    required : true
  },
  dataInicio: {
    required : true
  }
}

function verifyName() {
  let nome = document.querySelector('#nome');
  let valorName = nome.value;
  let requeiredName = nome.required;
  
  if(valorName.length <= input.name.limite && requeiredName === input.name.required) {
    return true
  } else {
    return false
  }
}

function retorno() {
  let option = document.querySelectorAll('input');
  for(let i = 0; i < option.length; i += 1) {
    console.log(option[i].value)
  }
}

buttonSubmit.addEventListener('click', retorno)

