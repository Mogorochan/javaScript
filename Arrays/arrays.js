//Arrays son datos similares agrupados entre llaves y solo tiene valores, a diferencia de los objetos que tiene llave y valor

// Arreglos:
var nombres = ['Natalia', 'Julian', 'Pedro', 'Diego'];
var chucherias = ['chocolate', 'yogurt griego', 'gelletas cocaleras', 'Maní'];

/*con el método length se recorre cada una de las posiciones y me las imprime
en una lista. Se inicializa el metodo lenght en -1 ya que debe ser menor a la posición
en la que incia el arreglo(los arreglos siempre inician desde la posición 0):
*/
console.log(nombres.length); //esta es una forma de recorrer el arreglo
for( var i = 0; i <= nombres.length -1; i++){
    console.log(nombres[i]);
}
/*Con el método For Each, es necesario trabajar el  array por medio de una función
e indicar que se van a ir imprimiendo cada uno de sus elementos
*/

chucherias.forEach(function(elemento, indice){
    console.log(elemento, indice)
})
    
/*.MAP
Va a llenar una variable con un arreglo nuevo. Es la unica diferencia entre el .foreach y el.map
*/
nombres.push('Yamid');//El metodo Push, agrega un elemento al arreglo , pero en la última posición
 nombres.unshift('Laura');//El metodo unshift agrega el elemento al inicio del arreglo
console.log(nombres);
/*para borrar elementos
nombres.shift(); //borra el primer elemento del array
nombres.pop();// borra el ultimo elemento del array
nombres.splice(1,1)//borra el elemento que indiquemos en la primera posicion de sus
parametros, la segunda posicion indica la cantidad de elementos a borrar */

var posicion = nombres.indexOf('Julian');//método para filtrar la posicion de un elemento
console.log(posicion);

//DESTRUCTURACION

//Se puede de dos formas: la primera es copiar exactamente todas las posiciones
 /*const [cero, uno, dos] = nombres;
 console.log(dos) //La posicion dos de nuestro arreglo es Julian ya que nuestro arreglo se le agrego más participantes.*/
 //La otra es indicar la posición por medio de comas:
 const [, ,dos ] = nombres;
 console.log(dos);
//También se puede traer solo una posición y el resto de posiciones traerlas por medio de un arreglo

const [,primero,...cuarto] = nombres;
console.log(cuarto);

