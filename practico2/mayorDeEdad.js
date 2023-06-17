const readlineSync = require('readline-sync');
const edad = parseInt(readlineSync.question('Ingrese su edad: '));

edad >= 18
  ? console.log('Eres mayor de edad')
  : console.log('Eres menor de edad');
