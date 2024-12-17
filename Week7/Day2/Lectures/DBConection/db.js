const knex = require('knex')
require('dotenv').config()


const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD,PGPORT} = process.env



const db = knex({
    client: 'pg',
    connection:{
        host:PGHOST,
        port:PGPORT ,
        user:PGUSER,
        database:PGDATABASE,
        password:PGPASSWORD,
        ssl: {rejectUnauthorized:false}
    }
})


// async function getVErsion() {
//     const result = await db.raw("select version()")
//     console.log(result.rows);
    
    
// }
// getVErsion() 


// db('products').select('*')
// // .where({ id: 3})//('id',3)
// .orderBy('name')
// .then ((data) => {
//     console.log(data);
    
// })

// db.raw("SELECT id,name,price FROM products")
// .then ((data) => {
//     console.log(data.rows);
// })