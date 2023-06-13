let numero1 = 8;
let numero2 = 3;
let numero3 = 10;
let numero4 = 6;

let suma = numero1 + numero2;
let resta = numero3 - numero4;
let resultadoFinal = suma * resta;

const esPar = (parametro) => {
  return parametro % 2 === 0
};

console.log('Mis variables iniciales fueron: ' + numero1 + ', ' + numero2 + ', ' + numero3 + ' y ' + numero4 + '. ' + 
'La respuesta a verificar si el resultado final es par es: ' + esPar(resultadoFinal));