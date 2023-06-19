const express = require('express')

const path = require('path')

// Importing Utility path
const dirFile = require("./../util/path")

// Express Routing Functionality
const router = express.Router()

router.get("/add-product",(req,res,next) => {
    // res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button>Send</button></form>")
    res.sendFile(path.join(dirFile,'views','add_product.html'))
})

router.post("/add-product",(req,res,next) => {
    console.log(req.body)
    res.redirect("/")

})

module.exports = router;
