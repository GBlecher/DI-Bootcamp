express = require('express')


const app = express()
const PORT = 5000
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

app.get('/api/books', (req,res)=>
    {
        res.json(books)
    })

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