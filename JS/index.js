// VARIABLES
let total = 0;
let productoFromUser;
const arrayProducto = [];
const arrayCategoria = [];
let contadorProd = 0;
let contadorCat = 0;

// FUNCIONES
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


// ARRAYS
const productoAdd = (nombre, precio) => {
    const addProdcuto = new Producto(parseInt (++contadorProd),nombre,precio)
    arrayProducto.push (addProdcuto);
}





let productos = [
      {id: 1, nombre: "sara", precio: 6500, img: "../multimedia/img/heels3.jpg"},
      {id: 2, nombre: "sofia", precio: 7000, img: "../multimedia/img/heels3.jpg"},
      {id: 3, nombre: "selena", precio: 7000, img: "../multimedia/img/heels3.jpg"},
      {id: 4, nombre: "siena", precio: 8000, img: "../multimedia/img/heels3.jpg"},
      {id: 5, nombre: "mirna", precio: 12500, img: "../multimedia/img/heels3.jpg"},
      {id: 5, nombre: "miel", precio: 25000, img: "../multimedia/img/heels3.jpg"},
      {id: 5, nombre: "muna", precio: 35000, img: "../multimedia/img/heels3.jpg"},
      {id: 5, nombre: "marie", precio: 22000, img: "../multimedia/img/heels3.jpg"}
    ];
    
    let mainProducts = document.getElementById("mainProducts");
    
    for(const producto of productos){
      let item = document.createElement("div");
      item.innerHTML = `<h2>Id: ${producto.id}</h2>
                        <p>Producto: ${producto.nombre}</p>
                        <b>Precio: ${producto.precio}</b>
                        <img src=${producto.img}>`;
    
      mainProducts.append(item);
    }

// FILTRAR PRODUCTOS
// let productos = [
//     {id: 1, nombre: "camisa", precio: 1001},
//     {id: 2, nombre: "zapato", precio: 1020},
//     {id: 3, nombre: "media", precio: 1500},
//     {id: 4, nombre: "gorra", precio: 2000},
//     {id: 5, nombre: "pantalon", precio: 2500}
//   ];
  
//   let container = document.getElementById("container");
//   let filtro = parseInt(prompt("ingrese el precio mínimo"));
  
//   let filtrados = productos.filter(elemento => elemento.precio > filtro);
  
//   for(const producto of filtrados){
//     let item = document.createElement("div");
//     item.innerHTML = `<h2 id="pepito">Id: ${producto.id}</h2>
//                       <p>Producto: ${producto.nombre}</p>
//                       <b>Precio: ${producto.precio}</b>
  
//     container.append(item);
//   }
