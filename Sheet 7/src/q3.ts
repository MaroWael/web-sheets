interface Struct {
    users: {
        username: string;
        age: number;
    }
}
const user3: Struct = {
    users: {
        username: 'Ahmed',
        age: 20
    }
}
function fetchData(user: Struct): Promise<Struct> {
    return new Promise((resolve) => {
        resolve(user)
    })
}
function login(user: Struct)
{
    if(user.users.username === "Ahmed") {
        console.log("Login Successful")
    }
    else {
        console.log("Login Failed")
    }
}
async function fetchDataAndLogin(user: Struct)
{
    console.log("Program Starts");
    try {
        const data = await fetchData(user);
        login(data);
    } catch (err) {
        console.log("Error: ", err); 
    }
    console.log("Program Completed")
}
fetchDataAndLogin(user3)

/* Using Promises & Then ("Not Required in the question")
console.log("Program Starts")
fetchData(user3).then(data => login(data)).catch(err => console.log("Error: ", err))
console.log("Program Completed")
*/