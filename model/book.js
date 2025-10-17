var mongoose = require("mongoose")

var bookSchema  = new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    license:Number,

}) 

module.exports = mongoose.model("books",bookSchema)