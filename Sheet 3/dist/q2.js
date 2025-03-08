"use strict";
function convert(c, unit) {
    return unit == 'F' ? c * 9 / 5 + 32 : c + 273.15;
}
let f = document.querySelector('#f');
let k = document.querySelector('#k');
let both = document.querySelector('#both');
let convertBtn = document.querySelector('button');
let para = document.querySelector('#output');
convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let c = parseFloat(document.querySelector('#c').value);
    if (f.checked)
        para.innerHTML = `Temperature in Fahrenheit: ${convert(c, 'F')}`;
    else if (k.checked)
        para.innerHTML = `Temperature in Kelvin: ${convert(c, 'K')}`;
    else
        para.innerHTML = `Temperature in Fahrenheit: ${convert(c, 'F')} and in Kelvin: ${convert(c, 'K')}`;
});
