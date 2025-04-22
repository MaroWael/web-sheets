"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const prod = { item: "apple", quntity: 10 };
function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prod);
        }, 2000);
    });
}
function calcPrice(param) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param.quntity * 10);
        }, 3000);
    });
}
// Solution using async/await
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Fetching product...");
        try {
            const data = yield getProduct();
            const price = yield calcPrice(data);
            console.log(`The price of ${data.item} is ${price}`);
        }
        catch (error) {
            console.error("Error fetching product:", error);
        }
    });
}
// run(); // Uncomment to run the async/await solution
// Solution using then/catch
console.log("Fetching product...");
getProduct().then(data => calcPrice(data))
    .then(price => console.log(`The price of ${prod.item} is ${price}`))
    .catch(error => console.error("Error fetching product:", error));
