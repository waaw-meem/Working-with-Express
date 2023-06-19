const express = require('express')

const path = require('path')

// Importing Utility path
const dirFile = require("./../util/path")

// Express Routing Functionality
const router = express.Router()

router.get("/",(req,res,next) => {
    // console.log('This is second Middleware')
    // res.send("<h1>Weclome to Express</h1>")

    res.sendFile(path.join(dirFile,'views','shop.html'))

})

module.exports = router;