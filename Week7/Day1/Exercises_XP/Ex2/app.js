const express = require("express")
const app = express()
const PORT = 3005
const todosRouter = require('./routes/router.js');
app.use(express.json())

app.use('/todos', todosRouter)

app.listen(PORT,() => {
    console.log(`Run on ${PORT}`);
})