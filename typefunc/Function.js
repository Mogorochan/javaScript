/* Compilaciones de tipos de funciones
Declaradas, expresadas, flecha y autoejecubles anonimas
*/
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
    window.alert('Hello, It´s me')
})() // con esto, siempre se ejecuta

//autoejecutable flecha 

const otro = (()=>{
    window.alert('Siguéla')
})()

//FUNCIONES  ANÓNIMAS AUTOEJECUTABLES 
//no se le asigna un nombre :v

const ejemplo = (function(){
    console.log('no sé')
})()


