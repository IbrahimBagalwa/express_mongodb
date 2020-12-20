const mongoose = require('../connect/connection');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    price:{
        type:INTEGER,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("products", postSchema);
