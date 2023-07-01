/*
Práctico N4: Funciones
Programación imperativa en JavaScript
Antes de comenzar, deberás crear una carpeta con el nombre practico4 en tu repositorio de
github. Dentro de la misma deberás ir agregando los ejercicios de este práctico a medida que los
vayas resolviendo. Al finalizar todos los ejercicios deberás crear un tag con el nombre de
practico4 para realizar la entrega del mismo.
Si bien este práctico está orientado a funciones, la idea es que sea un integrador de todos los
contenidos del curso, es decir, en este práctico deberán utilizar todos los conocimientos
adquiridos a lo largo del curso: comandos básicos, condicionales, ciclos, funciones y más.

PIEDRA-PAPEL-TIJERAS
El objetivo de este práctico es desarrollar un programa sencillo en JavaScript que permite jugar
al famoso juego de "Piedra, Papel o Tijeras" contra la computadora.
Descripción:
El juego de "Piedra, Papel o Tijeras" es un juego de manos en el que dos jugadores eligen entre
tres opciones: piedra, papel o tijeras. Las reglas son las siguientes:
- La piedra vence a las tijeras.
- Las tijeras vencen al papel.
- El papel vence a la piedra.
El programa que desarrollarás permitirá al usuario jugar contra la computadora. La computadora
elegirá una opción de forma aleatoria, y el usuario podrá ingresar su elección a través de la
consola. El programa determinará el ganador y mostrará el resultado por pantalla.
Pasos a seguir:

1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
2. Crea una función llamada obtenerJugadaComputadora que generará un número
aleatorio entre 0 y 2 para representar las opciones:
- 0 para "piedra",
- 1 para "papel" y
- 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.
Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
numércios y los strings “piedra”, “papel” y “tijeras.
Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
random.
3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
valor por consola.
4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
variable.
b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
c) Invoca la función determinarGanador pasando como argumentos las jugadas de
la computadora y del usuario. Almacena el resultado en una variable.
6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
resultado:
La computadora eligio: [ jugadaComputador]. El usuario eligio: [ jugadaUsuario].
El resultado fue: [Empate | Gana la computadora | Gana el usuario].
NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
tres párrafos.
EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
código para su correcta utilización.
EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
juego, es decir:
● Una jugada: gana el ganador de esa única jugada.
● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
el usuario gane una jugada y la computadora la otra.
● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.
*/

console.log('------- PIEDRA, PAPEL O TIJERAS --------');
console.log('---------- COMIENZA EL JUEGO! ----------');

const readlineSync = require('readline-sync');

// EXTRA Punto 1:
const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';

// EXTRA Punto 2 [primera parte]:
let cantidadDeJugadas = parseInt(readlineSync.question('Por favor ingrese a cuantas jugadas quiere terminar el juego (1, 2 o 3): ',
  {
    limit: ['1', '2', '3'],
    limitMessage: 'Ud. ingreso un valor incorrecto!',
  },
));

// Punto 2:
const JUGADAS_POSIBLES = [PIEDRA, PAPEL, TIJERAS];

function obtenerJugadaComputadora() {
  let generarRandom = Math.floor(Math.random() * 3);
  return JUGADAS_POSIBLES[generarRandom];
}

// Punto 3:
function obtenerJugadaUsuario() {
  let jugadaUsuario = readlineSync.question('Por favor ingrese su eleccion (piedra, papel o tijeras): ',
    {
      limit: [JUGADAS_POSIBLES],
      limitMessage: 'Ud. ingreso un valor incorrecto!',
    },
  );
  return jugadaUsuario.toLowerCase();
}

// Punto 4:
function determinarGanador(eleccionComputadora, eleccionUsuario) {
  if (eleccionComputadora === eleccionUsuario) {
    return 'Empate';
  } else if (
    eleccionComputadora === PIEDRA && eleccionUsuario === TIJERAS ||
    eleccionComputadora === PAPEL && eleccionUsuario === PIEDRA ||
    eleccionComputadora === TIJERAS && eleccionUsuario === PAPEL
  ) {
    return 'Gana la computadora';
  } else {
    return 'Gana el usuario';
  }
}

// EXTRA Punto 2 [continuación]:
let puntajeComputadora = 0;
let puntajeUsuario = 0;
let numeroDeJugada = 1;

while (cantidadDeJugadas > 0) {
  console.log('----------- JUGADA NUMERO: %i -----------', numeroDeJugada);

  // Punto 5:
  const jugadaComputadora = obtenerJugadaComputadora();
  const jugadaUsuario = obtenerJugadaUsuario();
  const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  // Punto 6:
  console.log('La computadora eligió: %s', jugadaComputadora);
  console.log('El usuario eligió: %s', jugadaUsuario);
  console.log('El resultado fue: %s', resultado);

  // EXTRA Punto 2 [continuación]:
  numeroDeJugada++;
  cantidadDeJugadas--;
  resultado === 'Gana la computadora' && puntajeComputadora++;
  resultado === 'Gana el usuario' && puntajeUsuario++;
};

console.log('------------ PUNTAJE FINAL -------------');
console.log('Computadora: %i', puntajeComputadora);
console.log('Usuario: %i', puntajeUsuario);

if (puntajeComputadora > puntajeUsuario) {
  console.log('LA COMPUTADORA ES LA GANADORA!');
} else if (puntajeComputadora < puntajeUsuario) {
  console.log('EL USUARIO ES EL GANADOR!');
} else {
  console.log('HAY UN EMPATE');
}

console.log('--------- EL JUEGO HA TERMINADO --------');