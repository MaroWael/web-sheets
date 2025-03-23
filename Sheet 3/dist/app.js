"use strict";
function isPrim(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); ++i)
        if (n % i === 0)
            return false;
    return true;
}
let table = document.createElement("table");
table.setAttribute("border", "1");
table.innerHTML = '';
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const num = document.getElementById("num");
    const result = document.getElementById("result");
    result.innerHTML = "";

    const arr = num.value.split("-").map(x => Number(x)); // To split "1-2-3-4-5" to [1, 2, 3, 4, 5]
    const firstPrime = arr.find(x => isPrim(x)); // to just use find function as required

    // check if there is no prime number in the array
    if(firstPrime === undefined) {
        result.innerHTML = "No prime number found";
        return;
    } else {
        arr.forEach(x => {
            table.innerHTML += `<tr class="${isPrim(x) ? "green" : "red"}">
            <td>${x}</td>
            <td>${isPrim(x) ? "Is prime": "Isn't prime"}</td>
            </tr>`;
        });
    }
    result.appendChild(table);
});
