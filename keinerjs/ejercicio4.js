const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const IVA = 0.19;
let subtotal = 0;
function leerNumero(pregunta, esEntero = false) {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      let valor = esEntero ? parseInt(respuesta) : parseFloat(respuesta);

      if (isNaN(valor) || valor <= 0) {
        console.log("Error: el valor ingresado debe ser un número positivo.");
        resolve(leerNumero(pregunta, esEntero));
      } else {
        resolve(valor);
      }
    });
  });
}
async function iniciarCompra() {
  let continuar = true;
  while (continuar) {
    const precio = await leerNumero("Precio del producto: ");
    const cantidad = await leerNumero("Cantidad de unidades: ", true);

    const totalParcial = precio * cantidad;
    subtotal += totalParcial;

    console.log(`Total del producto: $${totalParcial.toFixed(2)}`);

    const respuesta = await new Promise((resolve) => {
      rl.question("¿Quiere ingresar otro producto? (s/n): ", (res) => {
        resolve(res.trim().toLowerCase());
      });
    });

    if (respuesta !== "s") {
      continuar = false;
    }
  }

  const valorIVA = subtotal * IVA;
  const totalPagar = subtotal + valorIVA;

  console.log("\nResumen de la compra:");
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`IVA (19%): $${valorIVA.toFixed(2)}`);
  console.log(`Total a pagar: $${totalPagar.toFixed(2)}\n`);

  rl.close();
}
iniciarCompra();
