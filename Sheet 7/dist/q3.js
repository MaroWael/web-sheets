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
const user3 = {
    users: {
        username: 'Ahmed',
        age: 20
    }
};
function fetchData(user) {
    return new Promise((resolve) => {
        resolve(user);
    });
}
function login(user) {
    if (user.users.username === "Ahmed") {
        console.log("Login Successful");
    }
    else {
        console.log("Login Failed");
    }
}
function fetchDataAndLogin(user) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Program Starts");
        try {
            const data = yield fetchData(user);
            login(data);
        }
        catch (err) {
            console.log("Error: ", err);
        }
        console.log("Program Completed");
    });
}
fetchDataAndLogin(user3);
/* Using Promises & Then ("Not Required in the question")
console.log("Program Starts")
fetchData(user3).then(data => login(data)).catch(err => console.log("Error: ", err))
console.log("Program Completed")
*/ 
