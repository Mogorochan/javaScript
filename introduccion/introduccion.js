/*JS maneja tipado dinámico, es decir, él mismo detecta qué tipo de dato es. Sin embargo 
también tiene algo llamado como primitive value, básicamente, son datos que no son un objeto y no tienen método,
Actualmente son 6: undefined, string, number, bigint, boolean y symbol. 
Null: es un tipo primitivo especial, que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra null;
*/
//unarios ++ incremento, -- decremento

var edadX, edadY

edadX = 34;
edadY = 28;

console.log(++ edadY);
//Asignacion +=, -=, *=, /=, %= módulo

var a = 11;
var b = 5;

var c = a % 5; //Residuo o resto de una division
console.log(c); 

a += b;    
console.log(a);

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

/****************** DOM ***********
Se puede interpretar como la estructura de árbol que se maneja entre las etiquetas
y como estas se relacionan*/
