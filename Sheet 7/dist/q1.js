"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    users: {
        username: 'Maro Mafia',
        age: 20
    }
};
function Data() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Program Start");
        console.log(yield Data());
        console.log("Program Completed");
    });
}
fetchData();
/*
Using Promises & Then ("Not Required in the question")
function getUser() {
    console.log("Fetching User")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user)
        }, 2000)
    }).then(res=>console.log(res))
    .then(()=> console.log("User Fetched"))
}
*/ 
