//Un objeto agrupa todo en una sola variable

//objeto literal

const depressive = {
  sleep: "10 horas o más",
  mood: "ojalá te lleve me lleve",
  relationShip: "esa mierda no existe",
};
console.log(depressive);
//console.log(depressive.sleep)Para acceder a los elementos de un object, se utiliza la sintaxis de punto

/*Agregar y eliminar propiedades al objeto
depressive.imagen = "imagen.jpg";
delete depressive.imagen;
 */

//Destructuración del objeto
//Extraer elemetos y ponerlo en una variable
const anxiety = {
  sleep: "¿qué es eso?",
  mood: "Me los llevo a todo",
  relationShip: "esa mierda no existe, yo soy la relacion :v",
};

const { relationShip, mood } = anxiety;
console.log(relationShip, mood);

//Objetos anidados
const anxietyDepress = {
  sleep: "10 horas o más",
  mood: "ojalá te lleve me lleve",
  relationShip: {
    love: "esa mierda no existe",
    Angry: "prepárate para los problemas",
  },
};
//destructuracion anidada
const {
  sleep,
  relationShip: { Angry },
} = anxietyDepress;
console.log(Angry);

//OBJECT METHODS 

/*Los objetos pueden modificar sus valores, a pesar de que
están definidas en una constante. Yo puedo, por medio de
la sintaxis de punto, modificar cualquier valor de las variables
internas. Love le puedo asignar cualquier valor */
//Congelar un objeto
/**Se debe activar el modo estricto en la parte superior:
 "use strict";
*/
Object.freeze(anxietyDepress); //no se puede modificar

console.log(Object.isFrozen(anxietyDepress));

/** UNIR DOS OBJETOS
 * Por medio del method assign: 
  const newconst = Object.assign(anxiety, depressive);
 * Por medio del Spread operator:
  const newconst = {...anxiety,...depressive}
 */
  

  //FUNCIONES EN OBJETOS
  //This: una forma de referirse al objeto mismo

  const diagnostic = {
    anxiety: "moderada",
    depression: "alta",
    panicAttack: "moderada",
    sleepess: "3 días máximo",
    mostrarInfo: function(){
        console.log(`Su diagnostico es: ${this.sleepess}`)
    }
  }
  diagnostic.mostrarInfo();

  //OBJECT CONSTRUCTOR

function Diagnostic(sleep,mood,relationShip){
    this.sleep = sleep;
    this.mood = mood;
    this.relationShip = relationShip;
}

const informe = new Diagnostic('ha mejorado', 'aceptable', 'no hay avances en ese tema');
console.log(informe); 