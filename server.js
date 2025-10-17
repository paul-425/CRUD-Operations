require("dotenv").config()
var express = require("express")

var connectToDatabase = require("./database/db")

var bookroute= require("./routes/book_routes")


var app = express()

// connect to the data base
connectToDatabase()

// add the middle ware

app.use(express.json())
app.use("/api/books",bookroute)

var PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("The server is running");
})