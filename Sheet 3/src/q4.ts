function getFactors(n: number): number[] {
    const factors = [];
    for (let i = 1; i <= n; i++)
        if (n % i === 0)
        factors.push(i);
    return factors;
}

let calcFactors = document.querySelector("button") as HTMLButtonElement;

calcFactors.addEventListener("click", () => {
    let num = document.getElementById("num") as HTMLInputElement;
    let result = document.getElementById("result") as HTMLInputElement;
    let factors = getFactors(parseInt(num.value));
    let txt = ''
    for(let i = 0; i < factors.length; i++) {
        txt += `<tr><td>${factors[i]}</td></tr>`
    }
    result.innerHTML = `<br>
        <table border="1" style="background-color: ${factors.length % 2 === 0 ? 'lightblue' : 'lightgreen'};
        text-align: center;">
            <tr>
                <td style='font-weight: bold;'>Factors of ${num.value}</td>
            </tr>
            ${txt}
        </table>
    `
});