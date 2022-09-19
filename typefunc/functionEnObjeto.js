// const reproductor = {
//     reproducir: function(track){
//         console.log(`Reproduciendo canción con el track #${track}`)
//     },
//     pausar: function(){
//         console.log('pausando...')
//     },
//     playlist: function(){
//         console.log('Sonando desde la playlist Soul')
//     }
// }
//funciones flechas
const reproductor ={
    cancion: '',
    reproducir: track => console.log(`Reproduciendo canción con el track #${track}`),
    pausar: () => console.log('pausando...'),
    playlist: () => console.log('Sonando desde la playlist Soul'),

    set nuevaCancion(cancion){//es una forma de agregar información
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`Reproduciendo: ${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Mi buen amor'
reproductor.obtenerCancion;//no es necesario pasar el parametro
reproductor.reproducir(5);
reproductor.reproducir(15);
reproductor.pausar();
reproductor.playlist();