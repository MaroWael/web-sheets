import fs from 'fs/promises'
export async function userFile(file: any, data: any) {
    try {
        if(await exists(file)) {
            const rawData = await fs.readFile(file, 'utf8')
            const sub = JSON.parse(rawData)
            sub.push(data)
            await fs.writeFile(file, JSON.stringify(sub, null, 2))
        } else {
            await fs.writeFile(file, JSON.stringify([data], null, 2))
        }
    } catch (error) {
        console.log(error)
    }
}

async function exists(file:any) {
    try {
        await fs.access(file)
        return true;
    } catch (error) {
        return false;
    }
}

export async function getUser(user:any, file:any) {
    try {
        if(await exists(file)) {
            const rawData = await fs.readFile(file, 'utf8')
            const sub = JSON.parse(rawData)
            const findUser = sub.find((u:any) => u.email === user.email && u.password == user.password)
            return findUser || null
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}