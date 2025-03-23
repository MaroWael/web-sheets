// Q1
// const add = (x:number, y:number, z:number = 0) => x+y+z;
// console.log(add(10, 20))
// const mult = (x:number, y:number, z:number = 1) => x*y*z;
// console.log(mult(10,20))
// const sub = (x:number, y:number, z:number = 0) => x-y-z;
// console.log(add(10, 20))
// const div = (x:number, y:number, z:number = 1) => {
//     if(y === 0 || z === 0)
//         throw new Error("Canont devide ny zero")
//     return x/y/z;
// };
// console.log(mult(10,20))
// const rem = (x:number, y:number, z?:number) => {
//     if(y === 0 || z === 0)
//         throw new Error("Canont devide ny zero")
//     return z === undefined ? x%y : x%y%z;
// };
// console.log(rem(10,20,30))

// Q2
// const temp = (deg : number, unit: 'F' | 'K'):number => {
//     const toF = (deg * 9/5) + 32;
//     const toK = deg + 273.15;
//     if(unit == 'F')
//         return toF;
//     else
//         return toK;
// }
// console.log(temp(10, 'K'))

// Q3
// const factors = (num:number) => {
//     let arr:number[] = []
//     for(let i:number = 1; i <= num; ++i)
//     {
//         if(num % i == 0)
//             arr.push(i)
//     }
//     return [arr.join(' - '), arr.length];
// }
// console.log(factors(6))

// Q4
type User = {
    id: number;
    name: string;
    email: string;
    isSubscribed: boolean;
};

const subUsers = (...args: User[]):number => {
    let total: number = 0;
    for(let i = 0; i < args.length; ++i)
    {
        if(args[i].isSubscribed == true)
            ++total;
    }
    return total;
}
const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", isSubscribed: true },
    { id: 2, name: "Bob", email: "bob@example.com", isSubscribed: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", isSubscribed: true }
];
console.log(subUsers(...users))