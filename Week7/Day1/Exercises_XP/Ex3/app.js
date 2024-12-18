const express = require("express")
const app = express()
const PORT = 3005
const booksRouter = require('./routes/router.js');
app.use(express.json())

app.use('/books', booksRouter)

app.listen(PORT,() => {
    console.log(`Run on ${PORT}`);
})