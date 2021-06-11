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


function stopAction(event) {
  event.preventDefault();
}

//buttonSubmit.addEventListener('click', stopAction)



var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  onSelect: function() {
      console.log(this.getMoment().format('DD/MM/YYYY'));
  }
});


var validator = new FormValidator();
// select your "form" element from the DOM and attach an "onsubmit" event handler to it:
document.forms[0].onsubmit = function(e){
    var validatorResult = validator.checkAll(this); // "this" reffers to the currently submitetd form element

    return !!validatorResult.valid;
};



