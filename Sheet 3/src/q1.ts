interface MathOperations
{
    add(x: number, y: number): number | string;
    subtract(x: number, y: number): number | string;
    multiply(x: number, y: number): number | string;
    divide(x: number, y: number): number | string;
    remainder(x: number, y: number): number | string;
}

let mathOps: MathOperations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => y !== 0 ? x / y : "Can't calculate",
    remainder: (x, y) => y !== 0 ? x % y : "Can't calculate"
};

let mySum = document.getElementById("sum") as HTMLElement
let mySub = document.getElementById("sub") as HTMLElement
let myMul = document.getElementById("mul") as HTMLElement
let myDiv = document.getElementById("div") as HTMLElement
let myRem = document.getElementById("rem") as HTMLElement
let table = document.querySelector("table") as HTMLTableElement
let btn = document.querySelector("button") as HTMLButtonElement;

btn.addEventListener("click", (e) => { 
    e.preventDefault()
    let x = parseInt((document.getElementById("x") as HTMLInputElement).value);
    let y = parseInt((document.getElementById("y") as HTMLInputElement).value);


    mySum.innerHTML = mathOps.add(x, y).toString();
    mySub.innerHTML = mathOps.subtract(x, y).toString();
    myMul.innerHTML = mathOps.multiply(x, y).toString();
    myDiv.innerHTML = mathOps.divide(x, y).toString();
    myRem.innerHTML = mathOps.remainder(x, y).toString();

    table.removeAttribute("style")
})