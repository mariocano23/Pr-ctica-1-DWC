"use strict";

function facturas(nombreProd = "Producto genérico", precio = 100, impuesto = 21) {
    let precioFin = precio * (1+(impuesto/100));
    if (isNaN(precio)||isNaN(impuesto)) {
        return "ERROR. Los números no son válidos.";
    } else {
        return `Producto: ${nombreProd}, Precio final: ${precioFin} €`;
    }
}

console.log(facturas("Coche",10000,21));