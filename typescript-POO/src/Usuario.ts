interface IUser {
    nombre: string;
}

class Usuario implements IUser{
    //Atributos
    public nombre: string;
    public objeto = {
        apellido: "Plasencia",
        edad: 27,
        email: "pjpv9011@gmail.com"
    }

    //constructor
    constructor(nombre:string){
        this.nombre = nombre;
    }
}

class Paciente extends Usuario {
    paciente():void{
        console.log("propiedades de clase usuario ", this.nombre);
    }
}

let obj = new Paciente("Pedro");
console.log(obj.paciente());
let apellido = obj.objeto["apellido"];
console.log(`Acceso en formato array ${apellido}`);
let edad = obj.objeto.edad;
localStorage.edad = edad;
localStorage.objeto = JSON.stringify(obj.objeto);
let objeto = JSON.parse(localStorage.objeto);
console.log(objeto);
