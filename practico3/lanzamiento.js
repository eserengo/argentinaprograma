/*
EJERCICIO 1: CUENTA REGRESIVA
En este ejercicio, queremos que imprima una cuenta regresiva de lanzamiento de un
cohete a Marte. Dicha cuenta irá desde 10 hasta el despegue. Específicamente,
queremos que:
Cree un bucle de 10 a 0. Ayuda: inicializador: let i = 10;                  ( 1.A )
Para cada iteración, imprima por consola usando console.log.
● Diferentes números de iteración requieren que se coloque un texto diferente en
el párrafo para esa iteración (necesitará una declaración condicional):     ( 1.B )
- Si el número es 10, imprima "Cuenta regresiva 10" en el párrafo.          ( 1.C )
- Si el número es 0, imprime "Lanzamiento!", al párrafo.                    ( 1.D )
- Para cualquier otro número, imprima solo el número al párrafo.            ( 1.E )
● ¡Recuerda incluir un iterador! Sin embargo, en este ejemplo estamos contando
hacia atrás después de cada iteración, no hacia arriba, por lo que **no** quiere i++
— ¿cómo se itera hacia abajo?                                               ( RESPUESTA: SE ITERA HACIA ABAJO CON i-- )
● Debes guardar este programa en un archivo llamado lanzamiento.js
*/

for (let i = 10; i >= 0; i--) {           //( 1.A )
  if (i === 10) {                         //( 1.B )
    console.log('Cuenta regresiva 10');   //( 1.C )
  } else if (i === 0) {
    console.log('Lanzamiento!')           //( 1.D )
  } else {
    console.log(i);                       //( 1.E )
  }
};
