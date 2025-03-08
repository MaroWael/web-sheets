"use strict";
const subUsers = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; ++i) {
        if (args[i].isSubscribed == true)
            ++total;
    }
    return total;
};
const users = [
    { id: 1, name: "Alice", email: "alice@example.com", isSubscribed: true },
    { id: 2, name: "Bob", email: "bob@example.com", isSubscribed: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", isSubscribed: true }
];
console.log(subUsers(...users));
