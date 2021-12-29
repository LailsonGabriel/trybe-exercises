let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log('Bem vinda, ' + info.personagem)


//for(let consulta in info) {
  // console.log(consulta)
//}

//for(let consulta in info){
  //console.log(info[consulta])
//}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let consulta1 in info, info2) {
  console.log(info[consulta1]+ " e " + info2[consulta1])
}