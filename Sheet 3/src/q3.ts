interface Pizza {
    name: string;
    size: string;
    toppings: string[];
}

// DOM elements
let pizzaName = document.querySelector('#name') as HTMLInputElement;
let pizzaSize = document.querySelector('#pizzaSize') as HTMLSelectElement;
let pepperoni = document.querySelector('#pepperoni') as HTMLInputElement;
let mushrooms = document.querySelector('#mushrooms') as HTMLInputElement;
let sausage = document.querySelector('#sausage') as HTMLInputElement;
let order = document.querySelector('#order') as HTMLButtonElement;

// Error message containers
let nameErrorContainer = document.querySelector('#nameError') as HTMLElement;
let sizeErrorContainer = document.querySelector('#sizeError') as HTMLElement;

let err = document.createElement('span');
err.style.color = 'red';
err.textContent = 'Please fill out this field';

// Function to get toppings
const getToppings = (): string[] => {
    let toppings: string[] = [];
    if (pepperoni.checked) toppings.push('Pepperoni');
    if (mushrooms.checked) toppings.push('Mushrooms');
    if (sausage.checked) toppings.push('Sausage');
    return toppings;
};

order.addEventListener('click', () => {
    nameErrorContainer.innerHTML = '';
    sizeErrorContainer.innerHTML = '';
    if (pizzaName.value === '') {
        nameErrorContainer.appendChild(err);
        return
    }
    if (pizzaSize.value === "none") {
        sizeErrorContainer.appendChild(err);
        return
    }
    let pizza: Pizza = {
        name: pizzaName.value,
        size: pizzaSize.value,
        toppings: getToppings()
    };
    alert(pizza.name + ' ' + pizza.size + ' ' + pizza.toppings.join(', '));
})