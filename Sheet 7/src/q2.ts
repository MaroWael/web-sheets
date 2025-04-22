interface Struct {
    users: {
        username: string;
        age: number;
    }
}
const user2: Struct = {
    users: {
        username: 'Maro Mafia',
        age: 20
    }
}
function Data(): Promise<Struct> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject("Rejected")
        }, 2000)
    })
}
async function fetchData() {
    console.log("Program Start")
    try {
        const data = await Data()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    console.log("Program Completed")
}
fetchData()

/* Using Promises & Then ("Not Required in the question")
function getData(){
    console.log("Fetching User")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected")
        }, 2000)
    }).catch((error) => {
        console.log("Error: ", error)
    })
}
getData().then(() => console.log("User Fetched"))
*/