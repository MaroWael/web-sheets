import express from 'express'
import { User } from './data/user';
import path from 'path';

const app = express()
const users: User[] = [
    {
        firstname: 'John',
        lastname: 'Doe',
        age: 30
    },
    {
        firstname: 'Jane',
        lastname: 'Smith',
        age: 25
    }
]
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get('/users', (req, res) => {
    res.status(200).json(users)
})
const port = 2000;
app.listen(port, () => {
    console.log(path.join(__dirname, 'views', 'index.html'))
})