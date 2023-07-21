const carrito = []; //array
function agregar_producto(nombre, precio) { //funcion para agregar el producto
  carrito.push({ nombre, precio }); //agregar al carrito el objeto
  total += precio; //update de precio
}

function mostrar_carrito() { //mostrar el contenido del carritoo
  let mensaje = "carrito de compras:\n\n";
  for (const producto of carrito) {
    mensaje += `${producto.nombre} - $${producto.precio}\n`;
  }
  alert(mensaje);
}

function mostrar_total() { //mostrar el total
  alert(`Total: $${total.toFixed(2)}`);
}

let total = 0; //global variable total

while (true) {
  const opcion = parseInt(
    prompt(
      `seleccionar una opcion:
      1 agregar producto
      2 mostrar carrito
      3 chequear total
      4 terminar`
    )
  );

  switch (opcion) {
    case 1:
      const nombre_producto = prompt("ingresar el producto que desea comprar:");
      const precio_producto = parseFloat(
        prompt("ingresar el precio:")
      );//validar si es correcto
      if (isNaN(precio_producto)) { 
        alert("el precio ingresado no es correcto");
      } else { 
        agregar_producto(nombre_producto, precio_producto);
        alert("producto agregado al carrito");
      }
      break;
    case 2://mostrar el carrito actualizado
      if (carrito.length === 0) { 
        alert("el carrito esta vacio");
      } else {
        mostrar_carrito();
      }
      break;
    case 3://mostrar el total actualizado
      mostrar_total(); 
      break;
    case 4://salir del programa
      alert("gracias por su compra"); 
      break;
    default:
      alert("opcion no valida, favor elegir una opcion nuevamente");
      break;
  }
  if (opcion === 4){
    break;
  }
}
