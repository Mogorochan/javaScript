/*EVENT BUBBLING 
evento está en un elemento dentro de otro elemento y ambos elementos han registrado un identificador para ese evento.
 Es un proceso que comienza con el elemento que desencadenó el evento y luego asciende a los elementos que lo contienen en la jerarquía.
  En el burbujeo de eventos, el evento primero es capturado y manejado por el elemento más interno y luego se propaga a los elementos externos.
*/


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation()//esto evita que se realice el bubbling
    console.log('click en card');
})
infoDiv.addEventListener('click', e => {
    e.stopPropagation()//esto evita que se realice el bubbling
    console.log('click en info');
})
titulo.addEventListener('click', e => {
    e.stopPropagation()//esto evita que se realice el bubbling
    console.log('click en titulo');
})
