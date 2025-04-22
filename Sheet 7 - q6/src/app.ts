import express from 'express';
import booksRouter from './routes/books';
import { logger } from './middleware/logger';

const port = 2001;
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(logger);
app.use('/', booksRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})