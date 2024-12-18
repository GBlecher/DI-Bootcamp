const express = require("express")
const app = express()
const router = require('./routes/router.js');

app.use('/', router)

const PORT = 3004
app.listen(PORT,() => {
    console.log(`Run on ${PORT}`);
})