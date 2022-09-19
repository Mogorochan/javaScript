/*sintaxis: condición ? expr1 : expr2 
Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable isMember, se puede usar esta declaración:
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00")

*/
const autenticado = false;
const puedePagar = false;

// console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No, no está habilitado'); Ternario simple
document.write(autenticado ? puedePagar ? 'Sí, está autentificado y puede pagar' :'Sí, está autentificado y no puede pagar' 
:'No, no está habilitado');//ternario anidado