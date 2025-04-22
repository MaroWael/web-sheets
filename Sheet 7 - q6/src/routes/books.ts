// routes/books
import express from "express";
import { Book, books } from "../data/book";
import { validateBook } from "../middleware/validatebook";

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send(`Welcome to the Books API!`)
})
router.get('/books', (req, res) => {
    res.status(200).json(books);
})
router.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    book ? res.status(200).json(book) : res.status(404).json({ message: "Book not found." });
});
router.post('/books', validateBook, (req, res) => {
    const { title, author } = req.body;
    const newBook: Book = {
        id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 0,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
router.put('/books/:id', validateBook, (req, res) => {
    const id = Number(req.params.id);
    const { title, author } = req.body
    const bookIdx = books.findIndex(b => b.id === id)
    if(bookIdx === -1)
        res.status(404).json({"Message": "Enter a valid ID"});
    books[bookIdx].author = author;
    books[bookIdx].title = title;
    res.status(201).json({"Message": "Book Updated Successfully"})
})


export default router;