var express= require("express")
 
var {getAllBooks,getSingleBook,addNewBook,UpdateNewBook,deleteNewBook} = require("../controllers/book-controllers")



var router = express.Router()

router.get("/get",getAllBooks)


router.get("/get",getSingleBook)

router.post("/post",addNewBook)

router.put("/put",UpdateNewBook)


router.delete("delete",deleteNewBook)

module.exports = router

