let Rx:any;

//Suscripción al evento click con JS
var button = document.querySelector("button");
button.addEventListener('click', ()=> {
    console.log("Click con JS")
});

//Suscripción al evento click con RxJS
let btn = document.querySelector("button");
Rx.Observable.fromEvent(btn, 'click').subscribe(() => {
    //Llama a la función con observable al hacer click
    llamar();
});

function llamar(){
    console.log("esperando");
    let getFirst = Rx.Observable.timer(3000).mapTo({id:1}).subscribe(res => {
        console.log(res);
        console.log("ya llegó");
    });
    console.log("algo bajo el subscribe");
}

//Data de prueba para filter
let data = [1,2,3,4,5];

//Observable y uso del operador filter
let callArray = Rx.Observable.from(data).filter(num => num > 1);

callArray.subscribe(res => {
    console.log(res);
});


//Llamadas ajax con RxJS
let call = Rx.Observable.ajax("https://jsonplaceholder.typicode.com/posts")
    .map(respuesta => respuesta.response);

let call2 = Rx.Observable.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body:{
        hola:"mundo"
    }
}).map(res => res.response);

call.subscribe(res => {
    console.log(res);
});

//Observables con timer
let getFirst = Rx.Observable.timer(3000).mapTo({id:1});
getFirst.subscribe(res => {
    console.log("Llega el primero");
    console.log(res);
});

let getSecond = Rx.Observable.timer(5000).mapTo({id:2});
getSecond.subscribe(res => {
    console.log("llega el segundo");
    console.log(res);
})

//Operador concat
Rx.Observable.concat(getFirst, getSecond).subscribe(res => {
    console.log(res);
});

//Operador forkJoin
Rx.Observable.forkJoin(getSecond, getFirst).subscribe(res => {
    console.log(res);
});

//https://www.learnrxjs.io/