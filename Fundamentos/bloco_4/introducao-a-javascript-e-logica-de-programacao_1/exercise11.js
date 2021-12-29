let salarioBruto = 3000;
let descontoINSS;
let descontoliqui;


if (salarioBruto <= 1556.94) {
  descontoINSS = salarioBruto * 0.08
}
else if (salarioBruto <= 2594.92) {
  descontoINSS = salarioBruto * 0.09
} else if (salarioBruto <= 5189.82) {
  descontoINSS = salarioBruto * 0.11
} else {
  descontoINSS = 570.88
}

let salarioBase = salarioBruto - descontoINSS;

if (salarioBase <= 1903.98) {
  descontoliqui = 0
} 
else if (salarioBase <= 2826.65) {
  descontoliqui = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  descontoliqui = (salarioBase * 0.15) - 354.80;
}  else if (salarioBase <= 4664.68) {
  descontoliqui = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
  descontoliqui = (salarioBase * 0.275) - 869.36;
}

 console.log(salarioBase - descontoliqui)