var book  = require('../model/book')

var getAllBooks = async(req,res)=>{
    var totalBooks = await book.find()
    res.status(200).json(totalBooks)
}
var getSingleBook = async(req,res)=>{

    var SingleBookId = req.params.id
    var myBook = book.findById(SingleBookId)
    res.status(200).json(myBook)

}
var addNewBook = async(req,res)=>{
   var  addNew = req.body
   var newBook = await book.create(addNew)
   if(newBook){
    res.status(200).json(newBook)
   }
   else{
    res.status(404).json({message:"Cannot create a book"})
   }

}
var UpdateNewBook = async(req,res)=>{
    var updatedId = req.params.id-0
    var newUpdateBook = req.body
    var UpdatedData = await book.findByIdAndUpdate(updatedId,newUpdateBook)
        if(UpdatedData){
               res.status(201).json(UpdatedData)
        }
        else{
            res.status(400).json({message:"The data cannot Updated"})
        }
    

}
var deleteNewBook = async(req,res)=>{
    var deleteId = req.params.id-0
    var deletedData = await book.findByIdAndDelete(deleteId)
    if(deletedData){
        res.status(201).json(deletedData)
    }
    else{
        res.status(400).json({message:"the Data Cqnnot deleted"})
    }

}

module.exports = {
    getAllBooks,getSingleBook,addNewBook,UpdateNewBook,deleteNewBook
}
// var book = require("../model/book")


// var getAllBooks = async(req,res)=>{
//      var allBooks = await book.find()
//     res.status(200).json(allBooks)

// }
// var getSingleBook = async(req,res)=>{

// }

// var addNewBook = async(req,res)=>{
//      var newFormBook = req.body

//     var newBook = await book.create(newFormBook)
//     if(newBook){
//         res.status(201).json(newBook)
//     }

// }

// var UpdateNewBook = async(req,res)=>{

// }
// var deleteNewBook = async(req,res)=>{

// }

// module.exports = {
//     getAllBooks,getSingleBook,addNewBook,UpdateNewBook,deleteNewBook
// }