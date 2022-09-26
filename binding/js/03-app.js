//New binding
//Usado en POO ayuda a pasar variables a un objeto despues de enunciarlo

function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

//window binding
/*Puedo asignar una variable a la ventana global: sin el método window, la función marcaría error
cuando se crea una variable, JS siempre la va a buscar en la ventana global*/


window.color= 'azul profundo'
function noche(){
    console.log(color);
}

noche();