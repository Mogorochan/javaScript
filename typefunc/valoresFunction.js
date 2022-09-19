//FUNCIONES CON USO DE VALORES DE OTRAS FUNCIONES
//PRIMERO, hay que entender el proceso básico:

const ejemploBase = (a,b)=>{
    return a + b;//con return yo debo guardar el retorno en alguna variable o constante
}
const resultado = ejemploBase(5, 7); //en la inicializacion de la contaste, guardo lo que retorna el cuerpo de la función

console.log(resultado);//acá llamo la constante que guardó, en este caso, mi resultado

//Más dinámico:

var total = 0; //la variable inicializa en 0 y se le va a ir agregando su valor, con la función

function agregarCarrito(precio){
    return total += precio; //acá estoy pasando el incrementador que va a alterar el parámetro
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);
total = agregarCarrito(400);
//console.log(total);
//ahora, vamos a utilizar el resultado de la primera función:

function calcularImpuesto(total){//se toma la variable inicializada líneas arriba
    return total * 1.19;
}

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`) //se imprime la constante que tiene el resultado
console.log(`El total a  pagar sin impuestos es de: ${total}`);