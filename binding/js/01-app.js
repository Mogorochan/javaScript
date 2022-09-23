//implicit binding
//va a referir, con la palabra THIS, donde están los valores

const usuario = {
    nombre: 'Cosme',
    apellido: 'Fulanito',
    edad: 38,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y quiero una copilla`)
    },
    Moe: {
        Lenny: 'vete Homero',
        Carl: 'sí, no te queremos ver',
        dialogo(){
            console.log(`${this.Lenny} ${this.Carl}... Homero? no soy ese Mesee Homero`);
        }
    }
}

usuario.informacion();
usuario.Moe.dialogo();