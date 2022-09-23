// Async Await 

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;//manipulo el try

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
                
            }            
        }, 3000);

    });
}

// Async await
async function ejecutar() {//funcion padre
    try {
        const respuesta = await descargarClientes(); //Funcion hijo bloqueante:Detine la ejecució de esta funcion hasta que sea haya ejecutado el promise
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}
ejecutar();

console.log( 2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta