"use strict";
function numerosPorPantalla(nVeces, nImprimir){
    let numeros = nImprimir;
    while (nVeces>0) {
        nImprimir*=2;
        numeros = `${numeros} ${nImprimir}`;
        nVeces-=1;
    }
    return numeros;
}

console.log(numerosPorPantalla(4,6));
