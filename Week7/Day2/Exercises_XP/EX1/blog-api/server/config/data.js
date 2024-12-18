const knex = require('knex')
require('dotenv').config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false }
    }
})

// const posts = [
//     { id: 1, title: "First Post", content: "This is the content of the first post." },
//     { id: 2, title: "Second Post", content: "This is the content of the second post." },
//     { id: 3, title: "Third Post", content: "This is the content of the third post." }
// ];

module.exports = { db,};