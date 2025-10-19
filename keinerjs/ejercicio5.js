const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inventario = [];

function agregarProducto() {
  rl.question("Ingrese código del producto: ", (codigo) => {
    if (inventario.some(p => p.codigo === codigo)) {
      console.log("El código ya existe.");
      return mostrarMenu();
    }

    rl.question("Ingrese nombre del producto: ", (nombre) => {
      rl.question("Ingrese precio del producto: ", (precioStr) => {
        const precio = parseFloat(precioStr);
        if (isNaN(precio) || precio <= 0) {
          console.log("El precio debe ser un número positivo.");
          return mostrarMenu();
        }

        rl.question("Ingrese cantidad en stock: ", (stockStr) => {
          const stock = parseInt(stockStr);
          if (isNaN(stock) || stock < 0) {
            console.log("El stock debe ser un número entero positivo.");
            return mostrarMenu();
          }

          const estado = stock > 0 ? "Disponible" : "Agotado";

          inventario.push({
            codigo,
            nombre,
            precio,
            stock,
            estado
          });

          console.log(`Producto "${nombre}" agregado correctamente.`);
          mostrarMenu();
        });
      });
    });
  });
}

// Actualizar stock
function actualizarStock() {
  rl.question("Ingrese el código del producto a actualizar: ", (codigo) => {
    const producto = inventario.find(p => p.codigo === codigo);

    if (!producto) {
      console.log("Producto no encontrado.");
      return mostrarMenu();
    }

    rl.question("Ingrese el nuevo stock: ", (nuevoStockStr) => {
      const nuevoStock = parseInt(nuevoStockStr);
      if (isNaN(nuevoStock) || nuevoStock < 0) {
        console.log("El stock debe ser un número entero positivo.");
        return mostrarMenu();
      }

      producto.stock = nuevoStock;
      producto.estado = nuevoStock > 0 ? "Disponible" : "Agotado";

      console.log(`Stock del producto "${producto.nombre}" actualizado a ${nuevoStock}.`);
      mostrarMenu();
    });
  });
}

function listarProductos() {
  if (inventario.length === 0) {
    console.log("No hay productos registrados.");
    return mostrarMenu();
  }

  let ordenados = [...inventario].sort((a, b) => a.nombre.localeCompare(b.nombre));

  console.log("\nLISTA DE PRODUCTOS:");
  ordenados.forEach(p => {
    console.log(`Código: ${p.codigo} | Nombre: ${p.nombre} | Precio: $${p.precio.toFixed(2)} | Stock: ${p.stock} | Estado: ${p.estado}`);
  });
  console.log();
  mostrarMenu();
}

function mostrarMenu() {
  console.log(`
   MENÚ DE INVENTARIO

1. Agregar producto
2. Actualizar stock
3. Listar productos
4. Salir
`);
  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        actualizarStock();
        break;
      case "3":
        listarProductos();
        break;
      case "4":
        console.log("Saliendo del sistema...");
        rl.close();
        break;
      default:
        console.log("Opción no válida.");
        mostrarMenu();
    }
  });
}
mostrarMenu();
