import express from 'express'
import router from './router/auth'
import path from 'path'
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express()
const port = 8080

app.use(session({
    secret: 'shit',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}));
app.use(cookieParser('shit'))
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

app.listen(port)