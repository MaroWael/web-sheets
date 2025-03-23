function isPrim(n: number): boolean
{
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); ++i)
        if (n % i === 0)
            return false;
    return true;
}
let table = document.createElement("table");
table.setAttribute("border", "1");
const btn = document.querySelector("button") as HTMLButtonElement;
btn.addEventListener("click", () => {
    const num = document.getElementById("num") as HTMLInputElement;
    const result = document.getElementById("result") as HTMLInputElement;
    const arr: number[] = num.value.split("-").map(x => Number(x));
    for(let i of arr)
    {
        if(isPrim(i))
        {
            table.innerHTML += `<tr class='green'><td>${i}</td><td>Is Prime</td></tr>`;
            result.appendChild(table);
        }
        else
        {
            table.innerHTML += `<tr class='red'><td>${i}</td><td>Is Not Prime</td></tr>`;
            result.appendChild(table);
        }
    }
});