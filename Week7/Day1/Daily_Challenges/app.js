const express = require("express")
const app = express()
const PORT = 4001
const quizRouter = require('./routes/router.js');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/quiz', quizRouter)

app.listen(PORT,() => {
    console.log(`Run on ${PORT}`);
})