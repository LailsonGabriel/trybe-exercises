let skills = ['HTML', 'CSS', 'JS', 'GIT', 'GITHUB']

function stringConverter(string) {
  const fun1 = inner => (
    `Tryber ${inner} aqui!
    Tudo bem?
    `
  )

  let result = `${fun1(string)}

  Minhas cinco habilidades são:`

  skills.forEach((skill, indice) => 
  result = `${result}
  
  - ${skill}`)

  result = `
  ${result}
  
  #goTrybe
  `

  return result
}

console.log(stringConverter('Teu pai é gay'))