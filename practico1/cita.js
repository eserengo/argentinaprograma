const cita = 'Tres tristes tigres comen trigo en un trigal';
const substring = 'tigres comen trigo';

let tamañoDeCita = cita.length;

console.log('El tamaño de la cita es: ' + tamañoDeCita);

let indice = cita.indexOf(substring);

console.log('El indice del substring es: ' + indice);

let citaRevisada = cita.slice(0, 12) + ' ' + substring;

console.log(citaRevisada);