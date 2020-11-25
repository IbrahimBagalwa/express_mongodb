
const mongoose = require('mongoose');


const url = "mongodb://localhost/posnod";
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true}, 
    ()=>{
    console.log(`connection has been established successfully to ${url}`)
})
// const con = mongoose.connection
// con.on('open', ()=>{
//     console.log("yes on est connecter")
// })

module.exports = mongoose;