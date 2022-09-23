document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver((entries) => {//me va a reportar cuando, por medio del scroll, una elemento está visible o no
        if(entries[0].isIntersecting){
            console.log('Ya está visible');
        }      
    });//scroll infinito. OJO: este paso solo lo crea

    observer.observe(document.querySelector('.premium'));//aquí observa el elemento que se pasa
});