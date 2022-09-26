//Modelo de concurrencia o loop de eventos
/*Se debe partir desde el principio que JS es mono proceso, lo que implica que en su stack o pila de ejecucón
va a pasar las funciones, una por una. También se le conoce como "De un solo hilo"
No obstante,  el loop de eventos, me caracteriza qué cosas ejecuta con mayor prioridad JS*/

/*En el siguiente código, los console.log se va primero al stack, los SetTimeout se van a la cola,cuando ya no hay 
mas console qué llamar, los ejecuta, en este caso las promises tienen mayor prioridad que los SetTimeout */

console.log('Primero');

setTimeout(()=>{
    console.log('Segundo');
},0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');

}, 0);

new Promise((resolve) => {
    resolve('Desconocido...');
}).then(console.log )

console.log('Último');