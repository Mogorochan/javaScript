//validar si estás conectado para poder realizar una publicación o hacer uso de la misma app
//*Eventos
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);
//*FUNCIONES

function actualizarEstado(){
    if (navigator.onLine) {
        console.log('Estás conectado');
    }else{
        console.log('No estás conectado');
        
    }
}