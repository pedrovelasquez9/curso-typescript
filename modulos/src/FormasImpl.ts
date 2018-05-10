import { IFormas } from "./IFormas";
import { Circulo } from "./Circulo";
import { Triangulo } from "./Triangulo";

function dibujarFormas(forma: IFormas){
    forma.dibujar();
}

dibujarFormas(new Circulo());
dibujarFormas(new Triangulo());