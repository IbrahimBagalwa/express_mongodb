const express = require('express');
const app = express();

const db = require('./connect/connection')

// db.authenticate()
//     .then(()=>{
//         console.log(`connection has been established successfully to the ${url}`)
//     })
//     .catch(err =>
//         console.log(`unable to connect to the database `, err)
//     );

const port = process.env.PORT || 5000
app.listen(port, console.log(`server run on port ${port}........`));