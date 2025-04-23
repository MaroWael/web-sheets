interface Car {
    brand: string,
    model: string,
    class: string
}
interface User {
    name:string,
    age:number
}
interface Interests {
    user: User,
    car: Car
}
const car: Car = {
    brand: "Toyota",
    model: "Corolla",
    class: "B"
};
const cars:Car[] = [car];
const users:User[] = [];
const interests:Interests[] = [];

export {cars, users, interests}