/// <reference path = "IFormas.ts" />
var Dibujo;
(function (Dibujo) {
    var Circulo = /** @class */ (function () {
        function Circulo() {
        }
        Circulo.prototype.dibujar = function () {
            console.log("Dibuja un círculo");
        };
        return Circulo;
    }());
    Dibujo.Circulo = Circulo;
})(Dibujo || (Dibujo = {}));
/// <reference path = "IFormas.ts" />
var Dibujo;
(function (Dibujo) {
    var Triangulo = /** @class */ (function () {
        function Triangulo() {
        }
        Triangulo.prototype.dibujar = function () {
            console.log("Dibuja un triángulo");
        };
        return Triangulo;
    }());
    Dibujo.Triangulo = Triangulo;
})(Dibujo || (Dibujo = {}));
/// <reference path = "IFormas.ts" />
/// <reference path = "Circulo.ts" />
/// <reference path = "Triangulo.ts" />
function dibujarFormas(forma) {
    forma.dibujar();
}
dibujarFormas(new Dibujo.Circulo());
dibujarFormas(new Dibujo.Triangulo());
