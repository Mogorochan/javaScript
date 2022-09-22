document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver((entries) => {//me va a reportar cuando, por medio del scroll, una elemento está visible o no
        console.log(entries[0]);
    });//scroll infinito. OJO: este paso solo lo crea

    observer.observe(document.querySelector('.premium'));
});