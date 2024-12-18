const express = require('express')
const router = express.Router()

// Sample in-memory database for storing books 
const books = [];
let currId=1

// Get all books 
router.get('/', (req,res)=>{
    res.json(books)
})
// Add a new book
router.post('/', (req,res)=>{
    const newBook = {id: currId++, ...req.body}
    books.push(newBook)
    res.status(201).json(newBook)
})
// Update a book by ID
router.put('/:id', (req,res)=>{
    const {id} =req.params
    const index = books.findIndex(book => book.id == id);
    if (index !== -1) {
        books[index] = { id: books[index].id, ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})
// Delete a book by ID
router.delete('/:id', (req,res)=>{
    const {id} =req.params
    const index = books.findIndex(book => book.id == id);
    if (index !== -1) {
        books.splice(index,1)
        res.status(200).json({message:"Deleted!"})
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})

module.exports = router;