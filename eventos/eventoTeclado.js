const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');
})
busqueda.addEventListener('blur', () => {
    console.log('he perdido su foco');//cuando se sale del teclado, perfecto para validaciones
})
busqueda.addEventListener('copy', () => {
    console.log('texto que fue copiado');
})
busqueda.addEventListener('paste', () => {
    console.log('texto pegado');
})
busqueda.addEventListener('input', (e) => {//es un todo en uno, lo que no emular es el evento BLUR
   if(e.target.value === ''){
     console.log('fallo la validación');
    }
})
