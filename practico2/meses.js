const readlineSync = require('readline-sync');

const meses = [
  {
    id: '1',
    nombre: 'enero',
    cantidadDeDias: 31,
  },
  {
    id: '2',
    nombre: 'febrero',
    cantidadDeDias: 28,
  },
  {
    id: '3',
    nombre: 'marzo',
    cantidadDeDias: 31,
  },
  {
    id: '4',
    nombre: 'abril',
    cantidadDeDias: 30,
  },
  {
    id: '5',
    nombre: 'mayo',
    cantidadDeDias: 31,
  },
  {
    id: '6',
    nombre: 'junio',
    cantidadDeDias: 30,
  },
  {
    id: '7',
    nombre: 'julio',
    cantidadDeDias: 31,
  },
  {
    id: '8',
    nombre: 'agosto',
    cantidadDeDias: 31,
  },
  {
    id: '9',
    nombre: 'setiembre',
    cantidadDeDias: 30,
  },
  {
    id: '10',
    nombre: 'octubre',
    cantidadDeDias: 31,
  },
  {
    id: '11',
    nombre: 'noviembre',
    cantidadDeDias: 30,
  },
  {
    id: '12',
    nombre: 'diciembre',
    cantidadDeDias: 31,
  },
];

const consultar = readlineSync.question('Ingrese un numero entero entre 1 y 12: ');

if (isNaN(consultar) || Number(consultar) < 1 || Number(consultar) > 12) {
  console.log('Ha ingresado un numero incorrecto, debe ingresar un numero entero entre 1 y 12.');
} else {
  meses.map(item => {
    consultar === item.id && console.log(`La cantidad de dias del mes de ${item.nombre} es ${item.cantidadDeDias}`);
  })
}
