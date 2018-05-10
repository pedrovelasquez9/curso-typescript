var Rx;
//JS
var button = document.querySelector("button");
button.addEventListener('click', function () {
    console.log("Click con JS");
});
//RxJS
var btn = document.querySelector("button");
Rx.Observable.fromEvent(btn, 'click').subscribe(function () {
    llamar();
});
var data = [1, 2, 3, 4, 5];
var call = Rx.Observable.ajax("https://jsonplaceholder.typicode.com/posts")
    .map(function (respuesta) { return respuesta.response; });
var callArray = Rx.Observable.from(data).filter(function (num) { return num > 1; });
callArray.subscribe(function (res) {
    console.log(res);
});
var call2 = Rx.Observable.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        hola: "mundo"
    }
}).map(function (res) { return res.response; });
call.subscribe(function (res) {
    console.log(res);
});
var getFirst = Rx.Observable.timer(3000).mapTo({ id: 1 });
getFirst.subscribe(function (res) {
    console.log("Llega el primero");
    console.log(res);
});
var getSecond = Rx.Observable.timer(5000).mapTo({ id: 2 });
getSecond.subscribe(function (res) {
    console.log("llega el segundo");
    console.log(res);
});
Rx.Observable.concat(getFirst, getSecond).subscribe(function (res) {
    console.log(res);
});
function llamar() {
    console.log("esperando");
    var getFirst = Rx.Observable.timer(3000).mapTo({ id: 1 }).subscribe(function (res) {
        console.log(res);
        console.log("ya llegó");
    });
    console.log("algo bajo el subscribe");
}
Rx.Observable.forkJoin(getSecond, getFirst).subscribe(function (res) {
    console.log(res);
});
//https://www.learnrxjs.io/
