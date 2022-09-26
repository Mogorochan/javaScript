//SELF
/*Se utiliza en los services worker ya que en ellos no se puede usar la Windows.global*/

// reemplaza la sintaxis de window.onload 
self.onload = () => {
    console.log('Ventana lista');
}

//otra forma es reemplazando las funciones de This

const producto = {
    nombre: 'monitor 20 pulg',
    precio: 30,
    disponible: true,
    mostraInfo: function(){//no usar arrow function, el scope no se cumple aquí
        const self = this;
        return `El producto: ${self.nombre} tiene un precio de ${self.precio}`
    }
}
console.log(producto.mostraInfo());

/*Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

-No tiene sus propios enlaces a this o super y no se debe usar como métodos.
-No tiene argumentos o palabras clave new.target.
-No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
-No se puede utilizar como constructor.
-No se puede utilizar yield dentro de su cuerpo. */