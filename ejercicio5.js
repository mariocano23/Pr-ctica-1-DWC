"use strict";

let valFacturas = [124,48,268];


function calcPropinas(facturas) {
    let propinas = [];
    let precioFin = [];
    let resultado = "";
    for (let i = 0; i < facturas.length; i++) {
        if (facturas[i]<50) {
            propinas[i] = facturas[i]*0.2;
        } else {
            if (facturas[i]<200) {
                propinas[i] = facturas[i]*0.15;
            } else {
                propinas[i] = facturas[i]*0.1;
            }
        }
    }
    for (let i = 0; i < facturas.length; i++) {
        precioFin[i]=facturas[i]+propinas[i];
    }
    for (let i = 0; i < facturas.length; i++) {
        resultado=`${resultado}Factura ${i+1}: ${precioFin[i]} $\n`;
    }
    return resultado;
}

console.log(calcPropinas(valFacturas));