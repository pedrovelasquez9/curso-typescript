function prueba(nombre:string|string[]) {
    if(typeof nombre == "string") {
        console.log(nombre);
    } else{
        for(let i in nombre){
            console.log(nombre[i]);
        }
    }
}

prueba("Pedro");

prueba(["Pedro", "María", "Esther", "Eduardo"]);

function operadores(){
    let i = 1;
    let j = 2;

    let resul: any;
    //
    console.log("suma: ", i+j);
    console.log("resta: ", i-j);
    console.log("multiplicación: ", i*j);
    console.log("división: ", i/j);
    console.log("módulo: ", i%j);
    console.log("incremento ", i++);
    console.log("decremento ", i--);

    //
    console.log("mayor que: ", i>j);
    console.log("menor que: ", i<j);
    console.log("mayor igual: ", i>=j);
    console.log("menor igual: ", i<=j);
    console.log("igual: ", i==j);
    console.log("Distinto: ", i!=j);

    //
    console.log("y: ", (i>1 && j<5));
    console.log("o: ", (i>1 || j<5));
    console.log("Negación: ", !(i>1));

    //
    let z = 5;
    console.log("Operadores de asignación");
    z+=i;
    console.log("suma: ", z);
    z-=j;
    console.log("resta: ", z);
    z*=i;
    console.log("multiplicación: ", z);
    z/=j;
    console.log("división: ", z);

    //
    let numero = 4;
    let numero_negativo = -numero;
    console.log("valor de número: ", numero);
    console.log("valor del número negativo: ", numero_negativo);

    //
    let mensaje = "hola"+" mundo";
    console.log(mensaje);

    //
    let num = -2;
    let resultado = num > 0 ? "positivo" : "negativo";
    console.log("resultado con operador ternario: ", resultado);

    //
    let n = 12;
    console.log(typeof n);
}

operadores();

function condicionales(){
    let i = 0;
    let j = 1;

    if(i == 0){
        console.log("if");
    }else if(j == 1){
        console.log("else if");
    }else {
        console.log("else final")
    }

    let calificacion: String = "A";
    switch(calificacion){
        case "A": {
            console.log("aprobado");
            break;
        }
        default: {
            console.log("condición por defecto");
            break;
        }
    }
}

condicionales();

function loops(){
    let arreglo: Array<number> = [1,2,3,4,5];
    for(let i:number = 0; i<arreglo.length;i++){
        console.log(arreglo[i]);
    }

    for(let i in arreglo){
        console.log("for in...: ", arreglo[i]);
    }

    let num: number = 5;
    let fact: number = 1;

    while(num>=1){
        fact = fact*num;
        num --;
    }
    console.log("el factorial es: ", fact);

    //do while
    do {
        //lo que vayamos a hacer mientras la condición se cumple
    } while(false);

}

loops();

function suma(num1: number, num2: number){
    console.log(`llamado a función de suma con parámetros ${num1} y ${num2}`);
}

suma(1, 5);

//retorno en funciones
function saludo():string {
    return "Hola functions";
}

function llamada(){
    let msg: string = saludo();
    console.log(msg);
}

llamada();

function user_details(id:number, nombre:string, email?:string){
    console.log("id del usuario: ", id);
    console.log("nombre del usuario: ", nombre);

    if(email != undefined){
        console.log("email: ", email);
    }
}

user_details(1,"Pedro", "pjpv9011@gmail.com");
user_details(2, "María");

//Funciones con parámetros REST

function numeros(...nums:number[]){
    let i;
    let sum: number = 0;

    for(let i in nums){
        sum = sum + nums[i];
    }
    console.log(`la suma de los números es: ${sum}`);
}

numeros(1,2,3);
numeros(20,30,40,50,60,70,80,90,100);

//Parámetros por defecto

function calcular(precio: number, tasa:number = 0.50){
    console.log("Descuento: ", precio*tasa);
}

calcular(50);
calcular(50, 0.30);

//Funciones anónimas
let mensaje = function(nombre:String){
    return `hola anónimo con nombre ${nombre}`;
}

console.log(mensaje("Pedro"));

//Función recursiva
(function(){
    let msg = "Hola recursividad!";
    console.log(msg);
})()

//Funciones Lambda

let fn = (x:number) => 10+x
console.log(fn(100));

let lambda = (x:number) => {
    x = 10+x;
    console.log(x);
}

lambda(50);

let sin_p = x =>{
    console.log(`el parámetro es ${x}`);
}

sin_p(50);

let sin_params = ()=>{
    console.log("función lambda sin parámetros");
}

sin_params();