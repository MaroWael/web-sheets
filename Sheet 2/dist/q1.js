"use strict";
let mathOps = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => y !== 0 ? x / y : "Can't calculate",
    remainder: (x, y) => y !== 0 ? x % y : "Can't calculate"
};
let mySum = document.getElementById("sum");
let mySub = document.getElementById("sub");
let myMul = document.getElementById("mul");
let myDiv = document.getElementById("div");
let myRem = document.getElementById("rem");
let table = document.querySelector("table");
let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    mySum.innerHTML = mathOps.add(x, y).toString();
    mySub.innerHTML = mathOps.subtract(x, y).toString();
    myMul.innerHTML = mathOps.multiply(x, y).toString();
    myDiv.innerHTML = mathOps.divide(x, y).toString();
    myRem.innerHTML = mathOps.remainder(x, y).toString();
    table.removeAttribute("style");
});
