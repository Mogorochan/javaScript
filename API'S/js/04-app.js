//*Ejecución pantalla completa 
//conexion con los elementos de HTML
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

//*Eventos

abrirBtn.addEventListener('click', pantallaCompleta);
cerrarBtn.addEventListener('click', cerrarPantallaCompleta);

//*FUNCIONES

function pantallaCompleta(){
    //con este método, podemos escoger qué elementos queremos que corra en fullscreen
    document.documentElement.requestFullscreen();
};

function cerrarPantallaCompleta(){
    document.exitFullscreen();
};