//Comunicaciòn entre funciones

//esto se puede lograr aprovechando el hosting de las funciones declaradas, se haría de la siguiente manera:


iniciarApp();//se puede llamar antes de crear la función, por eso se puede anidar a otras funciones
function iniciarApp(){
    document.write('Iniciando la aplicación...')
    bienvenida()
}

function bienvenida(){
    document.write('Hola, querido usuario');
    autentifcando('Natalia');
}

function autentifcando(usuario){
    document.write('Autemtificando usuario, espere, por favor...');
    document.write(`Usuario autentificado: ${usuario} ¡Bienvenido!`)
}