/*LOCAL STORAGE

La propiedad de sólo lectura localStorage te permite acceder al objeto local Storage; los datos persisten almacenados entre de las diferentes sesiones de navegación. 
localStorage es similar a sessionStorage (en-US). La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, 
los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.
*/

//PARA AGREGAR ELEMENTOS AL STORAGE
//el órden de los parámetros es: la llave y el valor(key, value)
localStorage.setItem('mood','Ojalá...');
// sessionStorage.setItem('mood', 'you don´t same anymore';

//***AGREGAR UN OBJETO AL STORAGE
//LOS DATOS QUE SE GUARDAN ALLÍ, DEBEN SER DE TIPO STRING

const producto = {
    nombre: 'Proteina isolate',
    precio: 276
}

const pasarString = JSON.stringify(producto);//esto comvierte el objeto en string para poder ser guardado en el storage
localStorage .setItem('producto', pasarString);//(nombre del objeto, nombre de la constante de JSON)

//AGREGAR UN ARRAY AL STORAGE

const meses = ['Enero', 'Febrero', 'Marzo'];

// const meseString = JSON.stringify(meses);
// localStorage.setItem(meses, meseString);
//localStorage.setItem('meses',JSON.stringify(meses));//modo simple

//**OBTENER ITEM ALMACENADO
//se escribe en el parámetros el nombre del objeto, array o el elemento a buscar

const pasarJson = localStorage.getItem('producto');
console.log(pasarJson);// esto me trae el objeto en formato string, hay que resetearlo:
console.log(JSON.parse(pasarJson));

//ARRAY
const Pasarmeses = localStorage.getItem('meses');
console.log(JSON.parse(Pasarmeses));

// *ELIMINAR ITEMS
localStorage.removeItem('miGato');
//*ACTUALIZAR
//no hay un comando para actualizar en el storage, la opción es resetear el objeto o el array, agregarlo y luego añadirlo con get

const newMeses = JSON.parse(localStorage.getItem('meses'));
console.log(newMeses);
newMeses.push('nuevo mes Abril');
console.log(newMeses);
localStorage.setItem('meses', JSON.stringify(newMeses));