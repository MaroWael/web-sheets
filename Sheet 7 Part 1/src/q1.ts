interface Struct {
    users: {
        username: string;
        age: number;
    }
}
const user: Struct = {
    users: {
        username: 'Maro Mafia',
        age: 20
    }
}
function Data(): Promise<Struct> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(user)
        }, 2000)
    })
}
async function fetchData() {
    console.log("Program Start")
    console.log(await Data())
    console.log("Program Completed")
}

fetchData()

/*
Using Promises & Then ("Not Required in the question")
function getUser() {
    console.log("Fetching User")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user)
        }, 2000)
    }).then(res=>console.log(res))
    .then(()=> console.log("User Fetched"))
}
*/