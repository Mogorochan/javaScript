//conexion con los elementos de HTML
const notificarBtn = document.querySelector('#notificar');

//event listener
/*notifica al usuario si quiere dar permisos para recibir notificaciones.
 Como depende de una respuesta, la mayoría de API'S funcionan con promesas*/
notificarBtn.addEventListener('click', () =>{
    Notification
    .requestPermission()
    .then(resultado =>{
        console.log('El resultado ', resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>{
    if (Notification.permission === 'granted') {
        new Notification('Está es la noticación', {
            icon: 'img/INTERASEO.jpg',
            body: 'JULIIIIIIIIIIIIIII!!!!'
        });
    }
});