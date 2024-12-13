const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


// console.log(__dirname + "/public")
app.use("/", express.static(__dirname + "/public"))

const PORT = 3003
app.listen(PORT, ()=>{
    console.log((`run on ${PORT}`));
    
})

const users = [
    {
        name: 'Alice Smith',
        email: 'alice.smith@example.com'
    },
    {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com'
    },
    {
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com'
    },
    {
        name: 'Diana Prince',
        email: 'diana.prince@example.com'
    },
    {
        name: 'Ethan Hunt',
        email: 'ethan.hunt@example.com'
    }
];
app.get('/users', (req,res)=>
{
    // res.send(users)// if not sure if json or something else
    res.json(users)// if you are sure
})



/**
 * create a module userInfo.js that get users from this api - https://jsonplaceholder.typicode.com/users
 * create a server.js
 * GET - get al users
 * GET to search users with id in params
 * GET - to search a user with name case insensetive in query
 */