//EVENTOS
/* Son acciones ene el código que se disparan cuando el usuario interactúa con nuestro código.
Ejemplo: dar clic en un botón para abrir un módulo*/

//EVENTOS CON EL MOUSE

const navegador = document.querySelector('.navegacion'); //selector de la página para poder usar los eventos sin error

//registrar un evento

navegador.addEventListener('click', () =>{
    console.log('Clic en el nav');
})
navegador.addEventListener('dblclick', () =>{
    console.log('Doble clic en el nav');
})
navegador.addEventListener('mouseenter', () =>{
    console.log('Entra cuchillo');
})
navegador.addEventListener('mouseout', () =>{
    console.log('Sale las tripas');
})



