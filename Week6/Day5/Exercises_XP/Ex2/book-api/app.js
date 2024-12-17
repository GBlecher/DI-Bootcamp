express = require('express')


const app = express()
app.use(express.json())
const PORT = 5005
app.listen(PORT, ()=>{
    console.log((`run on ${PORT}`));
    
})


const books = [
    {
        bookId: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        bookId: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        bookId: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    },
    {
        bookId: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813
    },
    {
        bookId: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951
    }
];
//get all
app.get('/api/books', (req,res)=>
{
    res.json(books)
})
//get by id
app.get("/api/books/:bookId", (req, res) => {
    console.log(req.params);
    const { bookId } = req.params;
    const myBook = books.find((item) => item.bookId == bookId);
    if (!myBook) {
        return res.sendStatus(404).json({ message: "Book not found" })
    }else
    {
        res.json(myBook);
        return res.sendStatus(200).json({message: "OK" })
    }
});


// create new book
app.post('/api/books',(req, res) => {
    
    const { title, author, publishedYear } = req.body;
    console.log(req.body);
    if(!title||!author|| !publishedYear)
    {
        return res.status(400).json({error: "requires both title and content"})
    }
    const newBook = { bookId: books.length + 1, title, author,publishedYear };

    books.push(newBook);
    res.sendStatus(201).json(books);
})