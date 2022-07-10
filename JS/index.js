// VARIABLES
let total = 0;
let productoFromUser;
const arrayProducto = [];
const arrayCategoria = [];
let contadorProd = 0;
let contadorCat = 0;



// FUNCIONES
function seleccionarProducto() {
    const productos = [];
    productos.push({nombre: 'producto1', precio: 3000});
    productos.push({nombre: 'producto2', precio: 5500});
    productos.forEach(x=> alert(x.nombre + '' + x.precio))
    const productoFromUser = prompt('Ingrese el nombre del producto a adquirir: ').toLowerCase();
    return(productoFromUser);
  }

  function calcularTotal(){
    let opcionSeleccionada = seleccionarProducto();

    const PRECIO1 = 3500;
    const PRECIO2 = 2000;
    

        if(!isNaN(opcionSeleccionada !== "")){
            let cantidadProducto = prompt('Ingrese la cantidad de producto que desea adquirir: ')
            alert('Opcion seleccionada: ' + opcionSeleccionada + ' Cantidad: ' + cantidadProducto);
            switch(opcionSeleccionada){
                case 'producto1':
                    total = PRECIO1 * cantidadProducto;
                    console.log(total);
                    break;
                case 'producto2':
                    total = PRECIO2 * cantidadProducto;
                    console.log(total);
                    break;
                default:
                    alert('Ingrese una opcion válida');
                    break;    
            }
        }else{
            alert('Seleccione una opción válida')
        }
        alert('Total: ' + total)
    }


    function registroClientes() {
        let cliente = [] ;
        for (let i = 0; i < 100 ; i++) {
            let nombre = prompt ("Ingrese su nombre");
            let apellido = prompt ("Ingrese su apellido");
            let edad = parseInt (prompt("Ingrese edad"));
            let email = prompt("Ingrese su email");
    
            let clientes = (new Clientes (nombre, apellido, edad, email));
            cliente.push(clientes);
        }
        return cliente;
    }

// OBJETOS 
class Producto { 
    constructor (id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
        return this;
    }
    
}

class Categoria { 
    constructor (id, nombre) {
        this.id = id,
        this.nombre = nombre
        return this;
    }
    
}

class Clientes { 
    constructor (id, nombre, apellido, edad, email ) {
        this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.email = email
        return this;
    }
    
}

// ARRAYS
const productoAdd = (nombre, precio) => {
    const addProdcuto = new Producto(parseInt (++contadorProd),nombre,precio)
    arrayProducto.push (addProdcuto);
}

const categoriaAdd = (nombre) => {
    const addCategoria = new Categoria(parseInt (++contadorProd),nombre)
    arrayCategoria.push (addCategoria);
}

const cleinteAdd = (nombre) => {
    const addCliente = new Clientes(parseInt (++contadorProd),nombre, apellido, edad, email)
    addCliente.push (addCliente);
}


let productoSeleccionado = productoAdd.filter(elemento => elemento.precio < 30000);

let categoriaSeleccionada = categoriaAdd.find(elemento => elemento.nombre = "calzado");

let productosSelec = productoAdd.map(function(precio){
    return Math.min(precio);
});