/// <reference path = "IFormas.ts" />
/// <reference path = "Circulo.ts" />
/// <reference path = "Triangulo.ts" />
 
function dibujarFormas(forma: Dibujo.IFormas){
    forma.dibujar();
}

dibujarFormas(new Dibujo.Circulo());
dibujarFormas(new Dibujo.Triangulo());