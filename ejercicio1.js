"use strict";
let masaMarcos;
let masaJuan;
let alturaMarcos;
let alturaJuan;
let imcMarcos;
let imcJuan;
let marcosMayorJuan;

masaMarcos = 60;
masaJuan = 70;
alturaMarcos = 167;
alturaJuan = 178;
marcosMayorJuan = false;

imcMarcos = masaMarcos/(alturaMarcos*alturaMarcos);
imcJuan = masaJuan/(alturaJuan*alturaJuan);

if (imcMarcos>imcJuan) {
    marcosMayorJuan = true;
}

console.log(`¿Es el IMC de Marcos mayor al de Juna? ${marcosMayorJuan} .`);