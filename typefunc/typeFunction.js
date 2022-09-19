/* Compilaciones de tipos de funciones
Declaradas, expresadas, flecha y autoejecubles anonimas
*/

//La sintaxis básica de una funcion, sea el tipo que sea, es la siguiente:
function sumar(a, b){//lo que está dentro de la función son los parámetros, no son los valores reales, son solo variables
    console.log(a + b);//lo que está dentro de los corchetes es el cuerpo de la función, y se escribe cómo van a funcionar los parámetros
}
sumar(3,89);//lo que se pone como tal dentro de los paréntesis son los argumentos

//ahora, una sintaxis más dinamica

const introduccion = (nombre, apellido)=>{
    window.alert(`Hola ${nombre} ${apellido} bienvenido a este horrible mundo`);
}
introduccion('Natalia', 'López');
//PARÁMETROS POR DEFAULT
//SE UTILIZA LAS COMILLAS(algo similar a las posiciones de los array)Sí entra un argumento, este se imprime, de lo contrario, solo lo salta:
const saludarDefault = (nombre, apellido = '')=>{
    window.alert(`Hola ${nombre} ${apellido} bienvenido a este horrible mundo`);
}
saludarDefault('Natalia'); //solo saluda con el nombre
//AHORA BIEN, SI SE NECESITA PASAR UN PARÁMETRO EN ESPECIFICO, LA FUNCIÓN PUEDE TOMAR UN OBJETO LITERAL

function saludarObjets({nombre = '-', apellido = '.'}) {
    console.log(`Hola ${nombre} ${apellido}`)
};
 
saludarObjets({ apellido: 'Lazaro' }); // Solo especificas el apellido

//FUNCION DECLARADA (básica)
/*La particularidad de esta función, es que puedo llamarla sin declararla, 
es decir, puedo llamarla líneas arriba y después crearla (Elevación de las
 variables o Hosting)
*/
function saludar(saludo){    //acá se declara
    document.write(saludo)
}
saludar('ha vuelto a suceder!!') // acá se llama

function continuar(primer, segundo){
    console.log( `Inserte los siguientes versos ${primer} ${segundo} `) // concatenacion con backtick ` `
}
continuar('No lo logro', 'Entender')

//FUNCIONES EXPRESADAS
//No existe el efecto hosting o elevacion

const disociar = function(){
    console.log('Ha vuelto a suceder, no lo puedo entender')
}
disociar()

//FUNCIONES FLECHA


const cancion = (parte1, parte2) =>{
    console.log(parte1, parte2)
}
cancion('solo fui victima de la ocasion', 'Soy un conjunto de errores ')

//FUNCIONES AUTOEJECUTABLES
/*Función que se ejecuta por evento, por ejemplo, cuando un 
abre una página se ejecuta: un saludo*/
 
const saludo = (function(){
    console.log('Hello, It´s me')
})() // con esto, siempre se ejecuta

//autoejecutable flecha 

const otro = (()=>{
    console.log('Siguéla')
})()

//FUNCIONES  ANÓNIMAS AUTOEJECUTABLES 
//no se le asigna un nombre :v

const ejemplo = (function(){
    console.log('no sé')
})()

