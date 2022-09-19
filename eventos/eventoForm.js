const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();//me da acceso al evento, sin que me redirija, previene el evento por default

    console.log(e);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    console.log(e.target.method);//me da información del metódo
    console.log(e.target.action);//hacia donde apunta
}); 

//ejecutar una función no anónima :v

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    console.log('buscar una API...')
}