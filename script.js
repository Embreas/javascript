//variables globales
let carrito = '';
let total = 0;

//carrito - agregar producto
function agregar_producto() {
  const nombre = prompt('ingresar el nombre del producto:'); //pedir nombre del producto
  const precio = parseFloat(prompt('ingresar el precio:')); //pedir valor del producto
  if (isNaN(precio)) { //chequear que el precio sea un numero
    alert('el precio ingresado no es valido');
    return;
  }
  carrito += `${nombre} - $${precio}\n`; //agrega el producto al carrito
  total += precio; //actualiza el total
  alert(`producto agregado al carrito:\n\n${carrito}\ntotal: $${total.toFixed(2)}`); //mostrar carrito actualizado
}

//compra - terminar la compra
function finalizarCompra() {
  alert(`carrito de compras:\n\n${carrito}\ntotal: $${total.toFixed(2)}`); //mostrar carrito y total
  carrito = ''; //reinicia el carrito
  total = 0; //reinicia el total
}

while (true) {
  const user_opcion = parseInt(prompt("seleccione una opcion:\n1. agregar producto\n2. finalizar compra\n"));
  switch (user_opcion) {
    case 1: //caso 1 funcion agregar producto
      agregar_producto();
      break;
    case 2: //caso 2 finalizar compra
      finalizarCompra();
      break;
    default: //default indicando error
      alert("valor seleccionado incorrecto, seleccione una opcion valida");
      break;
  }
  if (user_opcion === 2) {
    break; //salir del bucle dentro de while 
  }
}