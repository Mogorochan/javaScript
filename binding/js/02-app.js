//*Explicit binding
//este tiene tres formas para referenciar la información, por medio de Call o Apply


//normalmente los datos están en diferentes objetos y arrays, explicit nos ayuda a recopilarlos
function persona(el1,el2){
    console.log(`Mi nombre es ${this.nombre} y me gusta tomar una ${el1} y una ${el2}`);
}

const información = {
    nombre: 'Cosme Fulanito'
}

const bebida = ['copilla', 'cervecilla'];

persona.call(información, bebida[0], bebida[1]); // con call, debemos pasar cada elemento 
persona.apply(información, bebida)// solo llamamos el objeto y el array, y se encarga de imrprimir el resto

//bind te crea una nueva funcion, su sintaxis es similar a Call

const newFunction = persona.bind(información, bebida[0], bebida[1] );
newFunction();