"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/dom/ajax");
let request = function (url) {
    return Observable_1.Observable.create(function (observer) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status == 200) {
                observer.onNext(req.response);
                observer.onCompleted();
            }
            else {
                observer.onError(req.statusText);
            }
        };
        req.onerror = function () {
            observer.onError(new Error("Unkown Error"));
        };
        req.send();
    });
};
let start = request("https://jsonplaceholder.typicode.com/posts");
start.subscribe(res => {
    console.log(res);
});
