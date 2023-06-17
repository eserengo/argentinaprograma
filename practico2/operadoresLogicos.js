const readlineSync = require('readline-sync');
const numero = parseInt(readlineSync.question('Ingrese un numero entero: '));

if (isNaN(numero)) {
  console.log('Número inválido');
} else {
  numero > 0 && numero % 2 === 0 && console.log('El número es positivo y par')
    || numero > 0 && numero % 2 !== 0 && console.log('El número es positivo e impar')
    || numero < 0 && console.log('El número en negativo')
    || numero === 0 && console.log('El número es 0');
}