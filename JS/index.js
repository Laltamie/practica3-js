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

        if(!isNaN(opcionSeleccionada !== "")){
            let cantidadProducto = prompt('Ingrese la cantidad de producto que desea adquirir: ')
            alert('Opcion seleccionada: ' + opcionSeleccionada + ' Cantidad: ' + cantidadProducto);
            switch(opcionSeleccionada){
                case 'producto1':
                    total = Producto.precio * cantidadProducto;
                    console.log(total);
                    break;
                case 'producto2':
                    total = Producto.precio * cantidadProducto;
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


// ARRAYS
const productoAdd = (nombre, precio) => {
    const addProdcuto = new Producto(parseInt (++contadorProd),nombre,precio)
    arrayProducto.push (addProdcuto);
}

const categoriaAdd = (nombre) => {
    const addCategoria = new Categoria(parseInt (++contadorProd),nombre)
    arrayCategoria.push (addCategoria);
}


let producto = document.getElementById("product-sara");
console.log(producto);
console.log(producto.innerHTML);
console.log(producto.innerText);



