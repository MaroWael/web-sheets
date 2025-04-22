interface Product {
    item: string;
    quntity: number;
}
const prod: Product = {item: "apple", quntity: 10};

function getProduct(): Promise<Product> {
    return new Promise<Product>((resolve) => {
        setTimeout(() => {
            resolve(prod);
        }, 2000)
    })
}

function calcPrice(param: Product): Promise<number> {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(param.quntity * 10);
        }, 3000)
    })
}

// Solution using async/await
async function run() {
    console.log("Fetching product...");
    try {
        const data = await getProduct();
        const price = await calcPrice(data);
        console.log(`The price of ${data.item} is ${price}`);
    } catch (error) 
    {
        console.error("Error fetching product:", error);
    }
}
// run(); // Uncomment to run the async/await solution

// Solution using then/catch
console.log("Fetching product...");
getProduct().then(data => calcPrice(data))
    .then(price => console.log(`The price of ${prod.item} is ${price}`))
    .catch(error => console.error("Error fetching product:", error));