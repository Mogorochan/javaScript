//Saber cuándo se está en una página, para pausar ciertos servicios como los vídeos
document.addEventListener('visibilitychange', () => {//El evento que registra los cambios de página
    //console.log(document.visibilityState);//me avisa sí esta visible u oculto 
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar vídeo');
    } else {
        console.log('Parar vídeo');
        
    }
});
