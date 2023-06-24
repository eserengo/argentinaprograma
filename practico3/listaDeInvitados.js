/*
EJERCICO 2: LISTA DE INVITADOS
En este ejercicio, que guardaremos en un archivo listaDeInvitados.js, queremos que
tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de
invitados. Pero no es tan fácil: no queremos dejar entrar a Jose y Sofia porque son
codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para
admitir invitados y otra para rechazar invitados.
La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y   (2.A)
Emilia.
Específicamente, queremos que:
● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.                (2.B)
Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida             (RESPUESTA: la condición de salida es cuando el 
necesita?                                                                                    iterador supere la longitud (length) del arreglo de personas)
● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es
igual a "Jose" o "Sofia" usando una declaración condicional:                                 (2.C)
- Si es así, concatene el elemento al arreglo de rechazados.                                 (2.D)
- Si no es así, concatene el elemento al arreglo de admitidos.                               (2.E)
● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de
invitados admitidos y otra para imprimir la lista de invitados rechazados:                   
a. Para la lista de invitados admitidos deberás imprimir por consola un
mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por
tantos párrafos como tenga el arreglo admitidos conteniendo los
respectivos nombres de los invitados.                                                        (2.F.a)
b. Para la lista de invitados rechazados deberás imprimir por consola un
mensaje inicial que dirá: "La lista de invitados rechazados es:”, seguido por
tantos párrafos como tenga el arreglo rechazados conteniendo los
respectivos nombres de los invitados.                                                        (2.F.b)
*/

const listaDePersonas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];    //(2.A)

let listaDeInvitadosAdmitidos = [];
let listaDeInvitadosRechazados = [];

for (let i = 0, l = listaDePersonas.length; i < l; i++) {                                               //(2.B)
  if (listaDePersonas[i] === 'Jose' || listaDePersonas[i] === 'Sofia') {                                //(2.C)
    listaDeInvitadosRechazados.push(listaDePersonas[i]);                                                //(2.D)
  } else {
    listaDeInvitadosAdmitidos.push(listaDePersonas[i]);                                                 //(2.E)
  }
};

console.log('La lista de invitados admitidos es:');                                                     //(2.F.a)
for (let admitido of listaDeInvitadosAdmitidos) {
  console.log(admitido);
};

console.log('La lista de invitados rechazados es:');                                                     //(2.F.b)
for (let rechazado of listaDeInvitadosRechazados) {
  console.log(rechazado);
};

/*
● EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos
listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los
nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
“ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos
deberás imprimir: “La lista ordenada de invitados admitidos es:”.
*/

let listaOrdenadaDeInvitadosAdmitidos = [];

for (let i = 0, l = listaDeInvitadosAdmitidos.length; i < l; i++) {
  for (let j = i, l = listaDeInvitadosAdmitidos.length; j < l; j++) {
    if (listaDeInvitadosAdmitidos[i] > listaDeInvitadosAdmitidos[j]) {
      let temp = listaDeInvitadosAdmitidos[i];
      listaDeInvitadosAdmitidos[i] = listaDeInvitadosAdmitidos[j];
      listaDeInvitadosAdmitidos[j] = temp;
    }
  }
  listaOrdenadaDeInvitadosAdmitidos.push(listaDeInvitadosAdmitidos[i]);
};

console.log('La lista ordenada de invitados admitidos es:');
for (let invitado of listaOrdenadaDeInvitadosAdmitidos) {
  console.log(invitado);
};

//NOTA: La lista de invitados rechazados ya está ordenada alfabeticamente por defecto.