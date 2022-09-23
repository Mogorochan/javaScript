/*La declaración try...catch señala un bloque de instrucciones a intentar (try), 
y especifica una respuesta si se produce una excepción (catch).*/

// Si agregamos algo más de código, puedes ver que el error previo hace que este código no se ejecute
// console.log(2 + 2);


// Si lo rodeamos con un try catch, nuestra función puede intentar hacer algo, o fallar, pero evitará que el código se ejecute
try {
    hola();
} catch (error) {
    console.log(error)
}

console.log(2 + 2 );

/*Ahora, no todo se va a rodear con un try catch, solamente partes criticas, como una consulta a una API, autenticar a un usuario, 
acciones que nos permitan que en caso de fallar nuestra aplicación continue funcionando pero también obtener un mensaje de error...*/