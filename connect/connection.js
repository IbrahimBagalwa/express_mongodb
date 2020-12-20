const config = require('config')
const mongoose = require('mongoose');


const url= config.get('server_url');
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true}, ()=>{
    console.log(`connection has been established successfully to ${url}`)
})

module.exports = mongoose;