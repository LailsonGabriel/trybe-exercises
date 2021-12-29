function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth () {
  let ul = document.querySelector("#days");
  
  for(let index = 0; index < dezDaysList.length; index += 1){
    let day = dezDaysList[index];
    let li = document.createElement('li');
    
    if(day === 24 || day === 31) {
      li.className = "day holiday";
      li.innerHTML = day;
      ul.appendChild(li);
    } else if (day === 4 || day === 11 || day === 18) {
      li.className = "day friday";
      li.innerHTML = day;
      ul.appendChild(li);
    } else if (day === 25) {
      li.className = "day holiday friday";
      li.innerHTML = day;
      ul.appendChild(li);
    } else {
      li.className = "day";
      li.innerHTML = day;
      ul.appendChild(li);
    }
  };
};

createDaysOfTheMonth();


let button = document.querySelector(".buttons-container");
let createbutton = document.createElement("button");

button.appendChild(createbutton)
document.querySelector(".buttons-container button").id = "btn-holiday"
document.querySelector("#btn-holiday").innerHTML = "Feriados";

let createbutton2 = document.createElement("button");
button.appendChild(createbutton2)
button.lastElementChild.innerHTML = "Sexta-feira"
button.lastElementChild.id = "btn-friday"




function feriados() {
  let botaoFeriado = document.querySelector("#btn-holiday")
  let holiday = document.querySelectorAll(".holiday");
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'tomato';
  

  botaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === setNewColor) {
        holiday[index].style.backgroundColor = backgroundColor;
      } else {
        holiday[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

feriados()

function friday(){
  let botaoFriday = document.querySelector("#btn-friday")
  let friday = document.querySelectorAll(".friday");
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'red';

  botaoFriday.addEventListener('click', function() {
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].style.backgroundColor === setNewColor) {
        friday[index].style.backgroundColor = backgroundColor;
      } else {
        friday[index].style.backgroundColor = setNewColor;
      }
    }
  })
}

friday()
  
function zoom (){
  let day = document.querySelectorAll(".day");

  day.addEventListener('mouseover', function () {
    day.target.style.fontSize = "30px";
  })

}
zoom()



// zoom no dia


