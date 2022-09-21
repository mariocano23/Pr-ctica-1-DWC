"use strict";
let partido1Juan;
let partido2Juan;
let partido3Juan;
let mediaJuan;
let partido1Miguel;
let partido2Miguel;
let partido3Miguel;
let mediaMiguel;
let partido1Maria;
let partido2Maria;
let partido3Maria;
let mediaMaria;
let ganador;
let mediaGanador;
let numPartidos;

numPartidos = 3;

partido1Juan = 59;
partido2Juan = 130;
partido3Juan = 63;

partido1Miguel = 87;
partido2Miguel = 153;
partido3Miguel = 90;

partido1Maria = 103;
partido2Maria = 167;
partido3Maria = 115;

mediaJuan = (partido1Juan+partido2Juan+partido3Juan)/numPartidos;
mediaMiguel = (partido1Miguel+partido2Miguel+partido3Miguel)/numPartidos;
mediaMaria = (partido1Maria+partido2Maria+partido3Maria)/numPartidos;


if ((mediaJuan>mediaMiguel)&&(mediaJuan>mediaMaria)) {
    ganador = "Juan";
    mediaGanador = mediaJuan;
} else {
    if ((mediaMiguel>mediaJuan)&&(mediaMiguel>mediaMaria)) {
        ganador = "Miguel";
        mediaGanador = mediaMiguel;
    } else {
        if ((mediaMaria>mediaMiguel)&&(mediaMaria>mediaJuan)) {
            ganador = "Maria";
            mediaGanador = mediaMaria;
        } else {
            ganador = "Empate";
        }
    }
}

if (ganador=="Empate") {
    console.log(`El resultado ha sido un empate.`);
} else {
    console.log(`El ganador/a ha sido ${ganador} con una media de ${mediaGanador} .`);
}