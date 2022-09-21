// Vamos a definir un promise
const aplicarDescuento = new Promise( (resolve, reject) => { //Resolve, para ejecutar el promises. Reject sí hay algún error
    
    
    const descuento = true;//acá puedo manipular los valores del promises, descritos más abajo
    
    if(descuento) {//evaluación de la promesa, ojo, debe de descargar el listado de productos de la empresa
        resolve('Descuento Aplicado'); 
    } else {
        reject('No se pudo aplicar el descuento');
    }

});
/*Esto me permite acceder a los valores de la promesa ejecutada arriba.
Recuerda:.the me ayuda a mostrar lo resolve(resultado correcto) y .catch reject(errores)
*/
aplicarDescuento
    .then( resultado =>  {
        console.log(resultado);
    }).catch( error => {
        console.log(error);
    });

    console.log(aplicarDescuento);

/* En los Promises hay 3 valores posibles,
 *pendiente, no se ha cumplido o rechazado...por lo general se da cuando defines el promises sin nada
*Fullfilled - se ha cumplido
 *Rejected - se ha recahzado o no se pudo cumplir*/




// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

function descuento() {
    console.log('Aplicando el Descuento...');
 }