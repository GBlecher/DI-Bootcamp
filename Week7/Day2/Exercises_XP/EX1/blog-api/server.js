const express = require("express")
const cors = require("cors");
const { postsRouter } = require('./server/routes/postsRouter.js');

const app = express()

app.use(cors());
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(postsRouter);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

})

