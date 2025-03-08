function convert(c: number, unit: 'F' | 'K'): number {
    return unit == 'F' ? c * 9 / 5 + 32 : c + 273.15;
}

let f = document.querySelector('#f') as HTMLInputElement;
let k = document.querySelector('#k') as HTMLInputElement;
let both = document.querySelector('#both') as HTMLInputElement;
let convertBtn = document.querySelector('button') as HTMLButtonElement;
let para = document.querySelector('#output') as HTMLParagraphElement;

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let c = parseFloat((document.querySelector('#c') as HTMLInputElement).value);
    if (f.checked)
        para.innerHTML = `Temperature in Fahrenheit: ${convert(c, 'F')}`;
    else if(k.checked)
        para.innerHTML = `Temperature in Kelvin: ${convert(c, 'K')}`;
    else
        para.innerHTML = `Temperature in Fahrenheit: ${convert(c, 'F')} and in Kelvin: ${convert(c, 'K')}`;
});