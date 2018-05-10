"use strict";
exports.__esModule = true;
var Circulo_1 = require("./Circulo");
var Triangulo_1 = require("./Triangulo");
function dibujarFormas(forma) {
    forma.dibujar();
}
dibujarFormas(new Circulo_1.Circulo());
dibujarFormas(new Triangulo_1.Triangulo());
