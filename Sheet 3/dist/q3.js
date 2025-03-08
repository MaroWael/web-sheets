"use strict";
// DOM elements
let pizzaName = document.querySelector('#name');
let pizzaSize = document.querySelector('#pizzaSize');
let pepperoni = document.querySelector('#pepperoni');
let mushrooms = document.querySelector('#mushrooms');
let sausage = document.querySelector('#sausage');
let order = document.querySelector('#order');
// Error message containers
let nameErrorContainer = document.querySelector('#nameError');
let sizeErrorContainer = document.querySelector('#sizeError');
let err = document.createElement('span');
err.style.color = 'red';
err.textContent = 'Please fill out this field';
// Function to get toppings
const getToppings = () => {
    let toppings = [];
    if (pepperoni.checked)
        toppings.push('Pepperoni');
    if (mushrooms.checked)
        toppings.push('Mushrooms');
    if (sausage.checked)
        toppings.push('Sausage');
    return toppings;
};
order.addEventListener('click', () => {
    nameErrorContainer.innerHTML = '';
    sizeErrorContainer.innerHTML = '';
    if (pizzaName.value === '') {
        nameErrorContainer.appendChild(err);
        return;
    }
    if (pizzaSize.value === "") {
        sizeErrorContainer.appendChild(err);
        return;
    }
    let pizza = {
        name: pizzaName.value,
        size: pizzaSize.value,
        toppings: getToppings()
    };
    alert(pizza.name + ' ' + pizza.size + ' ' + pizza.toppings.join(', '));
});
