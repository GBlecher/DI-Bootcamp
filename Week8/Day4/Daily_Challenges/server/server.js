const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');


app.use(express.json());
app.use(cors())


app.get('/api/hello', (req, res) => {
    res.send("Hello From Express");
});

app.post('/api/world', (req, res) => {
    const { value } = req.body; 
    res.send(`I received your POST request. This is what you sent me: ${value}`);
});

app.listen(port, () => {
    console.log(`Server running at:${port}`);
});