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