var carrito = [];
var total = 0;

function agregarProducto(nombre, precio) {
  var producto = {
    nombre: nombre,
    precio: precio
  };
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  var listaProductos = document.getElementById("lista-productos");
  listaProductos.innerHTML = "";
  total = 0;
  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var listItem = document.createElement("li");
    listItem.innerHTML = producto.nombre + " - $" + producto.precio + " <button class='eliminar' onclick='eliminarProducto(" + i + ")'>Eliminar</button>";
    listaProductos.appendChild(listItem);
    total += producto.precio;
  }
  var totalElemento = document.getElementById("total");
  totalElemento.innerHTML = total.toFixed(2);
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function comprar(){
  window.location = "pago.html"; 
}